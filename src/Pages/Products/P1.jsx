import React, {useState} from 'react';
import pieces from '../../assets/sub-product-img/image1.png';
import NavBar from '../../Components/NavBar';
import Cart from '../Cart';
import { useNavigate } from 'react-router-dom';

const P1 = ({}) => {
    const navigate = useNavigate();
    const [CartItems, setCartItems] = useState([]);
    const [count, setCount] = useState(1);
    const [name, setName] = useState("CURIOUS PIECES");

    const addToCart = () => {
        setCount(count+1)
        setCartItems([...CartItems,count ]);
    }

    return (
        <>
            <div className="flex bg-[#042f1a] h-screen ">
                <NavBar AboutBtn="text-[#042f1a] bg-[#fc74b4] font-bold px-8 py-4 rounded-full font-rammetto" />
                <div className="flex flex-col justify-center items-center w-1/2 text-white ml-20">
                    <h1 className=" text-8xl font-bold text-left mx-10 mt-10 font-rammetto">
                  {/* {name} */} 
                    </h1>
                    <p className="text-xl text-left mx-10 my-20 pr-[400px] ">
                        Tender delicious juicy protein pieces coated in a hot and spicy glaze. Perfect for those with dietary restrictions, our pieces contain none of the 14 main allergens such as dairy, gluten, soy, and nuts. Our versatile Eat Curious pieces are perfect for a variety of culinary applications including pizza toppings, pies, salad bowls, stir-fry, pasta dishes, curries and more!
                    </p>
                    <div className='flex flex-col w-1/4 gap-y-4 mr-[600px]'>
                        <button
                            
                            onClick={() => addToCart()}
                          
                            className="bg-[#1abe71] text-[#042f1a] text-2xl font-bold font-rammetto rounded-md p-3 cursor-pointer"
                        >
                            ADD TO CART
                        </button>

                        <button
                          
                            onClick={() => {
                                navigate("/Cart", {
                                  state: {
                                    CartItems ,name
                                  },
                                });
                              }}// Pass the ID of the first product being added
                             // Pass the ID of the second product being added
                            className="bg-white text-[#042f1a] text-2xl font-bold font-rammetto rounded-md p-3 cursor-pointer"
                        >
                            ADD TO CART
                        </button>
                    </div>
                </div>
                <div className="w-1/2 flex justify-end items-center">
                    <img src={pieces} alt="About" className="mr-40 mt-10 w-[700px] object-contain rounded-xl" />
                </div>
            </div>
        </>

       
    );
};

export default P1;
