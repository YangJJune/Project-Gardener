/***********************
 * combine reducers
************************/

import {combineReducers} from 'redux'
import {articleListReducer} from './articleListReducer'
import {GHTokenReducer} from './GHTokenReducer'
import {userNameReducer} from './userNameReducer'

export const rootReducer = combineReducers({
  articleListReducer,
  GHTokenReducer,
  userNameReducer,
})