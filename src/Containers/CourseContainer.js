// React Stuff
import React, { Component } from "react";

// Components Stuff
import CourseCard from "../Components/CourseCard";

// Component Itself
const CourseContainer = props => {
  return (
    <div className="courseContainer">
      {props.courses.map(course => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
};

// Redux Connect
export default CourseContainer;
