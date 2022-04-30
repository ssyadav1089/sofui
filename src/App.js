import React from "react";
import { Provider } from "react-redux";

import store from "./redux/store";

import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from "./Routing";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Routing />
      </Provider>
    );
  }
}

export default App;
