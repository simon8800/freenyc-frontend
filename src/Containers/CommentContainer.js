import React, { Component } from 'react'
import { connect } from 'react-redux'
import Comment from '../Components/Comment'

// Redux Baby
import { newComment } from '../redux/actions/courseActions'

class CommentContainer extends Component {
  
  state = {
    comment: ""
  }

  handleChange = (event) => {
    this.setState({ comment: event.target.value}) 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let courseId = this.props.course.id
    let userEmail = this.props.user.email
    fetch(`http://localhost:3000/api/v1/comments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        message: this.state.comment,
        user_email: userEmail,
        course_id: courseId
      })
    })
    .then(res => res.json())
    .then(comment => {
      this.props.newComment(comment)
      this.setState({
        comment: ""
      })
    })
  }
  
  render() {
    return (
      <div>
        {this.props.user ? (
          <div>
          <h2>Tried This Class?</h2>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="comment">Leave a Comment: </label>
            <textarea onChange={this.handleChange} id="comment" type="text" value={this.state.comment} placeholder="Comment here"></textarea>
            <input type="submit" value="Submit"></input>
          </form></div>):null}
        <h2>Comments</h2>
        {this.props.course.comments.length > 0 ? (<ul>
          {this.props.course.comments.map(comment => <Comment comment={comment}/>)}
        </ul>): <h3>Be the First to Leave a Comment!</h3>}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    course: state.courses.current,
    user: state.user.currentUser
  }
}
export default connect(mapStateToProps, { newComment })(CommentContainer)