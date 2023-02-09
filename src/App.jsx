import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// components
import HomeComponent from './components/home-component';
import NavComponent from './components/nav-component';

function App() {
  return (
    <div>
      <NavComponent/>
      <Routes>
        <Route path="/price-watch-observer-client/" element={<HomeComponent />} />
      </Routes>
    </div>
  );
}

export default App;
