import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {
  return (
    <>
      {" "}
      <Header />
      {/* <BrowserRouter> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* </BrowserRouter> */}
    </>
  );
}

export default App;
