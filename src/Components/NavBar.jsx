// import React, { useState, useEffect } from 'react';

// const NavBar = () => {
//   const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
//   const [isHidden, setIsHidden] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollPos = window.pageYOffset;
//       const isScrollingDown = currentScrollPos > prevScrollPos;

//       // Show the navbar if scrolling down or at the top of the page
//       setIsHidden(isScrollingDown && currentScrollPos > 0);

//       setPrevScrollPos(currentScrollPos);
//     };

//     window.addEventListener('scroll', handleScroll);

//     return () => {
//       window.removeEventListener('scroll', handleScroll);
//     };
//   }, [prevScrollPos]);

//   return (
//     <nav
//       className={`bg-[#042f1a] py-4 w-full transition-all duration-500 transform ${isHidden ? '-translate-y-full' : 'translate-y-0'}`}
//     >
//       <div className="px-4 w-full flex justify-around items-center">
//         <a href="#" className="text-white font-semibold font-georgia text-lg mr-8 ml-40">ABOUT</a>
//         <a href="#" className="text-white font-semibold font-georgia text-lg mr-8">PRODUCT</a>
//         <a href="#" className="text-white font-semibold  text-lg mr-8">LOGO</a>
//         <a href="#" className="text-white font-semibold font-georgia text-lg mr-8">RECIPES</a>
//         <button className="bg-black text-pink-500 font-bold px-8 py-4 rounded-full font-rammetto">CONTACT US</button>
//       </div>
//     </nav>
//   );
// };

// export default NavBar;

import React, { useState, useEffect } from "react";

const NavBar = () => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible =
        prevScrollPos > currentScrollPos || currentScrollPos === 0;
      setShowNavBar(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav
      className={`bg-[#042f1a] py-4 w-full fixed transition-all duration-300 ${
        showNavBar ? "top-0" : "-top-full"
      }`}
    >
      {
        <div className="px-4 w-full flex justify-around items-center">
          <a
            href="#"
            className="text-white font-semibold font-georgia text-lg mr-8 ml-40"
          >
            ABOUT
          </a>
          <a
            href="#"
            className="text-white font-semibold font-georgia text-lg mr-8"
          >
            PRODUCT
          </a>
          <a href="#" className="text-white font-semibold  text-lg mr-8">
            LOGO
          </a>
          <a
            href="#"
            className="text-white font-semibold font-georgia text-lg mr-8"
          >
            RECIPES
          </a>
          <button className="bg-black text-pink-500 font-bold px-8 py-4 rounded-full font-rammetto">
            CONTACT US
          </button>
        </div>
      }
    </nav>
  );
};

export default NavBar;
