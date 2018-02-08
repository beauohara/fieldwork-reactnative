/**
 * @providesModule APICalls
 * @flow
 */

import apiAuthenticate from './authenticate';
import apiMe from './me';
import apiVenues from './venues';
module.exports = {
  ...apiAuthenticate,
  ...apiMe,
  ...apiVenues,
};
