import { combineReducers } from "redux";

import themeReducer from "./Theme/reducer";
import searchResultReducer from "./SearchResult/reducer";

const rootReducer = combineReducers({
  theme: themeReducer,
  searchResult: searchResultReducer
});

export default rootReducer;
