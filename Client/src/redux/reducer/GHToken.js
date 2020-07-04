/******************************************
 * Git-hub access token과 관계된 reducer를 정의
 ******************************************/

import { REQUEST_GH_TOKEN, RECEIVE_GH_TOKEN } from '../action/loginAction';

const defaultState = {
  isFetching: false,
  accessToken: null,
};

const GHToken = function GHTokenReducer(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_GH_TOKEN:
      return { ...state, isFetching: true };
    case RECEIVE_GH_TOKEN:
      return {
        ...state,
        isFetching: false,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};

export default GHToken;
