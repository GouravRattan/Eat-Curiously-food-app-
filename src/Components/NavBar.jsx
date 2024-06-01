import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"; // Import Link and useLocation
import MainLogo from "../assets/transparent-logo.png";

const NavBar = ({ AboutBgColor, HomeBgColor, AboutBtn }) => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const location = useLocation(); // Get the current location

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
      className={`z-40 py-4 w-full fixed transition-all duration-300 pr-40 ${ 
        showNavBar ? "top-0" : "-top-full"
      } `} style={{ backgroundColor: HomeBgColor }}
    >
      <div className="px-4 w-full flex justify-around items-center font-roboto text-xl">
        <Link
          to="/about"
          className={`text-2xl font-semibold mr-8 ml-40 ${
            location.pathname === "/about2" ? "text-red-500" : "text-white"
          }`}
        >
          ABOUT
        </Link>
        <Link
          to="/DisPro"
          className="text-2xl font-semibold mr-8 text-white"
        >
          PRODUCT
        </Link>
        <img src={MainLogo} className="text-2xl font-semibold mr-8 w-[120px]" />
        <a
          href="#"
          className="text-2xl font-semibold mr-8 text-white"
        >
          RECIPES
        </a>
        <Link 
          to="/contact"
          className={`font-bold px-8 py-4 rounded-full font-rammetto ${AboutBtn}`}
        >
          CONTACT US
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

