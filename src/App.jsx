import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// components
import HomeComponent from './components/home-component';
import NavComponent from './components/nav-component';
import SearchComponent from "./components/search-component";

function App() {
  // 追蹤導覽列開關
  const [navOpen , setNavOpen] = useState(true);
  return (
    <div>
      {navOpen && (
        <NavComponent navOpen = {navOpen} setNavOpen = {setNavOpen}/>
      )}
      <Routes>
        {!navOpen && (
          <Route path="/price-watch-observer-client/" element={<HomeComponent navOpen = {navOpen} setNavOpen = {setNavOpen}/>} />
        )}
        <Route path="/price-watch-observer-client/search" element={<SearchComponent />} />
      </Routes>
    </div>
  );
}

export default App;
