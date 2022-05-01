import { UPDATE_THEME } from "./types";

const INITIAL_STATE = "dark";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_THEME:
      return action.payload !== "dark" ? "dark" : "light";
    default:
      return state;
  }
};

export default reducer;
