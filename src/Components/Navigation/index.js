import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";

import { updateTheme } from "../../redux/Theme/actions";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

import "./styles.css";

class Navigation extends Component {
  render() {
    return (
      <div className={this.props.theme}>
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
                onClick={() => this.props.updateTheme(this.props.theme)}
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

function mapStateToProps(state) {
  return { theme: state.theme };
}

function mapDispatchToProps(dispatch) {
  return {
    updateTheme: (theme) => {
      return dispatch(updateTheme(theme));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
