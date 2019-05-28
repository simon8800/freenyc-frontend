export const signUp = (userInfo) => dispatch => {
  const user = {
    f_name: userInfo.firstName.toLowerCase(),
    l_name: userInfo.lastName.toLowerCase(),
    email: userInfo.email.toLowerCase(),
    password: userInfo.password
  }
  fetch(`http://localhost:3000/api/v1/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(user => {
      dispatch({type: "SIGNUP", payload: user})
    })
}

export const login = (userInfo) => dispatch => {
  const user = {user:{
    email: userInfo.email.toLowerCase(),
    password: userInfo.password
  }}
  fetch(`http://localhost:3000/api/v1/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(res => res.json())
    .then(data => {
      if (data.error) {
        alert(data.error)
      } else {
        dispatch({type: "LOGIN", payload: data})
      }
    })
}

export const reauthenticate = (token) => dispatch => {
  fetch(`http://localhost:3000/api/v1/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(user => {
    dispatch({
      type: "REAUTHENTICATE",
      payload: user
    })
  })
}

export const signout = () => {
  return {type:"SIGNOUT"}
}

export const addToFavorite = (course_id, email) => dispatch => {
  fetch('http://localhost:3000/api/v1/favorites', {
    method:"POST",
    headers: {
      "Content-Type":"application/json",
      "Accept":"application/json"},
    body: JSON.stringify({
      email: email,
      course_id: course_id
    })
  })
  .then(res => res.json())
  .then(userInfo => {
    dispatch({type: "ADD_TO_FAVORITE", payload: userInfo})
  })
}

export const removeFavorite = (course_id, email) => dispatch => {
  fetch(`http://localhost:3000/api/v1/favorites`, {
    method: "DELETE",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({course_id: course_id, email: email})
  })
    .then(res => res.json())
    .then(userInfo => {
      dispatch({type: "REMOVE_FAVORITE", payload: userInfo})
    })
}

export const fetchProfile = (token) => dispatch => {
  fetch(`http://localhost:3000/api/v1/profile`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(user => {
    dispatch({
      type: "FETCH_PROFILE",
      payload: user
    })
  })
}


