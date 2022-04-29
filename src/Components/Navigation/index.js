import { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

import "./styles.css";

export default class Navigation extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bs-md">
        <div className="header-brand-div">
          <Link className="navbar-brand" to="/">
            <Logo className="full-logo" />
          </Link>
          <div className="navigation">
            <Link to="/" className="navigation--item">
              Products
            </Link>
            <Link to="/" className="navigation--item">
              Customers
            </Link>
            <Link to="/" className="navigation--item">
              Use cases
            </Link>
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
    );
  }
}
