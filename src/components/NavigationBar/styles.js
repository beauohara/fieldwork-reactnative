import { Platform } from 'react-native';
import { Colors, Metrics, Fonts } from '../../themes';

export { Colors };
const navButton = {
  backgroundColor: Colors.transparent,
  justifyContent: 'center',
  alignItems: 'center',
  width: 35,
  height: 35,
};

export default {
  container: {
    height: Metrics.navBarHeight,
    backgroundColor: Colors.headerBG,
    // borderBottomColor: Colors.headerBG,
    // borderBottomWidth: 1,
  },
  topSpaceConatiner: {
    height: Metrics.topStatusBarHeight,
    // backgroundColor: Colors.topHeaderBG,
  },
  realNavContainer: {
    // backgroundColor: Colors.headerBG,
    paddingHorizontal: Metrics.baseMargin,
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: 35,
  },
  leftButton: {
    // paddingTop: Metrics.baseMargin,
  },
  title: {
    flex: 1,
    color: Colors.primary,
    fontFamily: Fonts.type.primary,
    fontSize: Fonts.size.h5,
    textAlign: 'center',
  },
  logo: {
    height: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    width: Metrics.navBarHeight - Metrics.doubleBaseMargin,
    resizeMode: 'contain',
  },
  logoTitleImage: {
    height: 30,
    resizeMode: 'contain',
  },
  rightButton: {
    paddingTop: Metrics.baseMargin,
  },
  navText: {
    color: Colors.primary,
    fontSize: 14,
  },
  backButton: {
    ...navButton,
    paddingBottom: 4,
    width: 15,
    marginRight: 20,
  },
  navButtonLeft: {
    ...navButton,
    alignItems: 'flex-start',
  },
  navButtonRight: {
    ...navButton,
    alignItems: 'flex-end',
  },
  icon: {
    alignSelf: 'center',
  },
  avatarContainer: {
    width: 37,
    height: 37,
    backgroundColor: Colors.whiteGray,
    borderWidth: 2,
    borderColor: Colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: 32,
    height: 32,
  },
  emptyAvatar: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
};
