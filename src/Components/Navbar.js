// React Stuff
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Redux Stuff
import { connect } from 'react-redux'

class Navbar extends Component {
  componentDidMount() {

  }
  
  render() {
    return (
      <nav className="navbar">
        <span>Category</span>
        <NavLink exact to='/'><span>Home</span></NavLink>
        <span>FREENYC logo</span>
        <span>Login</span>
        <span>Sign Up</span>
      </nav>
    )
  }
}

const mapStateToProps = state => {
  
}

export default connect(mapStateToProps)(Navbar);
