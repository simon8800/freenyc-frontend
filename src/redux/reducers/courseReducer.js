const initialState = {
  list: [],
  current: {}
}

export const courseReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case 'FETCH_COURSES':
      return {...state, list: [...state.list, ...payload]}
    case 'FETCH_COURSE':
      return {...state, current: payload}
    default:
      return state;
  }
}
