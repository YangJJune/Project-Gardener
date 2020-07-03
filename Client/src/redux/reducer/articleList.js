/******************************************
 * article list와 관계된 reducer를 정의
 ******************************************/

import {REQUEST_ARTICLE_LIST, RECEIVE_ARTICLE_LIST} from '../action/articleListAction'

const defaultState = {
  isFetching: false,
  articleList: [],
}

export default articleList = 
  function articleListReducer(state = defaultState, action){
    switch (action.type) {
      case REQUEST_ARTICLE_LIST:
        return { ...state, 
          isFetching: true, 
        }
      case RECEIVE_ARTICLE_LIST:
        return { ...state,
          isFetching: false,
          articleList: action.payload.articleList,
        }
      default:
        return state
    }
  }
