import { createStore } from "redux";

// const reducer = (state = {}, action) => {
//   switch (action.type) {
//     case "UPDATE_THEME":
//       return {
//         ...state,
//         theme: action.payload
//       };
//     default:
//       return state;
//   }
// };

import rootReducer from "./rootReducer";

const store = createStore(rootReducer, { theme: "dark" });

export default store;
