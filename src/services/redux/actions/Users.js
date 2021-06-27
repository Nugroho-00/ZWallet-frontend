import axios from 'axios';
import {API_URL} from '@env';

export const getUser = token => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + token,
    },
  };
  return dispatch => {
    return axios
      .get(`${API_URL}/profile`, config)
      .then(res => {
        // console.log('redux', res);
        dispatch({
          type: 'GET_USER',
          payload: res.data.data[0],
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};

export const addBalance = num => {
  return {
    type: 'ADD_BALANCE',
    payload: num,
  };
};
export const subBalance = num => {
  return {
    type: 'SUB_BALANCE',
    payload: num,
  };
};

export const notification = status => {
  return {
    type: 'SET_NOTIF',
    payload: status,
  };
};
