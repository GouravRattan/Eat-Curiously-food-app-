import React, { useState } from 'react';
import GOOGLE_ICON from '../../assets/google.svg'

const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const [quantity, setQuantity] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const decrementItem = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementItem = () => {
    setQuantity(quantity + 1);
  };

  // Calculate subtotal
  const subtotal = price * quantity;

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="w-full flex mt-24 font-rammetto justify-between">
      <div className="flex items-center space-x-8">
        <img src={productImage} alt={productName} className="w-20 h-20 object-contain" />
        <div>
          <p className="font-bold">{productName}</p>
          <p className="text-gray-500">${price}</p>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <button
          onClick={decrementItem}
          className="px-4 py-2 bg-red-500 text-white rounded-md"
        >
          -
        </button>
        <span className="px-4 py-2 bg-gray-200 rounded-md">{quantity}</span>
        <button
          onClick={incrementItem}
          className="px-4 py-2 bg-green-500 text-white rounded-md"
        >
          +
        </button>
      </div>
      <div className="font-bold flex items-center justify-center">${subtotal}</div> {/* Subtotal */}
      <div className="w-1/3 h-full flex flex-col p-20 justify-between items-center">
        <button
          type="submit"
          className="w-full bg-black font-bold text-white my-2 rounded-md p-4 text-center flex items-center justify-center cursor-pointer"
        >
          <img className='w-6' src={GOOGLE_ICON} alt="" />
          <h1 className='text-2xl'>Pay</h1>
        </button>

        <div className="w-full flex items-center justify-center relative py-4">
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
            <h5 className="font-semibold pt-10">Shipping Address</h5>

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

            <h5 className="text-xl font-semibold py-5">Payment Details</h5>
            <h5 className="font-semibold">Card Information</h5>

            <input
              type="text"
              placeholder="1234 1234 1234 1234"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full text-black bg-white py-4 border-b rounded-md border-black outline-none focus:outline-none"
            />

            <div className="flex absolute bottom-52 right-44">
              {/* Add your payment icons here */}
            </div>

            <div className="flex">
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
          <div className='flex justify-between font-bold text-xl'>
            <span>Pay</span>
            <span>: {subtotal}</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default CartItem;
