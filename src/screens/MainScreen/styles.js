import { StyleSheet } from 'react-native';
import { CommonStyles, Colors } from '../../themes';
export default StyleSheet.create({
  ...CommonStyles.screen,
  listView: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: Colors.bottomTabBackground,
    height: 50,
  },
  tabStyle: {
    height: 50,
  },
  indicator: {
    backgroundColor: Colors.primary,
  },
  label: {
    color: Colors.primary,
    fontSize: 11,
    margin: 3,
  },

  nativeTestContainer: {
    flex: 1,
  },
  reactView: {
    height: 200,
    backgroundColor: 'lightgray',
    padding: 30,
  },
  reactTitle: {

  },
  reactButtonGroup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  reactButton: {
    marginLeft: 5,
    marginRight: 5,
    width: 80,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
  },
  nativeTextValue: {

  },

  nativeView: {
    height: 300,
    backgroundColor: 'white',
  },
});
