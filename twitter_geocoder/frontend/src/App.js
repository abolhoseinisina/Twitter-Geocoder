import React, { Fragment } from "react";
import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About.js";
import Province from "./components/Province";

function App() {
  return (
    <Fragment>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="province" element={<Province />} />
      </Routes>
      {/* <Home /> */}
      <Footer />
    </Fragment>
  );
}

export default App;