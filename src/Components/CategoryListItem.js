import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from 'react-redux'
import { fetchCategory } from '../redux/actions/categoryActions'


function CategoryListItem({ history, category, fetchCategory }) {
  return (
    <li onClick={() => fetchCategory(category.id)} className="nav-links">
      <NavLink to={`/category/${category.id}`}>{category.name}</NavLink>
    </li>
  );
}

export default connect(null, { fetchCategory })(CategoryListItem);
