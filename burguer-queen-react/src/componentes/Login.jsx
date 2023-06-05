import logoBurger from '../assets/logoBurger.png'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { httpLogin  } from '../helpers/api';


function Login() {
  

  return (
    <>
      <main className='lg-main-conteiner'>
        <div className='lg-logo'>
          <img src={logoBurger} className='lg-logo-img' alt='Logo Burger Queen' />
        </div>
        <div className='lg-form-container'>
          <form action="" className='lg-form'>
            <h2>WELCOME</h2>
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='example@gmail.com' />
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' />
            <button>Login</button>
          </form>
        </div>
      </main>

    </>
  )
}

export default Login

