// React Stuff
import React, { Component } from 'react'
import { Link, NavLink, Redirect, withRouter } from 'react-router-dom'

// Redux Stuff
import { connect } from 'react-redux'
import { fetchCategories } from '../redux/actions/categoryActions'

// Semantic UI
import { Menu, Grid } from 'semantic-ui-react';

// Components Stuff
import CategoryList from '../Containers/CategoryList'

// Actual Component
class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ 
      activeItem: name 
    })
    switch(name) {
      case 'home':
        this.props.history.push('/')
      case 'login':
        this.props.history.push('/login')
      case 'signup':
        this.props.history.push('signup')
      default:
        console.log('Easter Egg :)')
    }
  }
  
  
  componentDidMount() {
    this.props.fetchCategories()
  }
  
  render() {
    const { activeItem } = this.state
    return (
      <Grid.Column>
        <Menu className="navbar">
          <Menu.Item link={true} name='categories' active={activeItem === 'categories'} onClick={this.handleItemClick}>Categories</Menu.Item>
          <Menu.Item link={true} name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>Home</Menu.Item>
          <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick}>Login</Menu.Item>
          <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>Sign Up</Menu.Item>
        </Menu>
      </Grid.Column>
    )
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories.list,
    user: state.user.currentUser
  }
}

export default connect(mapStateToProps, { fetchCategories })(withRouter(Navbar));

/* <span>Category</span>
<CategoryList categories={this.props.categories}/>
<NavLink exact to='/'><span>Home</span></NavLink>
<span><img src={require('../images/freenyclogo/logo_transparent.png')}></img></span>
{!!this.props.user ? <NavLink exact to='/profile'><span>Profile</span></NavLink>:null}
{!this.props.user ? <NavLink exact to='/login'><span>Login</span></NavLink>:null}
{!this.props.user ? <NavLink exact to='/signup'><span>Sign Up</span></NavLink>:null} */