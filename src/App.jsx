import { useState } from 'react'
import './App.css';
import LoginPage from "./Pages/LoginPage"
import SignUpPage from "./Pages/SignPage"
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <BrowserRouter> 
      <Routes>
      <Route path='/' element={<HomePage />} />
        <Route path='/Login' element={<LoginPage />} />
        <Route path='/Signup' element={<SignUpPage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
