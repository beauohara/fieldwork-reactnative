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
    .then(res => {
      return res.data;
    })
    .catch(error => {
      return error.message;
    });
}

export function loadAllCustomers(api_key) {
  return axios
    .get(`${constants.api_base}/customers`, {
      params: {
        api_key
      }
    })
    .then(res => {
      return res.data;
    })
    .catch(error => {
      return error.message;
    });
}