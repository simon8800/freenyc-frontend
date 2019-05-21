import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

// Semantic UI Stuff
import { Button, Icon } from 'semantic-ui-react'

// Redux Stuff
import { fetchCourse } from '../redux/actions/courseActions'

class Course extends Component {

  componentDidMount(){
    let id = parseInt(this.props.match.params.id)
    this.props.fetchCourse(id)
  }
  
  checkFavorite = () => {
    let courses = this.props.user.courses
    return courses.includes(this.props.course)
  }

  handleClick = () => {
    debugger
  }

  render() {
    if (!parseInt(this.props.match.params.id) || parseInt(this.props.match.params.id) <= 0) {
      return <Redirect to={{pathname:"/404"}}/>
    }
    let { course } = this.props
    let { user } = this.props
    let favorited = null
    if (user) {
      favorited = this.checkFavorite()
    }
    return (
      <div>
        <h1>{course.title}</h1>
        {favorited ? (<Button onClick={this.handleClick}><Icon name='heart'/>Favorited</Button>):(<Button onClick={this.handleClick}><Icon name="empty heart"/>Favorite</Button>)}
        {course.images ? course.images.map(image => <img alt={image.description} src={image.url}></img>) : null}
        <p>Instructor: {course.instructor}</p>
        <p>{course.description}</p>
        <a target="_blank" rel="noopener noreferrer" href={course.url}>Website</a>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    course:state.courses.current,
    user: state.user.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCourse: (id)=>dispatch(fetchCourse(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)

// fetch('http://localhost:3000/api/v1/favorites', {
// 	method:"POST",
// 	headers: {
// 		"Content-Type":"application/json",
// 		"Accept":"application/json"},
// 	body: JSON.stringify({
// 		user_id: 10,
// 		course_id: 1
// 	})
// })