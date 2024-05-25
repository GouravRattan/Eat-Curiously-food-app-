import React from 'react';

const Marquee = () => {
  return (
    <div className="marquee-container overflow-hidden h-20 bg-[#fc74b4] flex flex-col justify-center">
      <div className="whitespace-nowrap animate-marquee text-[20px] font-rammetto font-bold flex justify-between gap-6 ">
       <p>PACKED WITH FLAVOUR </p>
        <p>₹</p>
       <p>100% PLANT BASED</p>
       <p>₹</p>
       <p>DAIRY FREE</p>
       <p>₹</p>
       <p>PACKED WITH FLAVOUR</p>
       <p>₹</p>
       <p>100% PLANT BASED</p>
       <p>₹</p>
       <p>DAIRY FREE</p>
       <p>PACKED WITH FLAVOUR</p>
       <p>₹</p>
       <p>100% PLANT BASED</p>
       <p>₹</p>
       <p>DAIRY FREE</p>
      </div>
    </div>
  );
};

export default Marquee;

