import { combineReducers } from "redux";

import themeReducer from "./Theme/reducer";

const rootReducer = combineReducers({
  theme: themeReducer
});

export default rootReducer;
