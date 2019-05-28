// React stuff
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// Redux stuff
import { connect } from 'react-redux';
import { fetchCategory } from '../redux/actions/categoryActions'

import { Grid, Header } from 'semantic-ui-react'
// Component Stuff
import CourseContainer from '../Containers/CourseContainer'

class Category extends Component {
  componentDidMount(){
    this.props.fetchCategory(this.props.match.params.id)
  }
  
  render() {
    if (!parseInt(this.props.match.params.id) || parseInt(this.props.match.params.id) <= 0) {
      return <Redirect to={{pathname:"/404"}}/>
    }
    let { category } = this.props
    return (
      <Grid columns={1} className="categoryContainer">
      <Grid.Column><h1>{category.name}</h1></Grid.Column>
      {category.courses ? <CourseContainer courses={category.courses}/>:null}
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    category: state.categories.current
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategory: (id) => dispatch(fetchCategory(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);