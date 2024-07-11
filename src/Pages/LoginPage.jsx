import React, { useState } from "react";
import { Navigate, Link } from "react-router-dom";
import LoginImg from "../assets/LoginImg.png";
import GOOGLE_ICON from "../assets/google.svg";
import Logo from "../Components/Logo";
import HomePage from "./HomePage"; // Import HomePage component

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status

  const handleLogin = async (e) => {
    e.preventDefault();

    const requestData = {
      eventID: "1001", // Event ID for login as per your backend code
      addInfo: {
        UserId: email,
        Password: password,
      }
    };

    try {
      const response = await fetch("http://localhost:2005/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();
      console.log(data, 'api data')

      if (response.ok && data.rData.rCode === 0) {
        // If authentication succeeds, set isLoggedIn to true
        setIsLoggedIn(true);
      } else {
        // If authentication fails, display an error message
        alert(data.rData.rMessage || "Invalid email or password");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while trying to log in.");
    }
  };

  // Render HomePage if isLoggedIn is true
  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col md:flex-row items-start bg-[#042f1a]">
        <div className="relative w-full md:w-1/2 h-full flex flex-col justify-center items-center">
          <Logo />

          <div className="absolute flex flex-col items-center justify-center top-[20%] font-rammetto md:top-[37%] sm:space-y-8 md:space-y-12 lg:space-y-18 xl:bottom-80">
            <h1 className=" text-[30px]  sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[100px] font-bold text-white">MEAT FREE</h1>
            <img
              src={LoginImg}
              alt="login-image"
              className="w-[150px] md:w-[250px] object-cover z-10"
            />
            <h1 className="text-[30px] sm:text-[40px] md:text-[50px] lg:text-[70px] xl:text-[100px] font-bold text-white z-20">YOUR MIND</h1>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full flex flex-col p-10 md:p-20 justify-between items-center">
          <h1 className="w-full text-lg md:text-xl max-w-[500px] mx-auto text-[#ffffff] font-semibold mr-auto">
            Source Dot..
          </h1>

          <div className="w-full flex flex-col max-w-[500px] mt-6 md:mt-10 text-white">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-2xl md:text-3xl font-semibold mb-4">Login</h3>
              <p className="text-sm md:text-base mb-2">
                Welcome Back! Please enter your details
              </p>
            </div>

            {/* Form submission will trigger handleLogin function */}
            <form onSubmit={handleLogin} className="w-full max-w-[600px] flex flex-col space-y-4 md:space-y-6">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black bg-white py-3 md:py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black bg-white py-3 md:py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <div className="w-full flex items-center justify-center mt-4">
                <div className="w-full flex items-center">
                  <input type="checkbox" className="w-4 h-4 mr-2" />
                  <p className="text-sm">Remember me</p>
                </div>

                <Link to={"/forgotPassword"} className="text-sm font-medium whitespace-nowrap cursor-pointer underline underline-offset-2">
                  Forgot Password
                </Link>
              </div>

              <button
                type="submit"
                className="w-full bg-[#fc74b4] font-bold text-white my-2 rounded-md p-3 md:p-4 text-center flex items-center justify-center cursor-pointer"
              >
                Log-in
              </button>
            </form>

            <div className="w-full flex items-center justify-center relative py-2">
              <div className="w-full h-[1px] bg-white"></div>
              <p className="text-lg absolute text-white">or</p>
            </div>

            <div className="w-full text-[#fc74b4] font-bold bg-white border my-2 rounded-md border-black p-3 md:p-4 text-center flex items-center justify-center">
              <img src={GOOGLE_ICON} className="h-6 mr-2" alt="google-icon" />
              Sign In with Google
            </div>
          </div>

          <div className="w-full flex items-center justify-center text-white">
            <p>
              Don't have an account?{" "}
              <Link to="/signup" className="font-semibold underline underline-offset-2 cursor-pointer">
                {" "}Sign up for free{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
