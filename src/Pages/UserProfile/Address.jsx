import React, { useState } from "react";

const Address = () => {
  const [show, setShow] = useState(true);

  const savedAddress = [
    {
      AddressLine1: "AddressLine1",
      AddressLine2: "AddressLine2",
      AddressLine3: "AddressLine3",
    },
    {
      AddressLine1: "AddressLine1",
      AddressLine2: "AddressLine2",
      AddressLine3: "AddressLine3",
    },
    {
      AddressLine1: "AddressLine1",
      AddressLine2: "AddressLine2",
      AddressLine3: "AddressLine3",
    },
  ];

  return (
    <div className="userAddress p-4">
      {!show && <h1 className="text-2xl mb-4">Your Address</h1>}

      {!show && (
        <div className="addressIn space-y-4">
          {savedAddress.map((item, index) => (
            <div className="address p-4 border border-gray-300 rounded-lg shadow-sm" key={index}>
              <span className="block">{item.AddressLine1}</span>
              <span className="block">{item.AddressLine2}</span>
              <span className="block">{item.AddressLine3}</span>

              <div className="delbtn mt-2 cursor-pointer text-red-500 hover:text-red-700">
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
                    d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      )}

      {!show && (
        <div className="addressbtn mt-4 cursor-pointer text-blue-500 hover:text-blue-700" onClick={() => setShow(true)}>
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
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </div>
      )}

      {show && (
        <div className="addressNew p-4 border border-gray-300 rounded-lg shadow-sm mt-4">
          <h1 className="text-2xl text-slate-700 mb-4">Add new Address</h1>
          <div className="form space-y-4">
            <div className="form-group">
              <label htmlFor="postalcode" className="block text-sm font-medium text-gray-700">Postal Code</label>
              <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            <div className="form-group">
              <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">Address Line 1</label>
              <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            <div className="form-group">
              <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Address Line 2</label>
              <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>

            <div className="form-group">
              <label htmlFor="addressLine3" className="block text-sm font-medium text-gray-700">Address Line 3</label>
              <input type="text" className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
            </div>
          </div>

          <button 
            className="btn mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            onClick={() => setShow(false)}
          >
            Show Saved Addresses
          </button>
        </div>
      )}
    </div>
  );
};

export default Address;
