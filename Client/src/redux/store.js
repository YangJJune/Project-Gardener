/*************************************************
 * redux의 store를 정의하는 파일
 *************************************************/

import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import articleList from './reducer/articleList'
import GHToken from './reducer/GHToken'
import userName from './reducer/userName'

//enable debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export store
const store = createStore(
  combineReducers({articleList, GHToken, userName}),
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store