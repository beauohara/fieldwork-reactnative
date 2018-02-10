import { StyleSheet } from 'react-native';
import { CommonStyles, Colors } from '../../themes';
export default StyleSheet.create({
  ...CommonStyles.screen,
  mainContainer: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  listItem: {
    height: 42,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  itemText: {

  },
  separator: {
    backgroundColor: Colors.white,
    height: 1,
  },
  separatorContent: {
    flex: 1,
    backgroundColor: Colors.separatorColor,
  },

  sectionItem: {
    height: 20,
    backgroundColor: Colors.separatorColor,
    paddingHorizontal: 15,
    justifyContent: 'center',
  },
  sectionText: {

  }
});

