import React from 'react';
import R1 from '../assets/Recipes-imgs/rec-1.jpg'
import R2 from '../assets/Recipes-imgs/rec-2.jpg'
import R3 from '../assets/Recipes-imgs/rec-3.jpg'
import R4 from '../assets/Recipes-imgs/rec-4.jpg'



const Recipes = () => {
  return (
    <>
    <section> 

    <div className="grid grid-cols-4 grid-rows-1  h-screen bg-[#042f1a] p-32 gap-4 items-center ">

    <div className="relative w-full h-full bg-[#1abe71] overflow-hidden hover-animate rounded-2xl z-10">
  <span className='absolute z-20 bg-black text-white flex items-end justify-center'>spin</span>
  <img src={R1} alt="" className="h-full w-full object-cover" />
</div>


<div className="w-full h-full bg-[#1abe71] overflow-hidden hover-animate rounded-2xl">
  <img src={R2} alt="" className="h-full w-full object-cover" />
</div>

<div className="w-full h-full bg-[#1abe71] overflow-hidden hover-animate rounded-2xl">
  <img src={R3} alt="" className="h-full w-full object-cover" />
</div>

<div className="w-full h-full bg-[#1abe71] overflow-hidden hover-animate rounded-2xl">
  <img src={R4} alt="" className="h-full w-full object-cover" />
</div>

    </div>
    </section>
    </>
  )
}

export default Recipes;