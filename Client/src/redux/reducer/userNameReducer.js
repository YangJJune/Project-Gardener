/******************************************
 * Git-hub user name과 관계된 reducer를 정의
 * 
 * redux-state의 userInfo field와 연관
 * ----------------------------------------
 * XXX
 * ... 연산은 얕은 복사가 이뤄짐
 ******************************************/

import {REQUEST_USER_NAME, RECEIVE_USER_NAME } from '../action/userNameAction'
import {defaultState} from '../defaultState'

export const userNameReducer = 
    function userNameReducer(state = defaultState, action){
        switch (action.type) {
            case REQUEST_USER_NAME:
                return { ...state,
                    userInfo : { ...state.userInfo, 
                        isFetching: true
                    }
                }
            case RECEIVE_USER_NAME:
                return { ...state,
                    userInfo: { ...state.userInfo,
                        isFetching: false,
                        userName: action.paylod.userName
                    }
                }
            default:
                return state
        }
    }