import { SET_CREDITS, SET_IMAGES } from "../actions/otherAction";

const initialState = {
  credits: {
    cast: [],
    crew: [],
  },
  images: [],
};

const otherReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CREDITS:
      return {
        ...state,
        credits: action.payload,
      };
    case SET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    default:
      return state;
  }
};

export default otherReducer;
