// React Stuff
import React, { Component } from "react";

// Semantic UI Stuff
import { Grid } from 'semantic-ui-react';

// Components Stuff
import CourseCard from "../Components/CourseCard";

// Component Itself
const CourseContainer = props => {
  return (
    <Grid columns={3}>
      {props.courses.map(course => (
        <Grid.Column key={course.id}><CourseCard course={course} /></Grid.Column>
      ))}
    </Grid>
  );
};

// Redux Connect
export default CourseContainer;
