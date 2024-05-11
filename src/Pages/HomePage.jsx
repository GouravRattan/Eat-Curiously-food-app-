import React from 'react';
import NavBar from '../Components/NavBar';
import LoginImg from '../assets/LoginImg.png';
import Logo from '../Components/Logo';
import Logo1 from '../assets/logo-1.png'
import Logo2 from '../assets/logo-2.png'

const HomePage = () => {
  return (
    <>
      <div className='relative w-full bg-[#042f1a] h-auto justify-center items-center'>
        <NavBar />
        <div className="flex justify-center items-center h-screen relative">
          <img
            src={LoginImg}
            alt="login-image"
            className="w-[500px] absolute flex object-cover z-10"
          />
          <div className="absolute mix-w-[100px] flex flex-col justify-center items-center text-[250px] top-24 space-y-20 font-[900]">
            <h1 className=" font-bold text-white ">MEAT-FREE</h1>
            <h1 className=" font-bold text-white z-20">YOUR MIND</h1>
          </div>
          <div className="absolute bottom-0 left-0 w-full bg-[#042f1a] h-200 flex items-center justify-center">
            <div className="flex justify-center items-center">
              <img src={Logo1} alt="logo1" className="h-16 mr-4" />
              <img src={Logo2} alt="logo2" className="h-16" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
