/**
 * @providesModule CUtils
 * @flow
 */

const imageList = {
  iconAll: require('assets/images/icon-all.png'),
  iconDinning: require('assets/images/icon-dinning.png'),
  iconDrinks: require('assets/images/icon-drinks.png'),
  iconClubs: require('assets/images/icon-clubs.png'),
  iconFitness: require('assets/images/icon-dinning.png'),
};

export const getImageFromName = type => imageList[type];
