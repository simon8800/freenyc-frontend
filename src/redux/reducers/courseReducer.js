const initialState = {
  list: [],
  current: {}
}

export const courseReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case 'FETCH_COURSES':
      return {...state, list: [...payload.slice(0,3)]}
    case 'FETCH_COURSE':
      return {...state, current: payload}
    default:
      return state;
  }
}
