import './Administrador.css'
import logoNav from "../../assets/logoNav.png"

export const NavAdmin = () => {
    return(
    <>
         <header>
            <figure>
              <img src={logoNav} alt="burger" className="admin-logoburger-img" />
            </figure>
            <nav>  
              <ul>
                 <li><a href="">ADMINISTRAR PRODUCTOS</a></li>
                 <li><a href="">ADMINISTRAR EMPLEADOS</a></li>
              </ul>
            </nav>
              <button className='admin-btn'>LogOut</button>
         </header>
    </>
    )
}