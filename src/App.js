import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Products } from "./Container";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<div> hello </div>} />
            {/* <Route path="/" element={<Products />} /> */}
            {/* <Route path="/about" element={<Home />} />
            <Route path="/about" element={<Home />} /> */}
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
