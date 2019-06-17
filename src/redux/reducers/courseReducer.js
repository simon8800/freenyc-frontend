const initialState = {
  list: [],
  current: {
    addresses: [{lat:0, lng:0}],
    comments: [],
  }
}

export const courseReducer = (state = initialState, {type, payload}) => {
  let newComments;
  switch(type) {
    case 'FETCH_COURSES':
      // this cause a problem because it would stack the courses on top of the originals 
      // return {...state, list: [...state.list, ...payload]}
      return {...state, list: [...payload.slice(0,3)]}
    case 'FETCH_COURSE':
      return {...state, current: payload}
    case 'NEW_COMMENT':
      return {...state, current: {...state.current, comments: [...state.current.comments, payload]}}
    case 'EDIT_COMMENT':
      newComments = state.current.comments.map(comment => {
        if (comment.id === payload.id) {
          return payload
        } else {
          return comment
        }
      })
      return {...state, current: {...state.current, comments: newComments }};
    case 'DELETE_COMMENT':
      newComments = state.current.comments.filter(comment => comment.id !== payload.id)
      return {...state, current: {...state.current, comments: newComments }};
    default:
      return state;
  }
}
