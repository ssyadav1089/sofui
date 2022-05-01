import { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import debouce from "lodash.debounce";
import _ from "lodash";

import { updateSearchResult } from "../../redux/SearchResult/actions";
import axios from "../../axios";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      listItems: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.clearReasult = this.clearReasult.bind(this);
  }

  handleChange(event) {
    const value = event.target.value;

    this.setState({ searchTerm: value });
    this.debouncedResults(value);
  }

  debouncedResults = debouce((search) => {
    const pathURL = `/search?order=desc&sort=activity&tagged=${search}&site=stackoverflow`;
    axios.get(pathURL).then((res) =>
      this.setState({
        listItems: res?.data?.items
      })
    );
  }, 300);

  clearReasult(data) {
    this.props.updateSearchResult(data);

    this.setState({
      searchTerm: "",
      listItems: []
    });
  }

  compoenentWillUnmount() {
    this.debouncedResults.cancel();
  }

  render() {
    const { searchTerm, listItems } = this.state;

    return (
      <div className="ps-relative search-frame">
        <input
          className="input input__search h100 search-box"
          autoComplete="off"
          type="text"
          name="search"
          value={searchTerm}
          placeholder="Search..."
          onChange={this.handleChange}
        />
        <ul id="myUL">
          {listItems?.map((item) => (
            <li key={item.question_id} onClick={() => this.clearReasult(item)}>
              <Link to={`/products`}>{_.unescape(item.title)}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    updateSearchResult: (item) => {
      return dispatch(updateSearchResult(item));
    }
  };
}

export default connect(null, mapDispatchToProps)(Search);
