import React, { useReducer } from "react";
import CourseContext from "./courseContext";
import courseReducer from "./courseReducer";
import { SEARCH_COURSES, SEARCH_COURSE, SET_LOADING } from "../types";

const CourseState = props => {
  const initialState = {
    courses: [],
    course: {},
    loading: false
  };

  const [state, dispatch] = useReducer(courseReducer, initialState);

  // Search courses
  const searchCourses = () => {
    setLoading();

    fetch('http://localhost:3000/api/v1/courses')
      .then(res => res.json())
      .then(data => dispatch({type: SEARCH_COURSES, payload: data}))
  };

  // Search course

  // Set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <CourseContext.Provider
      value={{
        courses: state.courses,
        course: state.course,
        loading: state.loading,
        searchCourses
      }}
    >
      {props.children}
    </CourseContext.Provider>
  );
};

export default CourseState;