import { UPDATE_THEME } from "./types";

export const updateTheme = (payload) => {
  return {
    type: UPDATE_THEME,
    payload: payload
  };
};
