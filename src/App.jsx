import { useState } from 'react';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignPage"; // Assuming the correct filename is SignUpPage
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactUs from './Pages/ContactUs';
import Product from './Pages/Product'; 
import PlantsPage from './Pages/PlantsPage';
import Recipes from './Pages/Recipes';

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* Define other routes here */}
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/plant" element={<PlantsPage />} />
          <Route path="/recipes" element={<Recipes />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
