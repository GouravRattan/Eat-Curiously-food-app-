import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MainLogo from "../assets/transparent-logo.png";
import LogoComponent from "./MainLogo";

const NavBar = ({ HomeBgColor, textColor = "text-white", fontClass = "font-roboto", AboutBtn }) => {
  const [showNavBar, setShowNavBar] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const visible = prevScrollPos > currentScrollPos || currentScrollPos === 0;
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
      className={`z-40 py-4 w-full fixed transition-all duration-300 pr-40 ${showNavBar ? "top-0" : "-top-full"}`} 
      style={{ backgroundColor: HomeBgColor }}
    >

      <div className={`px-4 w-full flex justify-around items-center ${fontClass} text-xl`}>
        <Link
          to="/about"
          className={`text-2xl font-semibold mr-8 ml-40 ${location.pathname === "/about2" ? "text-red-500" : textColor}`}
        >
          ABOUT
        </Link>
        <Link
          to="/DisPro"
          className={`text-2xl font-semibold mr-8 ${textColor}`}
        >
          PRODUCT
        </Link>
        {/* <img src={MainLogo} className="text-2xl font-semibold mr-8 w-[120px]" /> */}
        <LogoComponent logo={MainLogo} altText="Main Logo" className="text-2xl font-semibold mr-8 w-[120px]" />

        <Link to="/recipes"
          className={`text-2xl font-semibold mr-8 ${textColor}`}
        >
          RECIPES
        </Link>

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
