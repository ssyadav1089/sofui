import { Component } from "react";
import { Link } from "react-router-dom";

import Form from "react-bootstrap/Form";

import { ReactComponent as Logo } from "../../assets/Logo.svg";

import "./styles.css";

export default class Navigation extends Component {
  render() {
    return (
      <div className="dark">
        <nav className="navbar navbar-expand-lg navbar-light bs-md">
          <div className="header-brand-div">
            <Link className="navbar-brand" to="/">
              <Logo className="full-logo" />
            </Link>
            <div className="navigation">
              <Link to="/about" className="navigation--item">
                About
              </Link>
              <Link to="/products" className="navigation--item">
                Products
              </Link>
              <Link to="/for-teams" className="navigation--item">
                For Teams
              </Link>
            </div>
            <div className="theme-switch-container">
              <span>Dark</span>
              <Form.Check
                type="switch"
                id="custom-switch"
                className="theme-switch"
                // label="Check this switch"
              />
              <span>light</span>
            </div>
          </div>
          <div className="header-search-div">
            <div className="ps-relative search-frame">
              <input
                className="input input__search h100 search-box"
                autoComplete="off"
                type="text"
                name="search"
                maxLength="35"
                placeholder="Search..."
              />
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
