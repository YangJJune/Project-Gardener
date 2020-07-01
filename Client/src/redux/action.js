import axios from 'axios';

import { REQUEST_HTTP, RESPONSE_HTTP } from '../constants/actionType';

export const requestHttp = (request) => () => ({
  type: REQUEST_HTTP,
  payload: request,
});

export const responseHttp = (response) => () => ({
  type: RESPONSE_HTTP,
  payload: response,
});

const getResponse = async (request, dispatch) => {
  const response = await axios(request);
  return dispatch(responseHttp(response));
};

export const fetchHttp = (request) => (dispatch) => {
  dispatch(requestHttp(request));
  return getResponse(request, dispatch);
};

export const fetchIfNotFetching = (request) => (dispatch, getState) => {
  if (getState().isFetching === false) {
    return dispatch(fetchHttp(request));
  }
};
