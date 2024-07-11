import React, { useState } from "react";

const Address = () => {
  const [show, setShow] = useState(false);
  const [savedAddresses, setSavedAddresses] = useState([
    {
      AddressLine1: "AddressLine1",
      AddressLine2: "AddressLine2",
      AddressLine3: "AddressLine3",
      AddressLine4: "AddressLine4",
      
    },
    {
      AddressLine1: "AddressLine1",
      AddressLine2: "AddressLine2",
      AddressLine3: "AddressLine3",
      AddressLine4: "AddressLine4",
    },
    {
      AddressLine1: "AddressLine1",
      AddressLine2: "AddressLine2",
      AddressLine3: "AddressLine3",
      AddressLine4: "AddressLine4",
    },
  ]);

  const [newAddress, setNewAddress] = useState({
    AddressLine1: "",
    AddressLine2: "",
    AddressLine3: "",
    AddressLine4: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSavedAddresses([...savedAddresses, newAddress]);
    setNewAddress({
      AddressLine1: "",
      AddressLine2: "",
      AddressLine3: "",
      AddressLine4: ""
    });
    setShow(false);
  };

  const handleRemoveAddress = (index) => {
    const updatedAddresses = savedAddresses.filter((_, i) => i !== index);
    setSavedAddresses(updatedAddresses);
  };

  return (
    <div className="userAddress p-4">
      {!show && <h1 className="text-2xl mb-4">Your Address</h1>}

      {!show && (
        <div className="addressIn grid grid-cols-1 md:grid-cols-2 gap-4">
          {savedAddresses.map((item, index) => (
            <div className="address p-4 border border-gray-300 rounded-lg shadow-sm flex justify-between items-center" key={index}>
              <div>
                <span className="block">{item.AddressLine1}</span>
                <span className="block">{item.AddressLine2}</span>
                <span className="block">{item.AddressLine3}</span>
                <span className="block">{item.AddressLine4}</span>
              </div>

              <div 
                className="delbtn -mt-24 -mr-6 bg-green-200 border rounded-full text-[20px] cursor-pointer text-red-500 hover:text-red-700"
                onClick={() => handleRemoveAddress(index)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-10 h-10"
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
        <div className="addressbtn mt-4 cursor-pointer text-blue-500 hover:text-blue-700 flex justify-center" onClick={() => setShow(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-14 h-14"
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
          <form onSubmit={handleFormSubmit} className="form grid grid-cols-2 md:grid-cols-2 gap-4">
            <div className="form-group">
              <label htmlFor="addressLine1" className="block text-sm font-medium text-gray-700">House No. & Floor</label>
              <input 
                type="text" 
                name="AddressLine1"
                value={newAddress.AddressLine1}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="addressLine2" className="block text-sm font-medium text-gray-700">Building & Block No.</label>
              <input 
                type="text" 
                name="AddressLine2"
                value={newAddress.AddressLine2}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="addressLine3" className="block text-sm font-medium text-gray-700">Landmark & Area Name</label>
              <input 
                type="text" 
                name="AddressLine3"
                value={newAddress.AddressLine3}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              />
            </div>

            <div className="form-group">
              <label htmlFor="addressLine4" className="block text-sm font-medium text-gray-700">Postel Code</label>
              <input 
                type="text" 
                name="AddressLine4"
                value={newAddress.AddressLine4}
                onChange={handleInputChange}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" 
              />
            </div>

            <button 
              type="submit"
              className="btn mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700"
            >
              Add Address
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Address;
