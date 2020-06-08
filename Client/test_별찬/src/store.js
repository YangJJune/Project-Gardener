import { applyMiddleware, createStore } from 'redux';
import { proimseMiddleware, promiseMiddleware } from './middleware';

const defaultState = {
  appName: 'conduit',
  articles: null,
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'HOME_PAGE_LOADED':
      return { ...state, articles: action.payload.articles };
    default:
      return state;
  }
};

const middleware = applyMiddleware(promiseMiddleware);

const store = createStore(reducer, middleware);

export default store;
