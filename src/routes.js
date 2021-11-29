import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer";
import FloatButton from "./components/FloatButton/FloatButton";

function AllRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <div style={{ position: "fixed", right: 10, bottom: 10 }}>
        <FloatButton />
      </div>

      <Footer />
    </BrowserRouter>
  );
}
export default AllRoutes;
