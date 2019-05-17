import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

// Redux Stuff
import { fetchCourse } from '../redux/actions/courseActions'

class Course extends Component {

  componentDidMount(){
    let id = parseInt(this.props.match.params.id)
    this.props.fetchCourse(id)
  }
  
  render() {
    console.log(this.props)
    if (!parseInt(this.props.match.params.id) || parseInt(this.props.match.params.id) <= 0) {
      return <Redirect to={{pathname:"/404"}}/>
    }
    let { course } = this.props
    return (
      <div>
        <h1>{course.title}</h1>
        {course.images ? course.images.map(image => <img src={image.url}></img>) : null}
        <p>Instructor: {course.instructor}</p>
        <p>{course.description}</p>
        <a target="_blank" href={course.url}>Website</a>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {course:state.courses.current}
}

const mapDispatchToProps = dispatch => {
  return {fetchCourse: (id)=>dispatch(fetchCourse(id))}
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)
