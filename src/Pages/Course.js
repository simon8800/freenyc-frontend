import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'

// Semantic UI Stuff
import { Button, Icon } from 'semantic-ui-react'

// Redux Stuff
import { fetchCourse } from '../redux/actions/courseActions'
import { addToFavorite, removeFavorite} from '../redux/actions/userActions'

class Course extends Component {

  componentDidMount(){
    let id = parseInt(this.props.match.params.id)
    this.props.fetchCourse(id)
    
  }
  
  handleClick = (event) => {
    let course_id = this.props.course.id
    let email = this.props.user.email
    if (event.target.innerText === 'Favorite') {
      this.props.addToFavorite(course_id, email)
    } else if (event.target.innerText === 'Favorited') {
      this.props.removeFavorite(course_id, email)
    }
  }

  buttonCreator = () => {
    let checker;
    this.props.user.courses.forEach(course => {
      if (course.id === this.props.course.id) {
        checker = true
      }
    })
    if (checker){
      return (<Button onClick={this.handleClick}><Icon name='heart'/>Favorited</Button>)
    } else {
      return (<Button onClick={this.handleClick}><Icon name="empty heart"/>Favorite</Button>)
    }
  }
  
  render() {
    if (!parseInt(this.props.match.params.id) || parseInt(this.props.match.params.id) <= 0) {
      return <Redirect to={{pathname:"/404"}}/>
    }
    let { user } = this.props
    let { course } = this.props
    return (
      <div>
        <h1>{course.title}</h1>
        {user ? this.buttonCreator():null}
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
    fetchCourse: (id)=>dispatch(fetchCourse(id)),
    addToFavorite: (course_id, email)=>dispatch(addToFavorite(course_id, email)),
    removeFavorite: (course_id, email)=>dispatch(removeFavorite(course_id, email))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Course)

