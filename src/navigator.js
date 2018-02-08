/* eslint-disable jsx-a11y/href-no-hash */
import React from 'react';
import { DrawerNavigator } from 'react-navigation';

import {
  LoginScreen,
  MainScreen,
  DrawBar,
} from './screens';

export const AppNavigator = DrawerNavigator(
  {
    LoginScreen: { screen: LoginScreen },
    MainScreen: { screen: MainScreen },
  },
  {
    initialRouteName: 'LoginScreen',
    contentComponent: props => <DrawBar {...props} />,
    headerMode: 'none',
    cardStyle: {
      shadowOpacity: 0,
      backgroundColor: 'transparent',
      flex: 1,
    },
  },
);

export default ({ onNavigationStateChange }) => (
  <AppNavigator
    onNavigationStateChange={onNavigationStateChange}
  />
);
