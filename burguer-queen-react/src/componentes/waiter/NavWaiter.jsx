import './Waiter.css'
import logoNav from "../../assets/logoNav.png"

export const NavWaiter  = () => {
    return(
    <>
         <header>
            <figure>
              <img src={logoNav} alt="burger" className="waiter-logoburger-img" />
            </figure>
            <nav>  
              <ul>
                 <li><a href="">NEW ORDER </a></li>
                 <li><a href="">ORDER LIST</a></li>
              </ul>
            </nav>
              <button className='waiter-btn'>LogOut</button>
         </header>
    </>
    )
}