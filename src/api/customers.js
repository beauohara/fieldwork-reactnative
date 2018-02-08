import constants from '../config';
import axios from 'axios';

function apiVenues(data) {
  return axios.get(`${constants.api_base}venue-categories`, { params: data });
}

module.exports = {
  apiVenues,
};
