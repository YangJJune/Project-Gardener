/******************************************
 * Git-hub access token과 관계된 reducer를 정의
 * 
 * redux-state의 userInfo field와 연관
 * ----------------------------------------
 * XXX
 * ... 연산은 얕은 복사가 이뤄짐
 ******************************************/

 import {REQUEST_GH_TOKEN, RECEIVE_GH_TOKEN } from '../action/GHTokenAction'
 import {defaultState} from '../defaultState'

 export const GHTokenReducer = 
    function GHToeknReducer(state = defaultState, action){
        switch (action.type) {
            case REQUEST_GH_TOKEN:
                return { ...state,
                    userInfo : { ...state.userInfo, 
                        isFetching: true
                    }
                }
            case RECEIVE_GH_TOKEN:
                return { ...state,
                    userInfo: { ...state.userInfo,
                        isFetching: false,
                        accessToken: action.payload.accessToken
                    }
                }
            default:
                return state
          }
    }
