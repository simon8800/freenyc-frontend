import React, { Component } from 'react'
import Comment from '../Components/Comment'

export default class CommentContainer extends Component {
  render() {
    return (
      <div>
        <h2>Comments</h2>
        <ul>
          <Comment />
        </ul>
      </div>
    )
  }
}
