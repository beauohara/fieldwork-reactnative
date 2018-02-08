import { StyleSheet } from 'react-native';
import {CommonStyles, Colors, Metrics} from '../../themes';

export default StyleSheet.create({
  ...CommonStyles.screen,
  container: {
    flexDirection: 'column',
    flex: 1,
  },

  logoPanel: {
    backgroundColor: Colors.primary,
    height: Metrics.screenHeight / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLogo: {
    width: Metrics.screenWidth / 2,
  },
  formPanel: {
    flex: 1,
    backgroundColor: Colors.secondary,
    paddingLeft: 20,
    paddingRight: 20,
  },
  inputfield: {

  },
  btnLogin: {
    position: 'absolute',
    right: 20,
    bottom: 50
  },
  btnTitle: {
    color: Colors.white,
    fontSize: 16,
    textDecorationLine: 'underline',
  },


});