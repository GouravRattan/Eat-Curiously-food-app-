import { useState } from 'react';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignPage"; // Assuming the correct filename is SignUpPage
import NavBar from './Components/NavBar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import AboutPage2 from './Pages/AboutPage2';
import AboutPage3 from './Pages/AboutPage3';
import AboutPage4 from './Pages/AboutPage4';
import ContactUs from './Pages/ContactUs';
import Product from './Pages/Product'; 
import PlantsPage from './Pages/PlantsPage';
import Recipes from './Pages/Recipes';
import P1 from './Pages/Products/P1';
import P2 from './Pages/Products/P2';
import P3 from './Pages/Products/P3';
import P4 from './Pages/Products/P4';
import Cart from './Pages/Cart';

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
          <Route path="/about2" element={<AboutPage2 />} />
          <Route path="/about3" element={<AboutPage3 />} />
          <Route path="/about4" element={<AboutPage4 />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product" element={<Product />} />
          <Route path="/plant" element={<PlantsPage />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/p1" element={<P1 />} />
          <Route path="/p2" element={<P2 />} />
          <Route path="/p3" element={<P3 />} />
          <Route path="/p4" element={<P4 />} />
          <Route path="/Cart" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
