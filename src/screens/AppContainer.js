import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Animated, Image, Text, Easing } from 'react-native';
import { connect } from 'react-redux';
import { NavigationBar } from '../components';
import { Metrics, Colors, Fonts } from '../themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    shadowOffset: {
      width: 1,
      height: 0,
    },
    alignSelf: 'stretch',
    shadowRadius: 1,
    shadowOpacity: 0.4,
    elevation: 1,
  },
  viewContainer: {
    flex: 1,
    alignSelf: 'stretch',
    overflow: 'hidden',
  },
  extraInfoContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  bottomNavbarContainer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: Metrics.screenHeight,
    height: Metrics.navBarHeight,
    backgroundColor: Colors.headerBG,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Metrics.largeMargin / 2,
  },
  logo: {
    height: 42,
    resizeMode: 'contain',
    marginRight: Metrics.baseMargin,
  },
  logout: {
    width: 24,
    resizeMode: 'contain',
  },
  label: {
    flex: 1,
    fontFamily: Fonts.type.bold,
    fontSize: Fonts.size.regular,
    color: Colors.secondary,
  },
  closeContainer: {
    width: 30,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showExtraUserInfo: false,
      top: new Animated.Value(-Metrics.navBarHeight),
    };
  }
  onAvatarClicked = () => {
    if (!this.state.showExtraUserInfo) {
      this.setState({ showExtraUserInfo: true });
      Animated.timing(
        this.state.top, { toValue: 0, easing: Easing.linear, duration: 300 }
      ).start();
    } else {
      this.onCloseBar();
    }
  };
  onCloseBar = () => {
    Animated.timing(
      this.state.top, { toValue: -Metrics.navBarHeight }
    ).start();
    setTimeout(() => {
      this.setState({ showExtraUserInfo: false });
    }, 300);
  };
  onLogout = () => {
    this.onCloseBar(true);
    this.props.navigation.navigate('LoginScreen');
    this.props.signOut();
  };
  renderExtraBar() {
    return (
      <View style={styles.bottomNavbarContainer}>
        <Text style={styles.label}>
          Test
        </Text>
      </View>
    );
  }
  render() {
    const { hideNavBar, children } = this.props;
    return (
      <View style={styles.container}>
        {!hideNavBar &&
        <NavigationBar
          {...this.props}
          onAvatarClicked={this.onAvatarClicked}
        />
        }
        <View style={styles.viewContainer}>
          {children}
        </View>
      </View>
    );
  }
}

