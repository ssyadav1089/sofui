import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Form from "react-bootstrap/Form";
import debouce from "lodash.debounce";

import { updateTheme } from "../../redux/Theme/actions";
import { ReactComponent as Logo } from "../../assets/Logo.svg";

import "./styles.css";

const fruits = [
  "apple",
  "orange",
  "banana",
  "pear",
  "grapefruit",
  "peach",
  "apricot",
  "nectarine",
  "plum",
  "mango",
  "strawberry",
  "blueberry",
  "kiwi",
  "passionfruit",
  "raspberry",
  "watermelon"
];

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      listToDisplay: fruits
    };
  }

  handleChange = (e) => {
    console.log("event handleChange", e.target.value);

    this.setState({ searchTerm: e.target.value });
  };

  renderFruitList = () => {
    return this.state.listToDisplay.map((fruit, i) => <p key={i}>{fruit}</p>);
  };

  debouncedResults = () => {
    console.log("event debouncedResults");

    return debouce(this.handleChange, 1000);
  };

  componentDidUpdate(preProp, preState) {
    if (this.state.searchTerm !== "") {
      this.setState({
        listToDisplay: fruits.filter((fruit) => {
          return fruit.includes(this.state.searchTerm);
        })
      });
    }
  }

  compoenentWillUnmount() {
    this.debouncedResults.cancel();
  }

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
              <Form.Check
                type="switch"
                id="custom-switch"
                className="theme-switch"
                onClick={() => this.props.updateTheme(this.props.theme)}
              />
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
                onChange={this.debouncedResults}
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
