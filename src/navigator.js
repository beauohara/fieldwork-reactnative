/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { Dimensions } from 'react-native';
import { DrawerNavigator, StackNavigator } from 'react-navigation';

import {
  LoginScreen,
  MainScreen,
  CustomerScreen,
  DrawBar,
} from './screens';

const { width, height } = Dimensions.get('screen');

export const MainNavigator = DrawerNavigator(
  {
    MainScreen: { screen: MainScreen },
    CustomerScreen: { screen: CustomerScreen }
  },
  {
    initialRouteName: 'CustomerScreen',
    contentComponent: props => <DrawBar {...props} />,
    drawerWidth: Math.min(height, width) * 0.65,
    headerMode: 'none',
    cardStyle: {
      shadowOpacity: 0,
      backgroundColor: 'transparent',
      flex: 1,
    },
  },
);

const AppNavigator = StackNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    MainNavigator: { screen: MainNavigator }
  },
  {
    initialRouteName: 'LoginScreen',
    headerMode: 'none',
    navigationOptions: {
    }
  }
);


export default ({ onNavigationStateChange }) => (
  <AppNavigator
    onNavigationStateChange={onNavigationStateChange}
  />
);
