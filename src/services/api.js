/**
 * Created by borys-duda
 */

import axios from 'axios';
import constants from '../constants';

function getAuthHeader() {
  return {
    'Content-Type': 'application/json',
  };
}

export function login(email, password) {
  return axios
    .post(`${constants.api_base}/get_key`, {
      email,
      password,
    })
    .then(user => {
      return user.data;
    })
    .catch(error => {
      return error.message;
    });
}
