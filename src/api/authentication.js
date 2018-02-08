import axios from 'axios';
import constants from '../constants';

export const apiLogin = (userData) => {
  return axios.post(`${constants.api_base}/get_key`, userData);
}
