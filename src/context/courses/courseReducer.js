import { SEARCH_COURSES, SEARCH_COURSE, SET_LOADING } from "../types";

export default (state, action) => {
  switch (action.type) {
    case SEARCH_COURSES:
      return { ...state, courses: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
