import {
  SETDET_ERROR,
  SETDET_LOADING,
  SET_COUNTRY,
  SET_NEIGHBORS,
} from "./detalisActions";
const initialState = {
  currentCountry: null,
  status: "idle",
  error: null,
  neighbors: [],
};

export const DetailsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETDET_LOADING:
      return {
        ...state,
        status: "loading",
        error: null,
      };
    case SET_COUNTRY:
      return {
        ...state,
        status: "received",
        currentCountry: payload,
      };
    case SETDET_ERROR:
      return {
        ...state,
        status: "rejected",
        error: payload,
      };
    case SET_NEIGHBORS:
      return {
        ...state,
        neighbors: payload,
      };

    default:
      return state;
  }
};
