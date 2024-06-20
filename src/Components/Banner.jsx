import React from 'react';
import backgroundImage from '../assets/AboutImg2.png'; // Replace with your image path

const Banner = ({HeroText}) => {
  return (
    <div className="flex justify-center items-center">
      <div 
        className="relative w-full md:w-full"
        style={{ 
          backgroundImage: `url(${backgroundImage})`,
          height: 400,
          aspectRatio: '16/9', // Adjust this ratio to match your image's aspect ratio
          maxWidth: '1900px', // Adjust max width as per your design
          margin: '100px auto', // Center horizontally
        }}
      >
        <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <h1 className="text-white text-3xl md:text-5xl font-bold">{HeroText}</h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
