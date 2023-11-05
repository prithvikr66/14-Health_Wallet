import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/navbar";
import Home from "./screens/Home/Home";
import Footer from "./components/Footer/footer";
import Login from "./components/Login/login";
import Signup from "./components/Signup/signup";
import Form from "./components/Form";
import UserProfile from "./components/UserProfile";
import FileUpload from "./components/FileUpload";
import AppLayout from "./screens/Applayout/applayout";
import { AuthProvider } from "./hooks/AuthContext";
import Landing from "./screens/Landing/landing";
import Map from "./components/Map";
const App = () => (
  <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
         
          <Route path="/signup" element={<Signup />} />

          {/* <Route path="/register" element={<Register />} /> */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
        <Route path="/form" element={<Form />} />
        <Route path="/map" element={<Map />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/fileupload" element={<FileUpload />} />
        <Route>
          <Route path="/landing" element={<Landing />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  </AuthProvider>
);

export default App;
