import React, { useState } from 'react';
import GOOGLE_ICON from '../assets/google.svg'
import AMAZONE_ICON from '../assets/amazon-pay-logo-19613.svg'
import { Link } from 'react-router-dom';
import NavBar from '../Components/NavBar';
import { useNavigate ,useLocation } from 'react-router-dom';

const Cart = () => {
  const location = useLocation();
  const data=location.state
  console.log(data ,"datadata")
  const initialItems = [
    { id: 1, name: "Product 1", price: 10, quantity: 1 },
   
    // Add more items here
  ];

  const [items, setItems] = useState(initialItems);

  const addToCart = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

  const incrementItem = (id) => {
    const updatedItems = items.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    );
    setItems(updatedItems);
  };

  const decrementItem = (id) => {
    const updatedItems = items.map(item =>
      item.id === id && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 } : item
    );
    setItems(updatedItems);
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track authentication status

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulate authentication - Replace with actual authentication logic
    if (email === "user@example.com" && password === "password") {
      // If authentication succeeds, set isLoggedIn to true
      setIsLoggedIn(true);
    } else {
      // If authentication fails, display an error message
      alert("Invalid email or password");
    }
  };

  return (
      <>
      <NavBar/>
      <div className="relative flex justify-between h-screen bg-red-400 p-20">
        <span className=' absolute font-bold font-rammetto text-3xl'>My Cart</span>
        <div className='overflow-auto flex flex-col space-y-12 mt-24 w-1/2 font-rammetto max-h-screen'>
          <h1 className='border-2 flex justify-between p-2'>
            <span>Product Title</span>
            <span>Quantity</span>
            <span>Price</span>
          </h1>
          {items.map(item => (
            <div key={item.id} className='border-2 flex justify-between p-2'>
              <span>{item.name}</span>
              <div className="flex items-center space-x-4">
                <button onClick={() => decrementItem(item.id)} className="px-2">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => incrementItem(item.id)} className="px-2">+</button>
              </div>
              <span>${item.price}</span>
            </div>
          ))}
          <div className='border-2 flex justify-between p-2 font-bold'>
            <span>Subtotal:</span>
            <span>${subtotal}</span>
          </div>
        </div>
        <div className="w-1/3 h-full flex flex-col p-20 justify-between items-center">
        <button
                type="submit"
                className="w-full bg-black font-bold text-white my-2 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
              >
                <img className='w-6' src={GOOGLE_ICON} alt="" /> <h1 className=' text-2xl'> Pay </h1>
              </button>

              <div className="w-full flex items-center justify-center relative py-4">
              {/* <div className="w-full h-[1px] bg-white"></div> */}
              <p className="text-lg absolute text-white">or Pay with Card</p>
            </div>

          <div className="w-full flex flex-col max-w-[500px] mt-10 text-black">
            <div className="w-full flex flex-col mb-1">
              <h3 className="text-xl font-semibold">Shipping Information</h3>
            </div>

            <form onSubmit={handleLogin} className="w-full max-w-[600px] flex flex-col space-y-1">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none"
              />
              <h5 className=" font-semibold pt-10">Shipping Address</h5>

              <input
                type="text"
                placeholder="Name"

                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none"
              />

<input
                type="text"
                placeholder="Address"

                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none"
              />

            <h5 className=" text-xl font-semibold py-5">Payment Details</h5>


            <h5 className=" font-semibold">Card Information</h5>

            <input
                type="text"
                placeholder="1234 1234 1234 1234"
                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none"
              />
              <div className=" flex absolute bottom-52 right-44">
                <img className='w-6' src={AMAZONE_ICON} alt="" />
                <img className='w-6' src={GOOGLE_ICON} alt="" />
                <img className='w-6' src={GOOGLE_ICON} alt="" />
                <img className='w-6' src={GOOGLE_ICON} alt="" />
                </div>

<div className="flex ">
<input
                type="text"
                placeholder="MM / YY"

                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black bg-white py-4 border rounded-l-md border-black outline-none focus:outline-none"
              />

<input
                type="text"
                placeholder="CVC"

                onChange={(e) => setPassword(e.target.value)}
                className="w-full text-black bg-white py-4 border rounded-r-md border-black outline-none focus:outline-none"
              />
              </div>

            </form>

          </div>

          <button
                type="submit"
                className="w-full bg-black font-bold text-white my-8 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
              >
                <div className=' flex justify-between font-bold text-xl'>
                <span > Pay </span>
            <span > : {subtotal}</span>
          </div>
              </button>
        </div>
      </div>
    </>
  );
}

export default Cart;
