/*************************************************
 * redux의 store를 정의하는 파일
 *************************************************/

import { createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from './reducer/rootReducer'

//enable debugging
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export store
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store