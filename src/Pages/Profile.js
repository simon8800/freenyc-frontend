import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchProfile } from '../redux/actions/userActions';

import CourseContainer from '../Containers/CourseContainer'

class Profile extends Component {

  componentDidMount(){
    let token = localStorage.getItem('token')
    this.props.fetchProfile(token)
  }

  buildHeader = () => {
    let { user } = this.props
    if (user.firstName) {
      return <h1>Welcome {`${user.firstName[0].toUpperCase() + user.firstName.slice(1)}`}</h1>
    } else {
      return <h1>Welcome Person With No Name... 🤨🤨🤨</h1>
    }
  }
  
  
  render() {
    if (this.props.user === null) {
      return <Redirect to={{pathname:"/"}}/>
    }
    let {user} = this.props
    return (
      <div>
        {this.buildHeader()}
        <h2>Here Are Your Favorited Classes</h2>
        <CourseContainer courses={user.courses}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {user: state.user.currentUser}
}

export default connect(mapStateToProps, {fetchProfile})(Profile);