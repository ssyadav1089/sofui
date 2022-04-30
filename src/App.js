import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Products, ForTeams } from "./Container";
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
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/for-teams" element={<ForTeams />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
