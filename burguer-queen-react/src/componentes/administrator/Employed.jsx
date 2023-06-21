import { httpAddEmployed, httpGetEmployed } from '../../helpers/api'
import './Administrador.css'
import { useState, useEffect } from "react";
import { NavAdmin } from './NavAdmin';

const Administrador = ({ token }) => {
  document.body.classList.add('others-background');
  document.body.classList.remove('login-background');
  // Definición de estados mediante el hook useState
const [email, setEmail] = useState(""); // Estado para almacenar el valor del correo electrónico
const [password, setPassword] = useState(""); // Estado para almacenar el valor de la contraseña
const [role, setRole] = useState(""); // Estado para almacenar el valor del rol
const [employees, setEmployed] = useState([]); // Estado para almacenar los empleados

async function saveEmployed(e) {
  e.preventDefault(); // Evita la recarga de la página - evita el comportamiento normal del evento

  // Verificación de datos obligatorios
  if (!email) return alert("You must enter your email");
  if (!password) return alert("You must enter a password");
  if (!role) return alert("You must select a role");

  // Creación del objeto newUser con los datos ingresados
  const newUser = {
    "email": email,
    "password": password,
    "role": role
  };

  try {
    await httpAddEmployed(token, newUser); // Llamada a la función httpAddEmployed para agregar un empleado
    console.log("Se inserto al empleado con exito");
    // Según el rol, se puede navegar a una página específica
  } catch {
    console.log('No se pudo agregar al empleado');
  }
}

async function readEmployed() {
  setEmployed(await httpGetEmployed(localStorage.getItem("token"))); // Llamada a la función httpGetEmployed para obtener los empleados
}

// Utilización del hook useEffect para ejecutar la función read al cargar el componente
useEffect(() => {
  const read = async () => {
    await readEmployed();
  };
  read();
}, []);


  return (
    <>
      <NavAdmin />
      <main className='adm-main-container'>
        <div>
          <h5>List Of Waiters </h5>

          <table className='table-list-of-employed'>
            <thead>
              <tr>
                <th className='table-th-td' id='table-th'>Employed</th>
                <th className='table-th-td' id='table-th'>Role</th>
                <th className='table-th-td' id='table-th'>Actions</th>
              </tr>
            </thead>
            <tbody>
              {employees?.map((employed) => (
                <tr key={employed.id}>
                  <td className='table-th-td' id='table-td'>{employed.email}</td>
                  <td className='table-th-td' id='table-td'>{employed.role}</td>
                  <td className='table-th-td' id='table-td'>
                    <button>Edit</button>
                    <button>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <aside className="admin-form-container">
          <form action="" className="admin-form" onSubmit={(e) => saveEmployed(e)}>
            <h2><strong>Add New Waiter</strong></h2>
            <label htmlFor="">Email</label>
            <input type="email" placeholder="example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="">Password</label>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="">Role</label>
            <select name="" id="" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="" disabled="" selected="" >Select role:</option>
              <option value="admin">Administrador</option>
              <option value="chef">Chef</option>
              <option value="waiter">Waiter</option>
            </select>
            <button type="submit" className="wt-orders-table__submit-button" >Add Employed</button>
          </form>
        </aside>
      </main>
    </>
  )
}
export default Administrador;