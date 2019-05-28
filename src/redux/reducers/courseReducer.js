const initialState = {
  list: [],
  current: {
    addresses: [{lat:0, lng:0}]
  }
}

export const courseReducer = (state = initialState, {type, payload}) => {
  switch(type) {
    case 'FETCH_COURSES':
      // this cause a problem because it would stack the courses on top of the originals 
      // return {...state, list: [...state.list, ...payload]}
      return {...state, list: [...payload.slice(0,3)]}
    case 'FETCH_COURSE':
      return {...state, current: payload}
    default:
      return state;
  }
}
