export const fetchCategories = () => dispatch => {
  fetch("http://localhost:3000/api/v1/categories")
    .then(res => res.json())
    .then(categories => dispatch({
      type: "FETCH_CATEGORIES",
      payload: categories
    }))
}

export const fetchCategory = (id) => dispatch => {
  fetch(`http://localhost:3000/api/v1/categories/${id}`)
    .then(res => res.json())
    .then(category => dispatch({
      type: "FETCH_CATEGORY",
      payload: category
    }))
}