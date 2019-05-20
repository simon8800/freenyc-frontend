// React
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { signUp } from '../redux/actions/userActions';

class SignUp extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };
  
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.signUp(this.state)
    this.props.history.push('/profile')
  }

  render() {
    if (!!this.props.user) {
      return <Redirect to={{pathname:"/"}}/>
    }
    return (
      <div>
        <h1>Join NYC in Discovering New Hobbies for Free</h1>
        <form onSubmit={this.handleSubmit} autoComplete="off">
          <input onChange={this.handleChange} value={this.state.firstName} name="firstName" type="text" placeholder="First Name"></input>
          <input onChange={this.handleChange} value={this.state.lastName} name="lastName" type="text" placeholder="Last Name"></input><br/>
          <input required onChange={this.handleChange} value={this.state.email} name="email" type="email" placeholder="Email"></input><br/>
          <input required onChange={this.handleChange} value={this.state.password} name="password" type="password" placeholder="New Password"></input><br/>
          <input type="submit" value="Sign Up"></input>
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {user: state.user.currentUser}
}

const mapDispatchToProps = dispatch => {
  return {
    signUp: (userInfo) => dispatch(signUp(userInfo))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);