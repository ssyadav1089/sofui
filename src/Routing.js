import { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

import { Home, About, Products, ForTeams } from "./Container";
import { Header, Footer } from "./Components";

class Routing extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className={this.props.theme}>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/products" element={<Products />} />
              <Route path="/for-teams" element={<ForTeams />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return { theme: state.theme };
}

export default connect(mapStateToProps)(Routing);
