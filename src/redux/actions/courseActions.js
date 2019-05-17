// initial fetch for courses
export const fetchCourses = () => dispatch => {
  fetch('http://localhost:3000/api/v1/courses')
    .then(res => res.json())
    .then(data => {
      dispatch({
        type: "FETCH_COURSES",
        payload: data
      })
    })
}

export const fetchCourse = (id) => dispatch => {
  fetch(`http://localhost:3000/api/v1/courses/${id}`)
    .then(res => res.json())
    .then(course => {
      dispatch({
        type: "FETCH_COURSE",
        payload: course
      })
    })
}