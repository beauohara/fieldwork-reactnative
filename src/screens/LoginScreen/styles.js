import { StyleSheet } from 'react-native';
import { CommonStyles, Colors, Metrics } from '../../themes';

export default StyleSheet.create({
  ...CommonStyles.screen,
  container: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: Colors.background,
  },

  logoPanel: {
    height: Metrics.screenHeight / 3,
    paddingBottom: 30,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  imgLogo: {
    width: Metrics.screenWidth / 2,
  },

  formPanel: {
    flex: 1,
  },

  inputContainer: {
    backgroundColor: Colors.white,
    borderTopWidth: 1,
    borderTopColor: Colors.lightGray,
  },

  inputfield: {
    height: 42,
    color: Colors.secondary,
    paddingLeft: 20,
    paddingRight: 20,
  },

  btnLogin: {
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
  },

  btnTitle: {
    color: Colors.white,
    fontSize: 13,
  },
});
