import { Metrics, Colors, Fonts } from '../../themes';

export { Colors };
export default {
  container: {
    flex: 1,
    backgroundColor: Colors.menuBack,
  },
  contentContainer: {
    flex: 1,
    backgroundColor: Colors.secondary,
  },
  sectionContainer: {
    // backgroundColor: Colors.background,
    marginTop: 20,
    paddingLeft: 40,
  },
  footer: {
    marginTop: Metrics.largeMargin / 2,
    marginBottom: Metrics.section,
    alignItems: 'center',
    justifyContent: 'center',
  },
  copyright: {
    fontWeight: '600',
    fontFamily: Fonts.type.primary,
    color: Colors.darkBlue,
    fontSize: Fonts.size.small,
  },
  sectionTitle: {
    paddingLeft: Metrics.doubleBaseMargin,
    color: Colors.gray,
    fontSize: Fonts.size.large,
    paddingTop: Metrics.largeMargin / 2,
    paddingBottom: Metrics.smallMargin,
  },
  sepLine: {
    height: 5,
    borderBottomWidth: 1,
    borderBottomColor: Colors.lightGray,
  },
  iconClose: {
    color: Colors.primary,
    textAlign: 'center',
    fontSize: 40,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  imgLogo: {
    height: 30,
    width: 100,
    resizeMode: 'contain',
  },
  labelBeta: {
    top: -5,
    color: Colors.warning,
    fontFamily: Fonts.type.emphasis,
    fontSize: Fonts.size.input,
  },

  logoHeaderContent: {
    height: 64,
    borderBottomWidth: 1,
    borderBottomColor: Colors.borderColor,
    paddingLeft: 20,
    marginTop: 20,
    justifyContent: 'center'
  },
  logoImage: {
    width: 38,
    height: 38,
  },

  logoFooterContent: {
    height: 64,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoPaperwork: {
    height: 12,
  }
};
