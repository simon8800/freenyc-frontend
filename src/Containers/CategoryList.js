import React, { Component } from 'react'
import CategoryListItem from '../Components/CategoryListItem'

class CategoryList extends Component {
  
  render() {
    return (
      <div>
        <ul>
          {this.props.categories.map(category => <CategoryListItem category={category}/>)}
        </ul>
      </div>
    )
  }
}

export default CategoryList;