import './Administrador.css'
import logoNav from "../../assets/logoNav.png"

export default function Administrador() {

    return (
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
         <main>
          <div>
            <h5>List Of Waiters </h5>
             {/* -------------------------------------- */}
             <table>
        <thead>
            <tr>
                <th>Employed</th>
                <th>Role</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>John Doe</td>
                <td>Chef</td>
                <td>
                  <div>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </td>
            </tr>
        </tbody>
    </table>
          </div>
          <aside className="admin-form-container">
            <form action="" className="admin-form">
              <h2><strong>Add New Waiter</strong></h2>
              <label htmlFor="">Email</label>
              <input type="email" placeholder="example@gmail.com"/>
              <label htmlFor="">Password</label>
              <input type="password" placeholder="Enter Password"/>
              <label htmlFor="">Role</label>
              <select name="" id="">
              <option value="" disabled="" selected="">Select role:</option>
                <option value="admin">Administrador</option>
                <option value="chef">Chef</option>
                <option value="waiter">Waiter</option>
              </select>
              <button>Add Waiter</button>
            </form>
          </aside>
         </main>
      </>
    )
  }
  