import logoBurger from './assets/logoBurger.png'
import './App.css'

function App() {

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
          </form>
        </div>
      </main>

    </>
  )
}

export default App


{/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}