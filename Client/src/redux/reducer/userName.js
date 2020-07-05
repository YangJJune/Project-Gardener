/******************************************
 * Git-hub user name과 관계된 reducer를 정의
 ******************************************/

import { REQUEST_USER_NAME, RECEIVE_USER_NAME } from '../action/login';

const defaultState = {
  isFetching: false,
  userName: null,
};

const userName = 
  function userNameReducer(state = defaultState, action){
    switch (action.type) {
      case REQUEST_USER_NAME:
        return { ...state, 
          isFetching: true 
        }
      case RECEIVE_USER_NAME:
        return { ...state, 
          isFetching: false, 
          userName: action.payload.userName 
        }
      default:
        return state;
    }
  }

export default userName;
