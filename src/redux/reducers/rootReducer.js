import { combineReducers } from 'redux'

import { courseReducer, categoryReducer } from './courseReducer'

export const rootReducer = combineReducers({
  courses: courseReducer
})