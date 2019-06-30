import React, { useEffect, useContext } from "react";
import CourseContext from "../../context/courses/courseContext";
import { Grid, Card } from "semantic-ui-react";
import Spinner from "../layout/Spinner";
import CourseItem from './CourseItem';

const Courses = () => {
  const { courses, loading, searchCourses } = useContext(CourseContext);

  useEffect(() => {
    searchCourses();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <Grid.Column style={{ margin: "10px 20px" }}>
        <Spinner />
      </Grid.Column>
    );
  }
  return (
    <Grid.Column style={{ margin: "10px 20px" }}>
      <Card.Group stackable itemsPerRow={3}>
        {courses.map(course => <CourseItem key={course.id} course={course} />)}
      </Card.Group>
    </Grid.Column>
  );
};

export default Courses;
