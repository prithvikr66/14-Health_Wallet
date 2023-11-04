import React from 'react';
import './Home.css'; // Create a CSS file for additional styling if needed
import bg from "../../assets/bg.avif";

function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="md:w-1/2 p-8 text-black">
        <h1 className="text-[50px] font-bold">Welcome to <span className=' text-blue-500'>HealthWallet</span></h1>
        <p className="text-[25px] mt-4 ">Your trusted health management platform.</p>
      </div>
      <div className="md:w-1/2">
        <img src={bg} alt="Background" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Home;
