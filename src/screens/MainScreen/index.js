/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { View } from 'react-native';
import AppContainer from '../AppContainer';
import { NavItems, NativeComponentTest, GeolocationTest } from '../../components';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

export class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0
    };
  }
  
  componentDidMount() {

  }

  onClickMap = () => {

  };

  render() {
    return (
      <AppContainer
        navigation={this.props.navigation}
        renderLeftButton={NavItems.hamburgerButton(this.props.navigation)}
        renderRightButton={NavItems.mapButton(this.onClickMap)}
      >
        <View style={styles.mainContainer}>
          
        </View>
      </AppContainer>
    );
  }
}
