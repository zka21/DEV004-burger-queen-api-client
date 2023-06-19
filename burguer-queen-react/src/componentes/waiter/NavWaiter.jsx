import './Waiter.css'
import logoNav from "../../assets/logoNav.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom"

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
                 <Link className="nav-link" to={`/waiter/orders/list`}>ORDER LIST </Link>
              </ul>
            </nav>
              <button className='waiter-btn'><FontAwesomeIcon icon={faRightFromBracket} size="lg" style={{color: "#e1d76b",}}></FontAwesomeIcon></button>
         </header>
    </>
    )
}