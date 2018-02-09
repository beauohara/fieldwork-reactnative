// @flow

import { Metrics, Colors, Fonts } from '../../themes';

export default {
  btnDrawer: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    paddingVertical: Metrics.section / 2,
    paddingHorizontal: Metrics.doubleBaseMargin,
    alignItems: 'center',
  },
  btnDrawerText: {
    fontFamily: Fonts.type.primary,
    color: Colors.menuItemColor,
    fontSize: Fonts.size.large,
    lineHeight: 21,
  },
  btnDrawerIcon: {
    color: Colors.lightDarkGray,
  },
  btnDrawerActive: {
    borderRightWidth: 2,
    borderRightColor: Colors.primary,
    backgroundColor: Colors.background,
  },
  btnDrawerTextActive: {
    color: Colors.primary,
  },
  btnDrawerIconActive: {
    color: Colors.primary,
  },
  titleContainer: {
    // flex: 1,
    // flexDirection: 'row',
  },
  icon: {
    width: 30,
    lineHeight: 21,
    marginRight: Metrics.baseMargin,
  },
  imageContainer: {
    height: 21,
    width: 30,
    marginRight: Metrics.baseMargin,
    justifyContent: 'center',
  },
  image: {
    height: 21,
    resizeMode: 'contain',
  },
};
