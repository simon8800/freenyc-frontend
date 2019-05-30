import React, { Component } from "react";
import { connect } from "react-redux";

import { editComment, deleteComment } from "../redux/actions/courseActions";

class Comment extends Component {
  state = {
    editing: false,
    newComment: this.props.comment.message
  };

  handleChange = event => {
    this.setState({
      newComment: event.target.value
    });
  };

  handleEdit = () => {
    this.setState({ editing: !this.state.editing });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch(`http://localhost:3000/api/v1/comments/${this.props.comment.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        message: event.target.newComment.value
      })
    })
      .then(res => res.json())
      .then(newComment => {
        this.props.editComment(newComment);
        this.setState({ editing: false });
      });
  };

  handleDelete = () => {
    fetch(`http://localhost:3000/api/v1/comments/${this.props.comment.id}`, {
      method: "DELETE"
    }).then(this.props.deleteComment(this.props.comment));
  };

  render() {
    let { comment } = this.props;
    let { user } = this.props.comment;
    return (
      <React.Fragment>
        <li>
          <h3>
            <strong>{`${user.f_name[0].toUpperCase() +
              user.f_name.slice(1)}`}</strong>{" "}
          </h3>
          {comment.created_at.slice(0, 10)}
          <br />
          {this.state.editing ? (
            <form onSubmit={this.handleSubmit}>
              <textarea
                name="newComment"
                onChange={this.handleChange}
                value={this.state.newComment}
                placeholder={comment.message}
              />
              <input type="submit" value="Save" />
            </form>
          ) : (
            <p>{comment.message}</p>
          )}
          {this.props.user ? (
            this.props.comment.user.email === this.props.user.email ? (
              <div>
                <button onClick={this.handleEdit}>Edit</button>
                <button onClick={this.handleDelete}>Delete</button>
              </div>
            ) : null
          ) : null}
        </li>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.user.currentUser };
};

export default connect(
  mapStateToProps,
  { editComment, deleteComment }
)(Comment);
