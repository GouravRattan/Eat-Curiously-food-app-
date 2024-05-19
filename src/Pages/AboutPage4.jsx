import React from 'react';
import aboutImage4 from '../assets/AboutImg4.png';
import NavBar from '../Components/NavBar';

const AboutPage4 = () => {

  return ( 
    <>
      <div className="flex bg-[#042f1a] h-screen">
        <NavBar />

        <div className="relative w-1/2 flex items-center justify-center ">
          <img src={aboutImage4} alt="About" className="h-[650px] " />
        </div>


        <div className="flex flex-col justify-center items-center w-1/2 text-[#fff6f6] ">
          <h1 className=" text-7xl font-bold text-left mx-10 my-20 font-rammetto leading-snug">
          FLAVOURSOME FOOD FOR EVERYONE
          </h1>
          <p className="text-2xl text-left mx-10 my-12 pr-96 ">Our curious creations are made for vegans and meat-eaters alike. Because meat-free doesn’t mean flavour free.</p>
        </div>
      </div>
    </>
  );
};

export default AboutPage4;
