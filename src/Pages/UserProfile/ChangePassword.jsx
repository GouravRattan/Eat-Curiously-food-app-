import React from 'react';

const ChangePassword = () => {
  return (
    <>
      <div className="p-4 max-w-2xl mx-auto bg-white shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-6">Change Password</h1>

        <div className="space-y-4">
          <div className="form-group">
            <label htmlFor="current-password" className="block text-lg font-medium text-gray-700">
              Current Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="current-password"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="form-group">
            <label htmlFor="new-password" className="block text-lg font-medium text-gray-700">
              New Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="new-password"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirm-new-password" className="block text-lg font-medium text-gray-700">
              Confirm New Password <span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="confirm-new-password"
              className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="form-group">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePassword;
