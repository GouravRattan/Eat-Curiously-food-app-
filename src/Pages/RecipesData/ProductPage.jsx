// ProductPage.js
import React, { useState } from 'react';
import NavBar from "../../Components/NavBar";
import Footer from "../../Components/Footer";
import { useNavigate } from "react-router-dom";

const ProductPage = ({ product }) => {
  const navigate = useNavigate();
  const [CartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(1);

  const addToCart = () => {
    setCount(count + 1);
    setCartItems([...CartItems, count]);
  };

  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (index) => {
    setOpenSection(openSection === index ? null : index);
  };

  return (
    <>
      <div className="flex bg-[#042f1a] h-screen ">
        <NavBar AboutBtn="text-[#042f1a] bg-[#fc74b4] font-bold px-8 py-4 rounded-full font-rammetto" />
        <div className="flex flex-col justify-center items-center w-1/2 text-white ml-20">
          <h1 className="w-full text-8xl font-bold text-left mx-10 mt-10 font-rammetto">
            {product.name}
          </h1>
          <p className="text-xl text-left my-20 pr-[400px] ">
            {product.description}
          </p>
          <div className="flex flex-col w-full gap-y-4 justify-end">
            <button
              onClick={addToCart}
              className="w-1/4 bg-[#1abe71] text-[#042f1a] text-2xl font-bold font-rammetto rounded-md p-3 cursor-pointer"
            >
              ADD TO CART
            </button>

            <button
              onClick={() => {
                navigate("/Cart", {
                  state: {
                    CartItems,
                    name: product.name,
                  },
                });
              }} 
              className=" w-1/4 bg-white text-[#042f1a] text-2xl font-bold font-rammetto rounded-md p-3 cursor-pointer"
            >
              GO TO CART
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <img
            src={product.image}
            alt="About"
            className="mr-40 mt-10 w-[700px] object-contain rounded-xl"
          />
        </div>
      </div>

      <div className="bg-[#122e18] text-white min-h-screen p-4">
        {product.sections.map((section, index) => (
          <div key={index} className="border-b border-gray-700 mb-4">
            <div
              className="flex justify-between items-center py-4 cursor-pointer"
              onClick={() => toggleSection(index)}
            >
              <div className="flex items-center h-40">
                <div className="bg-white rounded-full p-2 mr-2">
                  {section.icon}
                </div>
                <h2 className="text-4xl font-bold font-rammetto">{section.title}</h2>
              </div>
              <div>
                {openSection === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6v12m6-6H6"
                    />
                  </svg>
                )}
              </div>
            </div>
            {openSection === index && (
              <div className="p-4 text-xl text-gray-300 ">
                {section.content}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductPage;
