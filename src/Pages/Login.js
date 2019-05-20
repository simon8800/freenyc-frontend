// React
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
// Redux
import { connect } from 'react-redux';
import { login } from '../redux/actions/userActions';


class Login extends Component {
  state = {
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
    this.props.login(this.state)
  }

  render() {
    if (!!this.props.user) {
      return <Redirect to={{pathname:"/profile"}}/>
    }
    return (
      <div>
        <h1>Some Friendly Message for Coming Back.</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange}name="email" type="email" placeholder="Email"></input><br/>
          <input onChange={this.handleChange}name="password" type="password" placeholder="Password"></input><br/>
          <input type="submit" value="Login"></input>
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
    login: (userInfo) => dispatch(login(userInfo))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);