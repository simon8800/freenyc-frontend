import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <span>Category</span>
        <span>Home</span>
        <span>FREENYC logo</span>
        <span>Login</span>
        <span>Sign Up</span>
      </nav>
    )
  }
}

export default Navbar;
