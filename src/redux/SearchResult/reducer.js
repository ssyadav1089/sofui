import { UPDATE_SEARCH_RESULT } from "./types";

const INITIAL_STATE = {};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_SEARCH_RESULT:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
