import { React, useEffect, useState } from "react";
import profileimg from "../assets/1.jpg"; // Replace with the actual path to your profile image
import "../App.css";
import graphimg from "../assets/3.jpg"; // Replace with the actual path to your profile image
import Medicine from "./Medicine";
import { ethers } from "ethers";
import Doctor from "./Doctor";
import { abi } from "../../../Contracts/abi";
const UserProfile = () => {
  const [name, setName] = useState("");
  const [weight, setWeight] = useState();
  const [age, setAge] = useState();
  const [diagnosis, setDiagnosis] = useState();
  const contractAddress = "0x5f29a5cca6abd9a141f3e2d84d85b90dde968b8e";
  const provider = new ethers.providers.JsonRpcProvider(
    "https://eth-sepolia.g.alchemy.com/v2/_OWeidX2GJ2DOiiilZP21aymdg3XyPgq"
  );

  useEffect(() => {
    const getHealthDetails = async () => {
      const contractInstance = new ethers.Contract(
        contractAddress,
        abi,
        provider
      );
      const response = await contractInstance.getPatientRecord(0);
      setName(response[0]);
      // setAge(response[1])
      setDiagnosis(response[2]);
    };
    getHealthDetails();
  }, []);

  return (
    <div className="text-black min-h-screen p-8 w-full">
      <div className="flex items-center mb-6 content">
        <img
          src={profileimg}
          alt="Profile Image"
          className="w-24 h-24 rounded-full mr-8"
        />
        <div>
          <h1 className="text-3xl font-semibold">{name}</h1>
        </div>
      </div>
      <div className="flex">
        <div className="bg-white p-6 rounded-lg shadow-md w-1/2">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2 mt-4"
              htmlFor="age"
            >
              age
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
              Diseases
            </label>
            <p className="text-lg font-medium text-black">{diagnosis}</p>
          </div>
        </div>
        <Medicine />
      </div>
      <Doctor />
      <img
        src={graphimg}
        alt="Profile Image"
        className="w-full align items-center rounded-full mr-8 mt-6 p-9"
      />
    </div>
  );
};

export default UserProfile;
