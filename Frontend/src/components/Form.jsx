import React from "react";

const Form = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-xl h-auto sm:max-w-screen-sm">
        <h1 className="text-2xl font-semibold mb-4">HealthWare Form</h1>
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              User Name
            </label>
            <input
              type="text"
              id="username"
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-400"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-400"
              placeholder="30"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="weight"
            >
              Weight
            </label>
            <input
              type="text"
              id="weight"
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-400"
              placeholder="150 lbs"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="healthIssue"
            >
              Any Other Health Issue
            </label>
            <textarea
              id="healthIssue"
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-blue-400"
              placeholder="Describe any health issues here"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;