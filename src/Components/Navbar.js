// React Stuff
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Redux Stuff
import { connect } from 'react-redux';
import { fetchCategories } from '../redux/actions/categoryActions';
import { signout } from '../redux/actions/userActions';

// Semantic UI
import { Menu } from 'semantic-ui-react';

// Components Stuff
import CategoryDropdown from './CategoryDropdown'

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
      <div>
        <Menu className="navbar">
          <CategoryDropdown categories={this.props.categories}/>
          <Menu.Item as={Link} to='/' name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>FREENYC</Menu.Item>
          {this.props.user ? <Menu.Item name='profile' as={Link} to='/profile' active={activeItem === 'profile'} onClick={this.handleItemClick}>Profile</Menu.Item>:null}
          {this.props.user ? <Menu.Item name='signout' as={Link} to='/' active={activeItem === 'signout'} onClick={this.handleSignout}>Sign Out</Menu.Item>:null}
          {!this.props.user ? <Menu.Item name='login' as={Link} to='/login' active={activeItem === 'login'} onClick={this.handleItemClick}>Login</Menu.Item>:null}
          {!this.props.user ? <Menu.Item name='signup' as={Link} to='/signup' active={activeItem === 'signup'} onClick={this.handleItemClick}>Sign Up</Menu.Item>:null}
        </Menu>
      </div>
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