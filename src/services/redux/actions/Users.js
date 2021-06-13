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
        // console.log(res);
        dispatch({
          type: 'GET_USER',
          payload: res.data,
        });
      })
      .catch(err => {
        console.log(err.response);
      });
  };
};
