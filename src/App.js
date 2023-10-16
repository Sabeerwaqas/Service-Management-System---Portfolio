import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../src/components/navbar/Navbar";
import Homepage from "./components/homepage/Homepage";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Contact from "../src/components/contact/Contact";
import Login from "./components/login/Login";
import Dashboard from "./components/dashboard/Dashboard";
import "./App.css";


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
