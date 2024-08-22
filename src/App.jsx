import React, { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/header/Header";
import PopularMenu from "./components/popular-menu/PopularMenu";
import ChooseUs from "./components/choose-us/ChooseUs";
import MenuPack from "./components/menu-pack/MenuPack";
import Download from "./components/download-section/Download";
import Footer from "./components/footer/Footer";
import Cart from "./components/cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <ToastContainer position="bottom-right" autoClose={2000} />
      <Header />
      <div className="mt-36 flex flex-col justify-between h-[calc(100vh-150px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/about" element={<ChooseUs />} />
          <Route path="/menu" element={<MenuPack />} />
          <Route path="/contact" element={<Download />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
