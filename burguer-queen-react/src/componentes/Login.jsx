import logoBurger from "../assets/logoBurger.png";
import { useState, useEffect } from "react";
 import { useNavigate } from "react-router-dom";
import { httpLogin } from "../helpers/api";

const Login = ({ updateToken }) => {
  //para navegar a rutas
  const navigate = useNavigate();
  //Guardar la entrada del usuario  y password
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
 
  const loginClick = async (user, password) => {
    try {
      
      const data = await httpLogin(user, password);

      updateToken(data.accessToken)
      //segun el rol se navegara
      if (data.user.role === 'admin') return navigate('/administrador')
      if (data.user.role === 'chef') return navigate('/chef')
      if (data.user.role === 'waiter') return navigate('/waiter')

    } catch{
      console.log('No se encontraron roles asociados a su cuenta ');
    }
  };


  useEffect(() => updateToken(""), [])
  return (
    <>
      <main className="lg-main-conteiner">
        <div className="lg-logo">
          <img
            src={logoBurger}
            className="lg-logo-img"
            alt="Logo Burger Queen"
          />
        </div>
        <div className="lg-form-container">
          <form action="" className="lg-form">
            <h2>WELCOME</h2>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="example@gmail.com" 
            value={user} 
            onChange={(e) => setUser(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={loginClick(user, password)}>Login</button>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;