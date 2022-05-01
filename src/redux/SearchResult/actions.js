import { UPDATE_SEARCH_RESULT } from "./types";

export const updateSearchResult = (payload) => {
  return {
    type: UPDATE_SEARCH_RESULT,
    payload: payload
  };
};
