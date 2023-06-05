
import Chef from "./componentes/chef/Chef.jsx";
import Waiter from "./componentes/waiter/Waiter.jsx";
import Administrador from "./componentes/administardor/Administrator.jsx";
import Login from "./componentes/Login.jsx";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import './App.css'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/waiter" element={<Waiter />} />
        <Route path="/chef" element={<Chef />} />
        <Route path="/administrador" element={<Administrador />} />
      </Routes>
    </Router>
  );
}

export default App;
