/*************************************************
 * redux의 store를 정의하는 파일
 *************************************************/

//enable debugging
import {compose} from 'redux'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export store
import { createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import {rootReducer} from './reducer/rootReducer'
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunkMiddleware))
)

export default store