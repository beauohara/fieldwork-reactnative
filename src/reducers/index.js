/**
 * Created by Borys
 *
 */
const { combineReducers } = require('redux');

module.exports = combineReducers({
  position: require('./position'),
  authentication: require('./authentication'),
  venues: require('./venues'),
});
