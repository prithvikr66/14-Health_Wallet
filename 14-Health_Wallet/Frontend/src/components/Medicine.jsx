import React from "react";

const Medicine = () => {
  return (
    <div className="bg-gray-200 p-6 rounded-lg shadow-md w-2/3 ml-20 border">
      <h1 className="text-2xl font-semibold mb-4 text-black">Reminder Medicines</h1>
      <ul className="list-decimal pl-4">
        <li className="mb-2 hover:bg-blue-500 hover:text-black p-2 rounded-lg transition duration-300">
          <span className="text-black font-semibold">Medicine 1:</span> Dosage
          instructions for Medicine 1
        </li>
        <li className="mb-2 hover:bg-green-500 hover:text-black p-2 rounded-lg transition duration-300">
          <span className="text-black font-semibold">Medicine 2:</span> Dosage
          instructions for Medicine 2
        </li>
        <li className="mb-2 hover:bg-red-500 hover:text-black p-2 rounded-lg transition duration-300">
          <span className="text-black font-semibold">Medicine 3:</span> Dosage
          instructions for Medicine 3
        </li>
      </ul>
    </div>
  );
};

export default Medicine;
