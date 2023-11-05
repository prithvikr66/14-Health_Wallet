import React from "react";
import ambulimg from "../assets/3.jpeg";

const Emergency = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="bg-red-500 p-5 rounded-lg shadow-lg flex md:flex-row">
        {/* Image Section */}
        <div className="md:w-full p-8">
          <img
            src={ambulimg} // Fixed the image source
            alt="Emergency Image"
            className="w-full h-auto max-h-80 md:max-h-full md:w-auto"
          />
        </div>

        {/* Contact List Section */}
        <div className="md:w-full~ p-8">
          <h1 className="text-4xl font-bold text-white mb-6">
            Emergency Contact List
          </h1>
          <div className="bg-white p-8 rounded-lg w-1/2">
            {/* Contact Inputs */}
            <div className="mb-4">
              <label
                className="text-gray-700 font-bold block mb-2"
                htmlFor="contact1"
              >
                Contact 1
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                type="text"
                id="contact1"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="text-gray-700 font-bold block mb-2"
                htmlFor="contact2"
              >
                Contact 2
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                type="text"
                id="contact2"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="text-gray-700 font-bold block mb-2"
                htmlFor="contact3"
              >
                Contact 3
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                type="text"
                id="contact3"
                placeholder="Name"
              />
            </div>
            <div className="mb-4">
              <label
                className="text-gray-700 font-bold block mb-2"
                htmlFor="contact4"
              >
                Contact 4
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-red-500"
                type="text"
                id="contact4"
                placeholder="Name"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;