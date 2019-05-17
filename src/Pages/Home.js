// React Stuff
import React, { Component } from 'react'

// Semantic UI Stuff
import { Grid } from 'semantic-ui-react'


// Components Stuff
import HomeImages from '../Containers/HomeImages'
import CourseContainer from '../Containers/CourseContainer'

class Home extends Component {
  render() {
    return (
      <div className="homeWrapper">
        <HomeImages />
        <CourseContainer />
      </div>
    )
  }
}

export default Home;