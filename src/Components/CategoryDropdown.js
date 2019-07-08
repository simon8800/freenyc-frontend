import React from 'react'
import { Dropdown } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { fetchCategory } from '../redux/actions/categoryActions'

class CategoryDropdown extends React.Component {
  handleClick = (event) => {
    let categoryId = event.target.dataset.categoryId
    this.props.fetchCategory(categoryId)
    this.props.history.push(`/category/${categoryId}`)
  }

  goodTime = () => {
    this.props.history.push(`/goodtime`)
  }  

  render() {
    let { categories } = this.props

    return(
      // <Dropdown onChange={this.handleChange} text='Category' options={options} button simple item />
      <Dropdown text='Category' item >
        <Dropdown.Menu>
          {categories.map(category => <Dropdown.Item onClick={this.handleClick} data-category-id={category.id} key={category.id}>{category.name}</Dropdown.Item>)}
        </Dropdown.Menu>
      </Dropdown>
    )
  }
}

export default connect(null, {fetchCategory})(withRouter(CategoryDropdown));