const initialState = {
  list: [],
  current: {}
}

export const categoryReducer = (state = initialState, {type, payload}) => {
  switch(type){
    case "FETCH_CATEGORIES":
      return {
        ...state, list:[...payload]
      }
    case "FETCH_CATEGORY":
      return {
        ...state, current: payload
      }
    default:
      return state;
  }
}