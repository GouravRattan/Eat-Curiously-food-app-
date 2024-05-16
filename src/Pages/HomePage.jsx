import React from 'react';
import NavBar from '../Components/NavBar';
import LoginImg from '../assets/LoginImg.png';
import AboutPage from './AboutPage';
import AboutPage2 from './AboutPage2';
import Product from '../Pages/Product'
import PlantsPage from './PlantsPage';
import Recipes from './Recipes'

const HomePage = () => {
  return (
    <>

      <div className='relative w-full bg-[#042f1a] h-auto justify-center items-center'>
        <NavBar AboutBgColor="#042f1a" />
        <div className="flex justify-center items-center h-screen relative">
          <img
            src={LoginImg}
            alt="login-image"
            className="w-[500px] absolute flex object-cover z-10"
          />
          <div className="absolute mix-w-[100px] flex flex-col justify-center items-center text-[250px] top-16 space-y-16 font-[900]">
            <h1 className=" font-bold text-white ">MEAT-FREE</h1>
            <h1 className=" font-bold text-white z-20">YOUR MIND</h1>
          </div>
        </div>
      </div>
      <AboutPage/>
      <AboutPage2 />
      <Product />
      <PlantsPage />
      <Recipes />
    </>
  );
};

export default HomePage;
