import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link
import MainLogo from "../assets/transparent-logo.png"

const NavBar = ({ AboutBgColor, HomeBgColor, AboutBtn, About2 }) => {
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
      className={` z-40 py-4 w-full fixed transition-all duration-300 ${ 
        showNavBar ? "top-0" : "-top-full"
      } `} style={{ HomeBgColor, AboutBtn, About2}}
    >
      {
        <div className={`px-4 w-full flex justify-around items-center ${About2}`}>
          {/* Use Link component for the "About" link */}
          <Link
            to="/about"
            className="text-white font-semibold font-georgia text-lg mr-8 ml-40"
          >
            ABOUT
          </Link>
          <Link
            to="/product"
            className="text-white font-semibold font-georgia text-lg mr-8"
          >
            PRODUCT
          </Link>
          <img src={MainLogo} className="text-white font-semibold text-lg mr-8 w-[100px]" />
          <a
            href="#"
            className="text-white font-semibold font-georgia text-lg mr-8"
          >
            RECIPES
          </a>
          <Link 
          to="/contact"
           className={`text-[#042f1a] bg-[#fc74b4] font-bold px-8 py-4 rounded-full font-rammetto ${AboutBtn}`}
          >
            CONTACT US
          </Link>
        </div>
      }
    </nav>
  );
};

export default NavBar;
