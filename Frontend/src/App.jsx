import React from "react";
import { Routes, Route } from "react-router-dom";

const App = () => (
  <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/login" element={<Login />} /> */}
      {/* <Route path="/register" element={<Register />} /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
    <Footer />
  </>
);

export default App;
