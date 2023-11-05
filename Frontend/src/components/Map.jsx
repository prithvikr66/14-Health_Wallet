import React from "react";
import Mapimg from "../assets/4.avif";

const Map = () => {
  const containerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
  };

  const imageStyle = {
    width: "100%", // Adjust the width as needed
    height: "400px", // Increase the maximum height to make the image larger
  };

  const titleStyle = {
    fontSize: "24px", // Adjust the font size
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <div className="p-2 rounded-lg shadow-lg">
        <div className="relative">
          <img src={Mapimg} alt="Hospital Image" style={imageStyle} />
          <div className="absolute bottom-0 left-0 p-4 bg-black text-white">
            <h1 style={titleStyle}>MSR Nagar</h1>
            <p>Ramaiah Institute Of Technology</p> {/* Replace with the actual name */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;