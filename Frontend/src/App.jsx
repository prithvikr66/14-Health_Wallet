import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./screens/Home/Home";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    <Footer />
  </>
);

export default App;
