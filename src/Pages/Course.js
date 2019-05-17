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
    if (!parseInt(this.props.match.params.id) || parseInt(this.props.match.params.id) <= 0) {
      return <Redirect to={{pathname:"/404"}}/>
    }
    return (
      <div>
        <h1>{this.props.course.title}</h1>
        {this.props.course.images ? this.props.course.images.map(image => <img key={image.description} src={image.url}></img>) : null}
        <p>Instructor: {this.props.course.instructor}</p>
        <p>{this.props.course.description}</p>
        <a target="_blank" href={this.props.course.url}>Website</a>
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