import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./compnents/Home";
import Nav from "./compnents/Nav";
import Footer from "./compnents/Footer";
import Search from "./compnents/Search";
import Cart from "./compnents/Cart";
import Login from "./compnents/Login";
import Register from "./compnents/Register";
import Personal from "./compnents/Personal";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/price-watch-observer-client/" element={<Home />} />
        <Route path="/price-watch-observer-client/search" element={<Search />} />
        <Route path="/price-watch-observer-client/cart" element={<Cart />} />
        <Route path="/price-watch-observer-client/login" element={<Login />} />
        <Route path="/price-watch-observer-client/register" element={<Register />} />
        <Route path="/price-watch-observer-client/personal" element={<Personal />} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
