// React Stuff
import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'

// Redux Stuff
import { connect } from 'react-redux'
import { fetchCategories } from '../redux/actions/categoryActions'

// Components Stuff
import CategoryList from '../Containers/CategoryList'

// Actual Component
class Navbar extends Component {
  componentDidMount() {
    this.props.fetchCategories()
  }
  
  render() {
    return (
      <nav className="navbar">
        <span>Category</span>
        <CategoryList categories={this.props.categories}/>
        <NavLink exact to='/'><span>Home</span></NavLink>
        <span>FREENYC logo</span>
        {!!this.props.user ? <NavLink exact to='/profile'><span>Profile</span></NavLink>:null}
        {!this.props.user ? <NavLink exact to='/login'><span>Login</span></NavLink>:null}
        {!this.props.user ? <NavLink exact to='/signup'><span>Sign Up</span></NavLink>:null}
      </nav>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.list,
    user: state.user.currentUser
  }
}

export default connect(mapStateToProps, { fetchCategories })(Navbar);
