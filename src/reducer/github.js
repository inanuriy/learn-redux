import { SET_DATA } from "../actions/github";

const initialState = {};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return action.payload;
    default:
      return state;
  }
};
