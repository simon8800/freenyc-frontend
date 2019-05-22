// React Stuff
import React, { Component } from 'react';
import { Link, NavLink, Redirect, withRouter } from 'react-router-dom';

// Redux Stuff
import { connect } from 'react-redux';
import { fetchCategories } from '../redux/actions/categoryActions';
import { signout } from '../redux/actions/userActions';

// Semantic UI
import { Menu, Grid } from 'semantic-ui-react';

// Components Stuff
import CategoryList from '../Containers/CategoryList';

// Actual Component
class Navbar extends Component {
  state = {}

  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
  }

  handleSignout = () => {
    localStorage.removeItem('token')
    this.props.signout()
    this.setState({ activeItem: 'home'})
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
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>FREENYC</Menu.Item>
          {localStorage.getItem('token') ? <Menu.Item name='profile' as={Link} to='/profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>Profile</Menu.Item>:null}
          {localStorage.getItem('token') ? <Menu.Item name='signout' as={Link} to='/' active={activeItem === 'signout'} onClick={this.handleSignout}>Sign Out</Menu.Item>:null}
          {!localStorage.getItem('token') ? <Menu.Item name='login' as={Link} to='/login' active={activeItem === 'login'} onClick={this.handleItemClick}>Login</Menu.Item>:null}
          {!localStorage.getItem('token') ? <Menu.Item name='signup' as={Link} to='/signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>Sign Up</Menu.Item>:null}
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

export default connect(mapStateToProps, { fetchCategories, signout })(withRouter(Navbar));

/* <span>Category</span>
<CategoryList categories={this.props.categories}/>
<NavLink exact to='/'><span>Home</span></NavLink>
<span><img src={require('../images/freenyclogo/logo_transparent.png')}></img></span>
{!!this.props.user ? <NavLink exact to='/profile'><span>Profile</span></NavLink>:null}
{!this.props.user ? <NavLink exact to='/login'><span>Login</span></NavLink>:null}
{!this.props.user ? <NavLink exact to='/signup'><span>Sign Up</span></NavLink>:null} */