import axios from 'axios';
import {API_URL} from '@env';

export let userRegister = (url, auth) => {
  return {
    type: 'USER_REGISTER',
    payload: axios.post(url, auth),
  };
};
export function userLogin(data) {
  let config = {
    method: 'POST',
    url: `${API_URL}/auth/login`,
    data: data,
  };
  return dispatch => {
    dispatch({
      type: 'LOGIN_PENDING',
    });
    axios(config)
      .then(res => {
        dispatch({type: 'LOGIN_SUCCESS', payload: res.data});
      })
      .catch(err => {
        console.log({err});
        dispatch({
          type: 'LOGIN_REJECTED',
          payload: err.response,
        });
      });
  };
}
export function userLogout() {
  return dispatch => {
    dispatch({type: 'LOGOUT'});
  };
}
