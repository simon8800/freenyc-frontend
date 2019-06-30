import React from "react";
import Navbar from "../layout/Navbar";
import Courses from "../courses/Courses";
import Searcher from "../courses/Searcher";
import { Grid } from "semantic-ui-react";

const Home = () => {
  return (
    <Grid textAlign="center">
      <Grid.Row>
        <Navbar />
      </Grid.Row>
      <Grid.Row>
        <Searcher />
      </Grid.Row>
      <Grid.Row>
        <Courses />
      </Grid.Row>
    </Grid>
  );
};

export default Home;
