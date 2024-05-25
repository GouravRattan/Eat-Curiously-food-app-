import React, { useState } from 'react';

const CartItem = (props,) => {
  const { id, productName, price, productImage, } = props.data;
  const [quantity, setQuantity] = useState(1);

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

  return (
    <>
      <div className="flow-root">
        <ul className="-my-8">
          <li className="flex flex-col space-y-3 py-10 text-left sm:flex-row sm:space-x-5 sm:space-y-0 ">
            <div className="shrink-0 relative">
              <span className="absolute top-1 left-1 flex h-6 w-6 items-center justify-center rounded-full border bg-white text-sm font-medium text-gray-500 shadow sm:-top-2 sm:-right-2">{quantity}</span>
              <img className="h-24 w-24 max-w-full rounded-lg object-cover" src={productImage} alt="" />
            </div>

            <div className="relative flex flex-1 flex-col justify-between">
              <div className="sm:col-gap-5 sm:grid sm:grid-cols-2">
                <div className="pr-8 sm:pr-5">
                  <p className="text-base font-semibold text-gray-900">{productName}</p>
                  <p className="mx-0 mt-1 mb-0 text-sm text-gray-400">36EU - 4US</p>
                </div>

                <div className="mt-4 flex items-end justify-between sm:mt-0 sm:items-start sm:justify-end">
                  <p className="shrink-0 w-20 text-base font-semibold text-gray-900 sm:order-2 sm:ml-8 sm:text-right">₹ {subtotal}</p>
                </div>
              </div>

              <div className="absolute top-0 lefy-0 flex sm:bottom-0 sm:top-auto">
                <button type="button" onClick={incrementItem} className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                  </svg>
                </button>
                <button type="button" onClick={decrementItem} className="flex rounded p-2 text-center text-gray-500 transition-all duration-200 ease-in-out focus:shadow hover:text-gray-900">
                  <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4"></path>
                  </svg>
                </button>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
};

export default CartItem;
