import React, { useContext } from "react";
import { PRODUCTS } from "../../Products";
import { ShopContext } from "../../Context/shopContext";
import CartItem from "./cartItem";

const Cart = () => {
  const { cartItems } = useContext(ShopContext);

  return (
    <div className="cart h-screen w-full bg-gray-100 flex">
      <section className="h-screen py-12 sm:py-16 lg:py-20 w-1/2">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-semibold text-gray-900">Your Cart</h1>
          </div>

          <div className="mx-auto mt-8 max-w-md md:mt-12">
            <div className="rounded-3xl bg-white shadow-lg">
              <div className="px-4 py-6 sm:px-8 sm:py-10">
                <div className="h-64 overflow-hidden">
                  <div className="h-full overflow-y-auto no-scrollbar">
                    {PRODUCTS.map((product) => {
                      if (cartItems[product.id] == 0) {
                        return <CartItem data={product} key={product.id} />;
                      }
                      return null;
                    })}
                  </div>
                </div>
                <hr className="mx-0 mt-6 mb-0 h-0 border-r-0 border-b-0 border-l-0 border-t border-solid border-gray-300" />

                <div className="mt-6 space-y-3 border-t border-b py-8">
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Subtotal</p>
                    <p className="text-lg font-semibold text-gray-900">₹ 3000</p>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-gray-400">Shipping</p>
                    <p className="text-lg font-semibold text-gray-900">₹ 8.00</p>
                  </div>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <p className="text-sm font-medium text-gray-900">Total</p>
                  <p className="text-2xl font-semibold text-gray-900">
                    <span className="text-xs font-normal text-gray-400">RUP </span>₹
                    2499.00
                  </p>
                </div>

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    className="group inline-flex w-full items-center justify-center rounded-md bg-orange-500 px-6 py-4 text-lg font-semibold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                  >
                    Place Order
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="group-hover:ml-8 ml-4 h-6 w-6 transition-all"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M13 7l5 5m0 0l-5 5m5-5H6"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="col-span-full border-md border-zinc-900 sm:py-12 lg:col-span-6 lg:py-24 w-1/2">
        <div className="mx-auto w-full max-w-lg bg">
          <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
            Secure Checkout
            <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
          </h1>
          <form action="" className="mt-10 flex flex-col space-y-4 ">
            <div>
              <label for="email" className="text-xs font-semibold text-gray-500 bg">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="john.capler@fang.com"
                className="mt-1 block w-full rounded border-gray-300 bg-white py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="relative">
              <label
                for="card-number"
                className="text-xs font-semibold text-gray-500"
              >
                Card number
              </label>
              <input
                type="text"
                id="card-number"
                name="card-number"
                placeholder="1234-5678-XXXX-XXXX"
                className="block w-full rounded border-gray-300 bg-white py-3 px-4 pr-10 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
              />
              <img
                src="/images/uQUFIfCYVYcLK0qVJF5Yw.png"
                alt=""
                className="absolute bottom-3 right-3 max-h-4"
              />
            </div>
            <div>
              <p className="text-xs font-semibold text-gray-500">Expiration date</p>
              <div className="mr-6 flex flex-wrap">
                <div className="my-1">
                  <label for="month" className="sr-only">
                    Select expiration month
                  </label>
                  <select
                    name="month"
                    id="month"
                    className="cursor-pointer rounded border-gray-300 bg-white py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Month</option>
                  </select>
                </div>
                <div className="my-1 ml-3 mr-6">
                  <label for="year" className="sr-only">
                    Select expiration year
                  </label>
                  <select
                    name="year"
                    id="year"
                    className="cursor-pointer rounded border-gray-300 bg-white py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  >
                    <option value="">Year</option>
                  </select>
                </div>
                <div className="relative my-1">
                  <label for="security-code" className="sr-only">
                    Security code
                  </label>
                  <input
                    type="text"
                    id="security-code"
                    name="security-code"
                    placeholder="Security code"
                    className="block w-36 rounded border-gray-300 bg-white py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
            </div>
            <div>
              <label for="card-name" className="sr-only">
                Card name
              </label>
              <input
                type="text"
                id="card-name"
                name="card-name"
                placeholder="Name on the card"
                className="mt-1 block w-full rounded border-gray-300 bg-white py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
              />
            </div>
          </form>
          <p className="mt-10 text-center text-sm font-semibold text-gray-500">
            By placing this order you agree to the{" "}
            <a
              href="#"
              className="whitespace-nowrap text-teal-400 underline hover:text-teal-600"
            >
              Terms and Conditions
            </a>
          </p>
          <button
            type="submit"
            className="mt-4 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
