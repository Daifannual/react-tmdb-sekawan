import { TOGGLE_THEME } from "../actions/themeAction";

const initialState = {
  theme: "dark",
};

const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        theme: state.theme === "dark" ? "light" : "dark",
      };
    default:
      return state;
  }
};

export default themeReducer;