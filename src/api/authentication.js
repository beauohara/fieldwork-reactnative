import axios from 'axios';
import constants from '../config';

function apiAuthenticate(userData) {

  // const userData = {
  //   latitude: 55.676096999999999,
  //   fb_id: '101706877170850',
  //   platform: 'ios',
  //   os_version: '10.3.1',
  //   timezone: 'Europe/Copenhagen',
  //   app: 'Heaps Drinks',
  //   device_token: '40266EF4-1040-40DA-87AD-A73F3DD5317A',
  //   push_token: '',
  //   client_version: '1.6.2',
  //   provider: 'Facebook',
  //   // access_token: 'EAAOroQwIwvABAPey6z49oyWp9izntaoPeVrUrtMRpJE8z1KCpDIxxkyT0CPGv9VCbMnG3WQ2ZA6VAv4dqwc5sthOaFqmvCt3pDMuw1orXSRsx7KJaZBXj8GkRGZANXIZAIzCu20XDWCVJcGI32wWGQktLbqW8NkCqUclAPb3KxMVgT9ZBHZBWItXgdGUfD4QvUv8fWXMZBn5ZCbYf0gXZBh5MOcLiq5zLHL4SZAOVZBeBtAVA8fpUoBZCExqF3MtjYDhLVIZD',
  //   longitude: 12.568337,
  // };
  return axios.post(`${constants.api_base}auth/facebook`, userData);
}

module.exports = {
  apiAuthenticate,
};
