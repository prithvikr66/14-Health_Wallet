import React from 'react';
import './landing.css'; // Create a CSS file for additional styling if needed
import bg from "../../assets/bg.avif";

function Landing() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-screen">
      <div className="md:w-1/2 p-8 text-black text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to <span className='text-blue-500'>HealthWallet</span></h1>
        <p className="text-lg md:text-2xl mt-4">Your trusted health management platform.</p>
      </div>
      <div className="md:w-1/2">
        <img src={bg} alt="Background" className="w-full h-auto" />
      </div>
    </div>
  );
}

export default Landing;
