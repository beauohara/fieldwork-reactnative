import { Dimensions, Platform } from 'react-native';
import { ifIphoneX } from 'react-native-iphone-x-helper'

const { width, height } = Dimensions.get('window');

// Used via Metrics.baseMargin
const metrics = {
  marginHorizontal: 10,
  marginVertical: 10,
  section: 25,
  baseMargin: 10,
  doubleBaseMargin: 20,
  largeMargin: 30,
  semiLargeMargin: 45,
  doubleLargeMargin: 60,
  smallMargin: 5,
  horizontalLineHeight: 1,
  searchBarHeight: 30,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  ...ifIphoneX({
    navBarHeight: 44 + 44,
    topStatusBarHeight: 44,
  }, {
    navBarHeight: (Platform.OS === 'ios') ? 64 : 56 + 24,
    topStatusBarHeight: (Platform.OS === 'ios') ? 20 : 24,
  }),
  navBarLeftBtnIcon: (Platform.OS === 'ios') ? 30 : 25,
  buttonRadius: 4,
  icons: {
    tiny: 15,
    small: 20,
    medium: 30,
    large: 45,
    xl: 60,
  },
  images: {
    small: 20,
    medium: 40,
    large: 60,
    logo: 300,
  },
  avatarBorderRadius: 15,
  //  New Metrics
  topBarButtonWidth: 74,
  topBarButtonHeight: 88,
  topBarIconSize: 25,
  topBarIconPaddingText: 5,
  topBarSelectBarThickSize: 3,

  venuItemCardMargin: 5,
};

export default metrics;
