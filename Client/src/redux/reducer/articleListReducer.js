/******************************************
 * article list와 관계된 reducer를 정의
 * ----------------------------------------
 * XXX
 * ... 연산은 얕은 복사가 이뤄짐
 ******************************************/

import {REQUEST_ARTICLE_LIST, RECEIVE_ARTICLE_LIST} from '../action/articleListAction'
import {defaultState} from '../action/defaultState'

export const articleListReducer = 
  function articleListReducer(state = defaultState, action){
    switch (action.type) {
      case REQUEST_ARTICLE_LIST:
        return { ...state,
          articleList: { ...state.articleList,
            isFetching: true,
          }
        }
      case RECEIVE_ARTICLE_LIST:
        return { ...state,
          articleList: { ...state.articleList,
            isFetching: false,
            articleList: action.payload.articleList,
          }
        }
      default:
        return state
    }
  }
