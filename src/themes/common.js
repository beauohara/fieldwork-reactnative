import Colors from './colors';
import Fonts from './fonts';
import Metrics from './metrics';

export default {
  screen: {
    mainContainer: {
      flex: 1,
      backgroundColor: Colors.background,
    },
    buttonContainer: {
      backgroundColor: Colors.white,
      paddingVertical: Metrics.marginVertical,
      paddingHorizontal: Metrics.doubleBaseMargin,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 1,
    },
  },
  form: {
    input: {
      textAlign: 'left',
      fontFamily: Fonts.type.base,
      color: Colors.darkGray,
      marginTop: 0,
      height: 50,
      fontSize: Fonts.size.medium,
    },
    mediumInput: {
      textAlign: 'left',
      fontFamily: Fonts.type.base,
      color: Colors.darkGray,
      marginTop: 0,
      height: 38,
      fontSize: Fonts.size.medium,
    },
    floatingInput: {
      textAlign: 'left',
      fontFamily: Fonts.type.base,
      color: Colors.darkGray,
      marginTop: 0,
      height: 38,
      fontSize: Fonts.size.medium,
    },
  },
  card: {
    cardContainer: {
      flexDirection: 'column',
      alignItems: 'flex-start',
      borderBottomWidth: 1,
      borderBottomColor: Colors.lightGray,
      paddingLeft: 0,
      paddingRight: 0,
    },
    noCardStyle: {
      marginTop: 5,
      marginBottom: 0,
      marginHorizontal: 2,
    },
    cardStyle: {
      marginVertical: 5,
      marginHorizontal: 2,
      borderWidth: 0.5,
      borderRadius: 2,
      borderColor: '#CCC',
      backgroundColor: '#FFF',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      elevation: 3,
    },
  },
};
