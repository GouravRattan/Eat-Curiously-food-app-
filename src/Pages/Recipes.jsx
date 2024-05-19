import React from 'react';
import R1 from '../assets/Recipes-imgs/rec-1.jpg'
import R2 from '../assets/Recipes-imgs/rec-2.jpg'
import R3 from '../assets/Recipes-imgs/rec-3.jpg'
import R4 from '../assets/Recipes-imgs/rec-4.jpg'
import NavBar from '../Components/NavBar';
import { Link } from 'react-router-dom';

const Recipes = () => {
  return (
    <>
    <section> 
      <NavBar />
        <div className="grid grid-cols-4 grid-rows-1 w-full h-screen bg-[#042f1a] p-32 gap-4 items-center">
        
        <Link to='/p1' className="relative w-full h-full bg-[#1abe71] z-10 overflow-hidden rounded-2xl flex items-center hover:scale-105 ease-in-out duration-300">
            <img src={R1} alt="" className="h-full w-full object-cover" />
          </Link>

          <Link to='/p2' className="w-full h-full bg-[#1abe71] overflow-hidden rounded-2xl hover:scale-105 ease-in-out duration-300">
            <img src={R2} alt="" className="h-full w-full object-cover" />
          </Link>

          <Link to='/p3' className="w-full h-full bg-[#1abe71] overflow-hidden rounded-2xl hover:scale-105 ease-in-out duration-300">
            <img src={R3} alt="" className="h-full w-full object-cover" />
          </Link>

          <Link to='/p4' className="w-full h-full bg-[#1abe71] overflow-hidden rounded-2xl hover:scale-105 ease-in-out duration-300">
            <img src={R4} alt="" className="h-full w-full object-cover" />
          </Link>
        </div>
    </section>
    </>
  )
}

export default Recipes;
