import { useState } from 'react';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignPage";
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
import Cart from './Pages/cart/Cart';
import Shop from './Pages/shop/shop';
import ApiCall from './Pages/ApiCall';
import {ShopContextProvider} from './Context/shopContext';
import DisPro from './Pages/Dishes_Data/DisPro';
import ForgotPassword from './Pages/ForgotPassword';
import OTPpage from './Pages/OTPpage';
import UserProfile from './Pages/User/UserProfile';
import DiaplayRecipe from './Pages/RecipesData/DiaplayRecipe';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
    <ShopContextProvider>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
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
          <Route path="/Shop" element={<Shop />} />
          <Route path='/Api' element={<ApiCall />} />
          <Route path='/DisPro' element={<DisPro />} />
          <Route path='/otp' element={<OTPpage />} />
          <Route path='/User/:activepage' element={<UserProfile />} />
          <Route path='/DiaplayRecipe' element={<DiaplayRecipe />} />
        </Routes>
    </BrowserRouter>
    </ShopContextProvider>
      </div>
  );
}

export default App;
