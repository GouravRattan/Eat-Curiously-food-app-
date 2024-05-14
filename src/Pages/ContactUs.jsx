import React, { useState } from "react";
import LoginImg from "../assets/LoginImg.png";
import GOOGLE_ICON from "../assets/google.svg";
import Logo from "../Components/Logo";
import NavBar from "../Components/NavBar";

const ContactUs = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the user input data
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Confirm Password:", confirmPassword);
  };

  return (
    <>
      <div  className="relative w-full h-screen flex items-start bg-[#042f1a]">
        <NavBar />
        <div className="absolute text-white text-[80px] top-20 left-20 -space-y-9 font-bold p-20">
          <h1>GENERAL</h1>
          <h1>ENQIRY</h1>
        </div>
        <div className=" w-1/2 h-full flex flex-col justify-center items-center">
          <div className="absolute top-[40%] space-y-16 pr-[500px] pl-40 text-white text-xl">
            <h1 className=" ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. animi
              consequuntur ipsa,
            </h1>
            <h2 className="underline underline-offset-4">eat@curious.com</h2>
            <div className="words space-y-8 text-xl">
              <h2>Horton Lodge Farm</h2>
              <h2>Brafield Road</h2>
              <h2>Horton</h2>
              <h2>NN7 2BA</h2>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full flex flex-col p-20 justify-between items-center">
          <div className="w-full flex flex-col max-w-[500px] mt-32 text-white ">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-[600px] flex flex-col space-y-6"
            >
              <input
                type="text"
                placeholder="FULL NAME"
                value={fullName}
                onChange={handleFullNameChange}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none"
              />

              <input
                type="email"
                placeholder="EMAIL"
                value={email}
                onChange={handleEmailChange}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none"
              />

              <input
                type="tel"
                placeholder="CONTACT NUMBER"
                value={password}
                onChange={handlePasswordChange}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none"
              />

              <input
                type="text"
                placeholder="INTERESTED IN"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none"
              />

              <input
                className="w-full text-black bg-white h-40 py-4 border-b rounded-md border-black outline-none focus:outline-none placeholder:text-slate-500"
                type="text"
                placeholder="MESSAGE"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
              />

              <button
                type="submit"
                className=" w-1/3 bg-[#fc74b4] font-bold text-[#042f1a] border rounded-md border-black p-4 text-center flex items-center justify-center cursor-pointer font-rammetto"
              >
                Sign-up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
