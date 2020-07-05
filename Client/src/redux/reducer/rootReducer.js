/***********************
 * combine reducers
************************/

import {combineReducers} from 'redux'
import articleList from './articleList'
import GHToken from './GHToken'
import userName from './userName'

const rootReducer = combineReducers({
  articleList,
  GHToken,
  userName,
})

export default rootReducer