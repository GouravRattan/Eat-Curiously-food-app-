import React, { useState } from "react";
import pieces from "../../assets/sub-product-img/image1.png";
import NavBar from "../../Components/NavBar";
import { useNavigate } from "react-router-dom";
import Footer from "../../Components/Footer";

const P1 = () => {
  const navigate = useNavigate();
  const [CartItems, setCartItems] = useState([]);
  const [count, setCount] = useState(1);
  const [name, setName] = useState("CURIOUS PIECES");

  const addToCart = () => {
    setCount(count + 1);
    setCartItems([...CartItems, count]);
  };

  const sections = [
    {
      title: "INGREDIENTS",
      content: `Water, Textured Vegetable Protein (28%) (Pea Protein Concentrate, Faba Protein Concentrate, Salt), Hot and Spicy Glaze (15%) (Sugar, Maltodextrin, Maize Starch, Salt, Tomato Powder, Ground Paprika, Chilli Powder, Garlic Powder, Dried Minced Red Pepper, Ground Coriander, Onion Powder, Yeast Extract, Ground Cumin, Dried Rubbed Parsley, Acidity Regulator (Citric Acid), Paprika Extract, Thickener (Guar Gum), Chilli Flakes, Anti Caking Agent (Silicon Dioxide), Capsicum Extract), Sunflower Oil.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
</svg>


      ),
    },
    {
      title: "ALLERGEN INFORMATION",
      content: `Contains: Pea Protein, Faba Protein.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0 0 12.016 15a4.486 4.486 0 0 0-3.198 1.318M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
</svg>

      ),
    },
    {
      title: "STORAGE",
      content: `Store in a cool, dry place. Once opened, keep refrigerated and use within 3 days.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
</svg>

      ),
    },
    {
      title: "COOKING INSTRUCTIONS",
      content: `Heat a non-stick pan over medium heat. Add the product and cook for 5-7 minutes, stirring occasionally, until golden brown and heated through.`,
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
</svg>

      ),
    },
  ];

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
            Curious
          </h1>
          <p className="text-xl text-left my-20 pr-[400px] ">
            Tender delicious juicy protein pieces coated in a hot and spicy
            glaze. Perfect for those with dietary restrictions, our pieces
            contain none of the 14 main allergens such as dairy, gluten, soy,
            and nuts. Our versatile Eat Curious pieces are perfect for a variety
            of culinary applications including pizza toppings, pies, salad
            bowls, stir-fry, pasta dishes, curries and more!
          </p>
          <div className="flex flex-col w-full gap-y-4 justify-end">
            <button
              onClick={() => addToCart()}
              className="w-1/4 bg-[#1abe71] text-[#042f1a] text-2xl font-bold font-rammetto rounded-md p-3 cursor-pointer"
            >
              ADD TO CART
            </button>

            <button
              onClick={() => {
                navigate("/Cart", {
                  state: {
                    CartItems,
                    name,
                  },
                });
              }} // Pass the ID of the first product being added
              // Pass the ID of the second product being added
              className=" w-1/4 bg-white text-[#042f1a] text-2xl font-bold font-rammetto rounded-md p-3 cursor-pointer"
            >
              GO TO CART
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end items-center">
          <img
            src={pieces}
            alt="About"
            className="mr-40 mt-10 w-[700px] object-contain rounded-xl"
          />
        </div>
      </div>

      <div className="bg-[#122e18] text-white min-h-screen p-4">
        {sections.map((section, index) => (
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

      <Footer />
    </>
  );
};

export default P1;
