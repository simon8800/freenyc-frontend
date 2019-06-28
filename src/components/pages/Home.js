import React, { Component } from 'react';
import Navbar from '../layout/Navbar';
import { Grid } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Grid style={{padding: '10px'}}>
        <Navbar/>
      </Grid>
    )
  }
}

export default Home
