const initialState = {
  currentUser: null,
  token: ""
}

export const userReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case "SIGNUP":
      let signupInfo = {
        firstName: payload.user.f_name,
        lastName: payload.user.l_name,
        email: payload.user.email,
        courses: payload.user.courses
      }
      localStorage.setItem('token', payload.jwt)
      return {
        currentUser: {...signupInfo}, 
        token:payload.jwt, 
      }
    case "LOGIN":
      let loginInfo = {
        firstName: payload.user.f_name,
        lastName: payload.user.l_name,
        email: payload.user.email,
        courses: payload.user.courses
      }
      localStorage.setItem('token', payload.jwt)
      return {
        currentUser: {...loginInfo}, 
        token:payload.jwt, 
      }
    case "REAUTHENTICATE":
      let authenticatedInfo = {
        firstName: payload.user.f_name,
        lastName: payload.user.l_name,
        email: payload.user.email,
        courses: payload.user.courses
      }
      return {...state, currentUser: authenticatedInfo}
    case "FETCH_PROFILE":
        let leProfile = {
          firstName: payload.user.f_name,
          lastName: payload.user.l_name,
          email: payload.user.email,
          courses: payload.user.courses
        }
        return {...state, currentUser: leProfile}
    case "SIGNOUT":
      return initialState
    case "ADD_TO_FAVORITE":
      return {...state, currentUser: {...state.currentUser, ...payload.user}}
    case "REMOVE_FAVORITE":
      return {...state, currentUser: {...state.currentUser, ...payload.user}}
    default:
      return state
  }
}