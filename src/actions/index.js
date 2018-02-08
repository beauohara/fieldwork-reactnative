/**
 * Created by Borys
 * @providesModule AppActions
 */

const position = require('./position');
const token = require('./token');
const authentication = require('./authentication');
const venues = require('./venues');
module.exports = {
  ...position,
  ...token,
  ...authentication,
  ...venues,
};
