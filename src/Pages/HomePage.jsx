import React from 'react';
import NavBar from '../Components/NavBar';
import LoginImg from '../assets/LoginImg.png';
import Logo1 from '../assets/logo-1.png'
import Logo2 from '../assets/logo-2.png'
import Logo3 from '../assets/logo-3.jpg'
import Logo4 from '../assets/logo-4.png'
import Logo5 from '../assets/logo-5.png'
import Logo6 from '../assets/logo-6.png'
import Logo7 from '../assets/logo-7.png'
import Logo8 from '../assets/logo-8.png'
import Logo9 from '../assets/logo-9.png'
import Logo10 from '../assets/logo-10.png'

const HomePage = () => {
  return (
    <>
      <style>
        {`
          @keyframes floatingLogos {
            from { transform: translateX(100%); }
            to { transform: translateX(-100%); }
          }
  
          .animate-floatingLogos {
            animation: floatingLogos 10s linear infinite;
          }
          
          .animate-floatingLogos img {
            margin-right: 10px; /* Add spacing between logos */
            width: 80px; /* Increase the size of logos */
            height: 80px;
          }
        `}
      </style>

      <div className='relative w-full bg-[#042f1a] h-auto justify-center items-center'>
        <NavBar AboutBgColor="#042f1a" />
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
          <div className="absolute bottom-0 left-0 w-full bg-[#a7b3ad] h-200 flex items-center justify-start animate-floatingLogos">
            <div className="flex">
              <img src={Logo1} alt="logo1" className="h-16 mr-4" />
              <img src={Logo2} alt="logo2" className="h-16 mr-4" />
              <img src={Logo3} alt="logo3" className="h-16 mr-4" />
              <img src={Logo4} alt="logo4" className="h-16 mr-4" />
              <img src={Logo5} alt="logo5" className="h-16 mr-4" />
              <img src={Logo6} alt="logo6" className="h-16 mr-4" />
              <img src={Logo7} alt="logo7" className="h-16 mr-4" />
              <img src={Logo8} alt="logo8" className="h-16 mr-4" />
              <img src={Logo9} alt="logo9" className="h-16 mr-4" />
              <img src={Logo10} alt="logo10" className="h-16 mr-4" />
              {/* Repeat for more logos */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
