import React from 'react';
import aboutImage2 from '../assets/AboutImg2.png';
import NavBar from '../Components/NavBar';
import Marquee from '../Components/Marquee';

const AboutPage2 = () => {
  return ( 
    <>
      <div id='' className=" flex bg-[#fc74b4] h-screen ">
        <NavBar /> 

        <div className="relative w-1/2 flex items-center justify-center ">
          <img src={aboutImage2} alt="About" className="h-[650px] " />
        </div>

        <div className="flex flex-col justify-center items-center w-1/2 ">
          <h1 className="text-7xl font-bold text-left mx-10 my-20 font-rammetto leading-snug">
            INSPIRING GOOD THROUGH TASTY GOODNESS 
          </h1>
          <p className="text-2xl text-left mx-10 my-12 pr-96 ">
            We’re here to inspire discovery and tempt everyone to eat more plants. Because we care about the future – yours, ours and the planet’s.
          </p>
        </div>
      </div>
        <Marquee />
    </>
  );
};

export default AboutPage2;
