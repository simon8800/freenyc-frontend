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
  
  
  render() {
    if (this.props.user === null) {
      return <Redirect to={{pathname:"/"}}/>
    }
    let {user} = this.props
    return (
      <div>
        <h1>Welcome {`${user.firstName[0].toUpperCase() + user.firstName.slice(1)}`}</h1>
        <h2>Favorited Classes</h2>
        <CourseContainer courses={user.courses}/>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {user: state.user.currentUser}
}

export default connect(mapStateToProps, {fetchProfile})(Profile);