import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./screens/Home/Home";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Form from "./components/Form";
import UserProfile from "./components/UserProfile";
import FileUpload from "./components/FileUpload";
const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/form" element={<Form />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/form" element={<Form />} />
      <Route path="/userprofile" element={<UserProfile/>} />
      <Route path="/fileupload" element={<FileUpload />} />

      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    <Footer />
  </>
);

export default App;
