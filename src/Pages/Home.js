// React Stuff
import React, { Component } from 'react';

// Redux Stuff
import { connect } from 'react-redux';
import { fetchCourses } from '../redux/actions/courseActions';

// Semantic UI Stuff
import { Header } from 'semantic-ui-react';

// Components Stuff
import HomeImages from '../Containers/HomeImages';
import CourseContainer from '../Containers/CourseContainer';

class Home extends Component {
  componentDidMount(){
    this.props.fetchCourses()
  }
  
  render() {
    return (
      <React.Fragment>
          <h1>Explore New Hobbies for Free</h1>
          <HomeImages />
          <Header size='huge'>All Classes</Header>
          {this.props.courses.length > 0 ? <CourseContainer courses={this.props.courses}/>:null}
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {courses: state.courses.list}
}

export default connect(mapStateToProps, { fetchCourses })(Home);