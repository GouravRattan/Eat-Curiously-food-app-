import React from 'react';
import img from '../assets/LoginImg.png';
import NavBar from '../Components/NavBar';
import P1 from '../assets/Product-imgs/image (1).png'
import P2 from '../assets/Product-imgs/image (2).png'
import P3 from '../assets/Product-imgs/image (3).png'
import P4 from '../assets/Product-imgs/image (4).png'
import P5 from '../assets/Product-imgs/image (5).png'
import P6 from '../assets/Product-imgs/image (6).png'

const Product = () => {
  return ( 
    <>   
    <div className="grid grid-cols-3 grid-rows-2 w-full h-screen bg-[#042f1a] p-10 gap-4">
      <div className=" relative bg-[#1abe71] flex-col items-center justify-center overflow-hidden hover-animate rounded-3xl">
        <div className="text-[#042f1a] text-7xl font-bold animate-left text-center">
          <h1>CURIOUS</h1>
          <h1>PIECES</h1>
        </div>
        <img src={P1} alt="" className="left-full animate-right" />
      </div>

      <div className=" relative bg-[#1abe71] flex-col items-center justify-center overflow-hidden hover-animate rounded-3xl">
        <div className="text-[#042f1a] text-7xl font-bold animate-left text-center">
          <h1>CURIOUS</h1>
          <h1>PIECES</h1>
        </div>
        <img src={P2} alt="" className="left-full animate-right" />
      </div>

      <div className=" relative bg-[#1abe71] flex-col items-center justify-center overflow-hidden hover-animate rounded-3xl">
        <div className="text-[#042f1a] text-7xl font-bold animate-left text-center">
          <h1>CURIOUS</h1>
          <h1>PIECES</h1>
        </div>
        <img src={P3} alt="" className="left-full animate-right" />
      </div>

      <div className=" relative bg-[#1abe71] flex-col items-center justify-center overflow-hidden hover-animate rounded-3xl">
        <div className="text-[#042f1a] text-7xl font-bold animate-left text-center">
          <h1>CURIOUS</h1>
          <h1>PIECES</h1>
        </div>
        <img src={P4} alt="" className="left-full animate-right" />
      </div>

      <div className=" relative bg-[#1abe71] flex-col items-center justify-center overflow-hidden hover-animate rounded-3xl">
        <div className="text-[#042f1a] text-7xl font-bold animate-left text-center">
          <h1>CURIOUS</h1>
          <h1>PIECES</h1>
        </div>
        <img src={P5} alt="" className="left-full animate-right" />
      </div>

      <div className=" relative bg-[#1abe71] flex-col items-center justify-center overflow-hidden hover-animate rounded-3xl">
        <div className="text-[#042f1a] text-7xl font-bold animate-left text-center">
          <h1>CURIOUS</h1>
          <h1>PIECES</h1>
        </div>
        <img src={P6} alt="" className="left-full animate-right" />
      </div>

    </div>
    </>
  );
};

export default Product;
