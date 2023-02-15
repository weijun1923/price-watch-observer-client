import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./compnents/Home";
import Nav from "./compnents/Nav";
import Footer from "./compnents/Footer";
import Search from "./compnents/Search";
import Cart from "./compnents/Cart";
import Login from "./compnents/Login";
import Register from "./compnents/Register";
import Profile from "./compnents/Profile";
import AuthService from "./services/auth.service";

function App() {
  let [currentUser, setCurrentUser] = useState(AuthService.getCurrentUser());
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path="/price-watch-observer-client/" element={<Home />} />
        <Route path="/price-watch-observer-client/search" element={<Search />} />
        <Route path="/price-watch-observer-client/cart" element={<Cart />} />
        <Route path="/price-watch-observer-client/login" element={<Login currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        <Route path="/price-watch-observer-client/register" element={<Register />} />
        <Route path="/price-watch-observer-client/Profile" element={<Profile currentUser={currentUser} setCurrentUser={setCurrentUser}/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
