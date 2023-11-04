import {React,useState} from "react";
import {ethers} from "ethers"
import {abi} from "../../../Contracts/abi.js"

const Form = () => {
  const [name,setName]=useState("")
  const [age,setAge]=useState()
  const [weight,setWeight]=useState()
  const [diagnosis,setDiagnosis]=useState()

  const contractAddress="0x5f29a5cca6abd9a141f3e2d84d85b90dde968b8e";
  

  const formSubmitHandler=async()=>{
    const provider=new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts",[])
    const signer=provider.getSigner;
    const contract=new ethers.Contract(contractAddress,abi,signer)

  }

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
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setAge(e.target.value)}

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
              onChange={(e) => setWeight(e.target.value)}

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
              onChange={(e) => setDiagnosis(e.target.value)}

            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:ring focus:ring-blue-400"
            onClick={formSubmitHandler}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;