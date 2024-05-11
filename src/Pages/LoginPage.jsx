import React from "react";
import LoginImg from "../assets/LoginImg.png";
import GOOGLE_ICON from "../assets/google.svg";
import Logo from "../Components/Logo";

const LoginPage = () => {

  return (
    <>
      <div  className="w-full h-screen flex items-start bg-[#042f1a]">
        <div className=" relative w-1/2 h-full flex flex-col justify-center items-center">
          <div className="bg-white border-md text-black font-bold text-2xl">
            this is the code
          </div>
          <Logo />

          <img
            src={LoginImg}
            alt="login-image"
            className="w-[250px] absolute flex object-cover ml-40 mt-40 z-10"
          />

          <div className="absolute mix-w-[100px] top-[37%] left-[19%] flex flex-col justify-center items-center text-[100px]  space-y-24 font-rammetto">
            <h1 className=" font-bold text-white">MEAT FREE</h1>
            <h1 className=" font-bold text-white pr-4 z-20">YOUR MIND</h1>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col p-20 justify-between items-center">
          <h1 className="w-full text-xl max-w-[500px] mx-auto text-[#ffffff] font-semibold mr-auto">
            Source Dot..
          </h1>

          <div className="w-full flex flex-col max-w-[500px] mt-10 text-white">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-3xl font-semibold mb-4">Login</h3>
              <p className="text-base mb-2">
                Welcome Back! Please enter your details
              </p>
            </div>

            <div className="w-full max-w-[600px] flex flex-col space-y-6">
              <input
                type="email"
                placeholder="Email"
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none"
              />

              <input
                type="password"
                placeholder="Password"
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none"
              />
            </div>

            <div className="w-full flex items-center justify-center mt-4">
              <div className="w-full flex items-center">
                <input type="checkbox" className="w-4 h-4 mr-2" />
                <p className="text-sm">Remember me</p>
              </div>

              <p className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                Forgot Password
              </p>
            </div>

            <div className="w-full flex flex-col my-4">
              <button className="w-full bg-[#fc74b4] font-bold text-white my-2 rounded-md p-4 text-center flex items-center justify-center cursor-pointer">
                Log-in
              </button>

              <button className="w-full text-[#fc74b4] font-bold bg-white border my-2 rounded-md border-black p-4 text-center flex items-center justify-center cursor-pointer">
                Sign-up
              </button>
            </div>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-white"></div>
              <p className="text-lg absolute text-white">or</p>
            </div>

            <div className="w-full text-[#fc74b4] font-bold bg-white border my-2 rounded-md border-black p-4 text-center flex items-center justify-center">
              <img src={GOOGLE_ICON} className="h-6 mr-2" alt="" />
              Sign In with google
            </div>
          </div>

          <div className="w-full flex items-center justify-center text-white">
            <p>
              Don't have an account?{" "}
              <span className="font-semibold underline underline-offset-2 cursor-pointer">
                {" "}
                Sign up for free{" "}
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
