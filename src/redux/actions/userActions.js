import { Redirect } from 'react-router-dom';

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
    .then(user => {
      dispatch({type: "LOGIN", payload: user})
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