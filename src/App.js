import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Container/Home";
import Header from "./Components/Header";
// import Footer from "./Components/Footer";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <h2>Start editing to see some magic happen!</h2>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
          </Routes>
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    );
  }
}
