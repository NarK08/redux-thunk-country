import { SET_SEARCH, SET_REGION } from "./filterAction";

const initialState = {
  search: "",
  region: "",
};
export const filterReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case SET_REGION:
      return {
        ...state,
        region: payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
