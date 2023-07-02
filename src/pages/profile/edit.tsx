import React from "react";

const Edit = () => {
  return (
    <div className="px-4 py-10 space-y-4">
      <div className="flex items-center space-x-3">
        <div className="w-14 h-14 rounded-full bg-slate-300" />
        <label
          htmlFor="picture"
          className="cursor-pointer py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium
        focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 text-gray-700"
        >
          Change
          <input id="picture" type="file" className="hidden" accept="image/*" />
        </label>
      </div>
      <div className="space-y-1">
        <label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email address
        </label>

        <input
          id="email"
          type="email"
          required
          className="appearance-none w-full border-gray-300 border px-3 py-2 rounded-md shadow-sm placehorder-gray-400 
                focus:outline-none focus:ring-orange-500 focus:border-orange-500"
        />
      </div>
      <div className="space-y-1">
        <label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone nubmer
        </label>

        <div className="flex rounded-sm shadow-sm">
          <span className="flex items-center justify-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 select-none">
            +82
          </span>
          <input
            id="phone"
            type="number"
            required
            className="appearance-none w-full border-gray-300 border px-3 py-2 rounded-l-none rounded-md shadow-sm placehorder-gray-400 
                focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
      </div>
      <button
        className="mt-5 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 
          border border-transparent rounded-md shadow-sm text-sm font-medium
          focus:ring-2 focus:ring-offset-1 focus:ring-orange-500 focus:outline-none"
      >
        Update profiles
      </button>
    </div>
  );
};

export default Edit;
