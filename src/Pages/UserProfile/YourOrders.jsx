import React from "react";
import StatusDot from "../../Components/StatusDot";

const YourOrders = () => {
  const data = [
    {
      id: 112345,
      date: "12/12/2021",
      status: "Delivered",
      total: 1000,
    },
    {
      id: 112345,
      date: "12/12/2021",
      status: "On the way",
      total: 1000,
    },
    {
      id: 112345,
      date: "12/12/2021",
      status: "Delivered",
      total: 1000,
    },
    {
      id: 112345,
      date: "12/12/2021",
      status: "Cnacelled",
      total: 1000,
    },
    {
      id: 112345,
      date: "12/12/2021",
      status: "Delivered",
      total: 1000,
    },
    {
      id: 112345,
      date: "12/12/2021",
      status: "On the way",
      total: 1000,
    },
    // You can add more orders here
  ];

  return (
    <div className="yourorders p-8">
      <h1 className="mainhead1 text-3xl font-bold mb-6">Your Orders</h1>
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border-b-2 border-gray-300 p-2 text-left">
              Order ID
            </th>
            <th className="border-b-2 border-gray-300 p-2 text-left">Date</th>
            <th className="border-b-2 border-gray-300 p-2 text-left">Status</th>
            <th className="border-b-2 border-gray-300 p-2 text-left">Total</th>
            <th className="border-b-2 border-gray-300 p-2 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((order, index) => (
            <tr key={index} className="hover:bg-gray-100">
              <td className="border-b border-gray-300 p-2">{order.id}</td>
              <td className="border-b border-gray-300 p-2">{order.date}</td>
              <td className="border-b border-gray-300 p-2">
                {" "}
                <p>
                  {" "}
                  
                  {order.status == "Delivered" && (
                    <span className="greendot"> <StatusDot color="green" /> </span>
                  )}
                  {/* <StatusDot color="yellow" /> */}
                  {order.status == "On the way" && (
                    <span className="yellowdot"> <StatusDot color="orange" /> </span>
                  )}{" "}
                  {order.status == "Cnacelled" && (
                    <span className="reddot"> <StatusDot color="red" /> </span>
                  )}{" "}
                  {order.status}{" "}
                </p>{" "}
              </td>
              <td className="border-b border-gray-300 p-2">${order.total}</td>
              <td className="border-b border-gray-300 p-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 transition duration-200">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default YourOrders;
