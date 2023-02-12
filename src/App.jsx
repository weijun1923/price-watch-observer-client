import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./compnents/Home";
import Nav from "./compnents/Nav";
import Footer from "./compnents/Footer";
import Search from "./compnents/Search";

function App() {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/price-watch-observer-client/" element={<Home />} />
        <Route path="/price-watch-observer-client/search" element={<Search />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;