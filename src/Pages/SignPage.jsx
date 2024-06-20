import React, { useState } from "react";
import LoginImg from "../assets/LoginImg.png";
import GOOGLE_ICON from "../assets/google.svg";
import Logo from "../Components/Logo";
import {Navigate, Link} from "react-router-dom"
 
const SignUpPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);


    const handleSingUp = async (e) =>{
      e.preventDefault();

      const requestData = {
        eventID: "1006",
        addInfo: {
          name: fullName,
          email: email,
          password: password,
          phone: phone
        }
      };

      try {
        const response = await fetch("http://localhost:2003/registration", { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(requestData),
        });

        const data = await response.json();
      console.log(data , 'api data')

      if (response.ok && data.rData.rCode === 0) {
        // If authentication succeeds, set isSignUp to true
        setIsSignUp(true);
      } else {
        // If authentication fails, display an error message
        alert(data.rData.rMessage || "Invalid email or password");
      }
      }

      catch (error) {
        console.error("Error:", error);
        alert("An error occurred while trying to log in.");
      }
    };

    if (isSignUp) {
      return <Navigate to="/" />;
    }  

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePhone = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the user input data
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Phone:", phone);
  };

  return (
    <>
      <div className="w-full h-screen flex items-start bg-[#042f1a]">
        <div className=" relative w-1/2 h-full flex flex-col justify-center items-center">
          
          <Logo />

          <img
            src={LoginImg}
            alt="login-image"
            className="w-[250px] absolute flex object-cover ml-40 mt-40 z-10"
          />

          <div className="absolute mix-w-[100px] top-[37%] left-[19%] flex flex-col justify-center items-center text-[100px]  space-y-24 font-rammetto">
            <h1 className=" font-bold text-white ">MEAT FREE</h1>
            <h1 className=" font-bold text-white pr-4 z-20">YOUR MIND</h1>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col p-20 justify-between items-center">
          <h1 className="w-full text-xl max-w-[500px] mx-auto text-[#ffffff] font-semibold mr-auto">
            curious dot
          </h1>

          <div className="w-full flex flex-col max-w-[500px] mt-10 text-white">
            <div className="w-full flex flex-col mb-2">
              <h3 className="text-4xl font-semibold mb-4">Sign Up</h3>
              <p className="text-base mb-2">
                Welcome Back! Please enter your details
              </p>
            </div>

            <form onSubmit={handleSingUp} className="w-full max-w-[600px] flex flex-col space-y-6">
              <input
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={handleFullNameChange}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <input
                type="phone"
                placeholder="phone"
                value={phone}
                onChange={handlePhone}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder: px-4"
              />

              <button
                type="submit"
                className="w-full bg-[#fc74b4] font-bold text-white border my-2 rounded-md border-black p-4 text-center flex items-center justify-center cursor-pointer"
              >
                Sign-up
              </button>
            </form>

            <div className="w-full flex items-center justify-center relative py-8">
              <div className="w-full h-[1px] bg-white"></div>
            </div>
            
          </div>
          <div className="w-full flex items-center justify-center text-white">
            <p>
            have an account?{" "}

            <Link to="/"
               className="font-semibold underline underline-offset-2 cursor-pointer">
                {" "}
                LOGIN{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
