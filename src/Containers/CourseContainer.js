// React Stuff
import React, { Component } from 'react'
import { connect } from 'react-redux'

// Redux Stuff
import { fetchCourses } from '../redux/actions/courseActions'

// Components Stuff
import CourseCard from '../Components/CourseCard'

// Component Itself
class CourseContainer extends Component {

  componentDidMount(){
    this.props.fetchCourses()
  }
  render() {
    return (
      <div className="courseContainer">
        {this.props.courses.map(course => <CourseCard course={course}/>)}
      </div>
    )
  }
}

// Redux Connect
const mapStateToProps = state => {
  return {courses: state.courses.list}
}


export default connect(mapStateToProps, { fetchCourses })(CourseContainer);