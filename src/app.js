/**
 * @providesModule App
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
} from 'react-native';

import Navigator from './navigator';
import { Colors } from './themes';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialRoute: 'LoginScreen',
    };
    console.disableYellowBox = true;
  }

  componentWillMount() {
    
  }

  componentDidMount() {
    // AppState.addEventListener('change', this.handleAppStateChange);
  }

  componentWillUnmount() {
    // AppState.removeEventListener('change', this.handleAppStateChange);
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor={Colors.headerBG}
        />
        <Navigator role="none" initialRoute={this.state.initialRoute} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
