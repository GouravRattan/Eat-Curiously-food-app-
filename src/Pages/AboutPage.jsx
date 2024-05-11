import React from 'react';
import aboutImage from '../assets/about-img.svg';
import NavBar from '../Components/NavBar';

const AboutPage = () => {
  return ( 
    <>
      <div className="flex bg-[#fc74b4] h-screen">
        <NavBar AboutBgColor="#fc74b4" />
        <div className="flex flex-col justify-center items-center w-1/2">
          <h1 className="text-8xl font-bold font-archivo text-left mx-10 my-20">
            CURIOUS... BY NAME, BY NATURE
          </h1>
          <p className="text-sm text-left mx-10 mb-20">
            It’s what inspires us to whip up, throw together, tear, shake, and break the rules – on a mission to redefine food for a new generation.
          </p>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <img src={aboutImage} alt="About" className="h-80 mr-10" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
