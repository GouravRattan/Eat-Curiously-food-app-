import React from 'react';
import aboutImage2 from '../assets/AboutImg2.png';
import NavBar from '../Components/NavBar';
import plantImg from '../assets/plant-img.png';

const PlantsPage = () => {

  return ( 
    <>
      <div className="flex bg-[#042f1a] h-screen">
        <NavBar About2="text-[#042f1a]" />

        <div className="relative w-1/2 flex items-center justify-center ">
          <img src={plantImg} alt="About" className=" w-[90%]  rounded-2xl" />
        </div>


        <div className="flex flex-col justify-center items-center w-1/2 text-white ">
          <h1 className=" text-7xl font-bold text-left mx-10 font-rammetto leading-snug">
          WE'RE GROWING MORE THAN PLANTS...
          </h1>
          <p className="text-xl text-left mx-10 my-16 mr-20 font-light leading-relaxed ">We’re here to grow a positive, curious and thoughtful attitude to plant-based food. Which is why we put curiosity at the heart of everything we do. So much so, we’ve built our own vertical farm – a near-off-grid, plant playground where we’re researching how to add even more flavour, nutrition and sustainability to the way we all eat.
          </p>
          <div className='w-full'>
          <button
                type="submit"
                className=" w-1/3 bg-[#fc74b4] text-[#042f1a] text-2xl font-bold font-rammetto rounded-md p-4 mx-12 flex items-start justify-center cursor-pointer"
              >
                VISIT OUR FARMS
              </button>
          </div>
         
        </div>
      </div>
    </>
  );
};

export default PlantsPage;
