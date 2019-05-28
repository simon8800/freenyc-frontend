import { combineReducers } from 'redux';

import { courseReducer } from './courseReducer';
import { categoryReducer } from './categoryReducer';
import { userReducer } from './userReducer';

export const rootReducer = combineReducers({
  courses: courseReducer,
  categories: categoryReducer,
  user: userReducer
})
