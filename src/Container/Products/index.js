import { Component } from "react";
import { connect } from "react-redux";

import { updateSearchResult } from "../../redux/SearchResult/actions";

class Products extends Component {
  componentWillUnmount() {
    this.props.updateSearchResult({});
  }

  render() {
    const { searchResult } = this.props;

    return searchResult?.title ? (
      <>
        <h1>{searchResult?.title}</h1>
        <a href={searchResult?.title} rel="noreferer" target="_blank">
          Go to website for full details
        </a>
      </>
    ) : (
      <div> Products</div>
    );
  }
}

function mapStateToProps(state) {
  return { searchResult: state.searchResult };
}

function mapDispatchToProps(dispatch) {
  return {
    updateSearchResult: (item) => {
      return dispatch(updateSearchResult(item));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);
