import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCategory } from '../redux/actions/categoryActions'

class CategoryDropdown extends React.Component {
  handleChange = (event, data) => {
    this.props.fetchCategory(data.value)
    this.props.history.push(`/category/${data.value}`)
  }
  
  render() {
    let { categories } = this.props
    let options = categories.map(category => {
      return {key: category.id, text: category.name, value: category.id}
    })

    return(
      <Dropdown onChange={this.handleChange} text='Category' options={options} simple item />
    )
  }
}

export default connect(null, {fetchCategory})(withRouter(CategoryDropdown));