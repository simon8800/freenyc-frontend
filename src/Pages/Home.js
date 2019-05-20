// React Stuff
import React, { Component } from 'react';

// Redux Stuff
import { connect } from 'react-redux';
import { fetchCourses } from '../redux/actions/courseActions';

// Semantic UI Stuff
// import { Grid } from 'semantic-ui-react';

// Components Stuff
import HomeImages from '../Containers/HomeImages';
import CourseContainer from '../Containers/CourseContainer';

class Home extends Component {
  componentDidMount(){
    this.props.fetchCourses()
  }
  
  render() {
    return (
      <div className="homeWrapper">
        <HomeImages />
        <h1>Trending Classes</h1>
        {this.props.courses.length > 0 ? <CourseContainer courses={this.props.courses}/>:null}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {courses: state.courses.list.slice(0,3)}
}

export default connect(mapStateToProps, { fetchCourses })(Home);