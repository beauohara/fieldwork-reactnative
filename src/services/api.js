/**
 * Created by borys-duda
 */

import constants from '../constants';
import axios from 'axios';

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
    .then(user => user.json())
    .catch(error => {
      console.log(error);
    });
}
