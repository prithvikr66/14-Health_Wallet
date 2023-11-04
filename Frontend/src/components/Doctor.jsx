import React from "react";

const Doctor = () => {
  return (
    <div className="bg-blue-500 p-5 mt-9">
      <h1 className="text-white text-center font-bold text-3xl mb-3">
        DOCTOR's Previous VISIT
      </h1>
      <div>
        <div className="bg-white rounded-lg shadow-lg p-8 mt-3">
          <h1 className="text-2xl font-bold text-gray-800 w-full">
            Dr.Akash Singh
          </h1>
          <p className="text-gray-600">Date: 10th October, 2023</p>
          <p className="text-gray-600">Time: 10:00 PM</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 mt-3">
          <h1 className="text-2xl font-bold text-gray-800 w-full">
            Dr.Meena Kumari
          </h1>
          <p className="text-gray-600">Date: 10th October, 2023</p>
          <p className="text-gray-600">Time: 10:00 PM</p>
        </div>
        <div className="bg-white rounded-lg shadow-lg p-8 mt-3">
          <h1 className="text-2xl font-bold text-gray-800 w-full">
            Dr.Rameshwar Prasad
          </h1>
          <p className="text-gray-600">Date: 10th October, 2023</p>
          <p className="text-gray-600">Time: 10:00 PM</p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
