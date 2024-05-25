// HomePage.jsx

import React from "react";
import NavBar from "../Components/NavBar";
import LoginImg from "../assets/LoginImg.png";
import AboutPage from "./AboutPage";
import AboutPage2 from "./AboutPage2";
import AboutPage3 from "./AboutPage3";
import AboutPage4 from "./AboutPage4";
import Product from "../Pages/Product";
import PlantsPage from "./PlantsPage";
import Recipes from "./Recipes";
import Marquee from "../Components/Marquee"; // Import the Marquee component

const HomePage = () => {
  return (
    <>
      <div className="relative w-full bg-[#042f1a] h-auto justify-center items-center">
        <NavBar />
        <div className="flex justify-center items-center h-screen relative">
          <img
            src={LoginImg}
            alt="login-image"
            className="w-[500px] absolute flex object-cover z-10"
          />
          <div className="absolute mix-w-[100px] flex flex-col justify-center items-center text-[250px] top-16 space-y-16 font-[900]">
            <h1 className=" meat font-bold text-white animate-spinnerGrow">
              MEAT-FREE
            </h1>
            <h1 className="free font-bold text-white z-20 animate-spinnerGrow">
              YOUR MIND
            </h1>
          </div>
        </div>
      </div>
      <AboutPage />
      <AboutPage2 />
      <AboutPage3 />
      <AboutPage4 />
      <Product />
      <PlantsPage />
      <Recipes />
      <Marquee />
    </>
  );
};

export default HomePage;
