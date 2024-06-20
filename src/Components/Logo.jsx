import React from 'react';

const Logo = () => {
  return (
    <div className="logo absolute flex flex-col top-10 right-[13rem] md:right-[20rem] lg:right-[25rem] xl:right-[22rem] text-[10px] justify-center items-center font-gravitas">
      <h1 className="text-[40px] sm:text-[50px] md:text-[65px] lg:text-[80px] xl:text-[40px] font-bold text-white">
        EAT
      </h1>
      <h1 className="text-[40px] sm:text-[50px] md:text-[65px] lg:text-[80px] xl:text-[40px] font-bold text-white">
        CURIOUS
      </h1>
    </div>
  );
};

export default Logo;
