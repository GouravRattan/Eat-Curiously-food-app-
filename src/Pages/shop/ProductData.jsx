import React, { useContext } from 'react'
import NavBar from "../../Components/NavBar";
import {ShopContext} from '../../Context/shopContext';

const ProductData = (props) => {
  const {id, productName, price, productImage} = props.data
  const {addToCart, cartItems} = useContext(ShopContext);
  const cartItemCount = cartItems[id];

  console.log(id,"this is id");

  return (
    <>
            <div className="flex bg-[#042f1a] h-screen ">
                <NavBar AboutBtn="text-[#042f1a] bg-[#fc74b4] font-bold px-8 py-4 rounded-full font-rammetto" />
                <div className="flex flex-col justify-center items-center w-1/2 text-white ml-20">
                    <h1 className=" w-full text-8xl font-bold mt-6 font-rammetto">
                      {productName}
                    </h1>
                    <p className="text-xl text-left mx- my-20 pr-[400px] ">
                        Tender delicious juicy protein pieces coated in a hot and spicy glaze. Perfect for those with dietary restrictions, our pieces contain none of the 14 main allergens such as dairy, gluten, soy, and nuts. Our versatile Eat Curious pieces are perfect for a variety of culinary applications including pizza toppings, pies, salad bowls, stir-fry, pasta dishes, curries and more!
                    </p>
                    <div className='flex flex-col w-1/6 gap-y-2 mr-[80%] font-extrabold font-rammetto'>
                    ₹ {price}
                    </div>
                </div>
                <div className="w-1/2 flex justify-end items-center">
                    <img src={productImage} alt="About" className="mr-40 mt-10 w-[700px] object-contain rounded-xl" />
                </div>
            </div>
            <div className="relative">

            <button className="absolute bg-[#1abe71]  text-[#042f1a] bottom-20 left-20 text-2xl font-bold font-rammetto rounded-md p-3 cursor-pointer" onClick={() => addToCart(id)}>
                            ADD TO CART {cartItemCount > 0 && <> ({cartItemCount})</>}
                  </button>

            </div>
        </>

  )
}

export default ProductData
