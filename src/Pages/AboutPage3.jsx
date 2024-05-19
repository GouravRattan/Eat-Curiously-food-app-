import React, { useEffect, useState } from 'react';
import aboutImage3 from '../assets/AboutImg3.png';
import NavBar from '../Components/NavBar';

const AboutPage3 = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Use a timeout to trigger the first animation after a short delay
    const timer1 = setTimeout(() => {
      setLoaded(true);
    }, 100);

    // Use another timeout to trigger the second animation after the first one completes
    const timer2 = setTimeout(() => {
      setLoaded(false);
    }, 600);

    // Clean up the timers
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return ( 
    <div className={`flex bg-[#d4ed6d] h-screen ${loaded ? 'zoom-in' : 'zoom-out'}`}>
      <NavBar  AboutBtn="text-[#042f1a] bg-[#fc74b4] font-bold px-8 py-4 rounded-full font-rammetto" />
      <div className="flex flex-col justify-center items-center px-20 w-1/2">
        <h1 className="text-7xl font-bold font-rammetto text-left mx-10 my-20">
          POWERED BY POSITIVITY
        </h1>
        <p className="text-2xl text-left mx-10 my-20 pr-[400px]">
          We’re not crusading or going up against an industry. We’re for; for flavour, for fun, for what’s possible.
        </p>
      </div>
      <div className="w-1/2 flex justify-end items-center">
        <img src={aboutImage3} alt="About" className="mr-10" />
      </div>
    </div>
  );
};

export default AboutPage3;
