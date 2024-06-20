import React from 'react';
import { Link } from 'react-router-dom';

const UserIcon = () => {
  return (
    <div className="fixed top-8 left-4 z-50 text-white">
      <Link to="/User/Accountsettings" className="hover:bg-blue-600 transition duration-200">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="currentColor" 
          className="w-12 h-12" // Increase the size with w-12 h-12
        >
          <path
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" 
          />
        </svg>
      </Link>
    </div>
  );
};

export default UserIcon;