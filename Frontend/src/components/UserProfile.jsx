import React from "react";
import profileimg from "../assets/1.png"; // Replace with the actual path to your profile image
import "../App.css";
import Medicine from "./Medicine";

const UserProfile = () => {
  return (
    <div className="text-black min-h-screen p-8 w-full">
      <div className="flex items-center mb-6 content">
        <img
          src={profileimg}
          alt="Profile Image"
          className="w-24 h-24 rounded-full mr-8"
        />
        <div>
          <h1 className="text-3xl font-semibold">John Doe</h1>
        </div>
      </div>
      <div className="flex">
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              htmlFor="age"
            >
              Age
            </label>
            <p className="text-lg font-medium text-black">30</p>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              htmlFor="weight"
            >
              Weight
            </label>
            <p className="text-lg font-medium text-black">150 lbs</p>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              htmlFor="healthIssue"
            >
              Any Other Health Issue
            </label>
            <p className="text-lg font-medium text-black">
              No known health issues
            </p>
          </div>
        </div>
        <Medicine />
      </div>
    </div>
  );
};

export default UserProfile;