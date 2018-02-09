/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { View } from 'react-native';
import AppContainer from '../AppContainer';
import { NavItems } from '../../components';
import styles from './styles';

export class CustomerScreen extends Component {
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
        title='Customer'
        navigation={this.props.navigation}
        renderLeftButton={NavItems.hamburgerButton(this.props.navigation)}
      >
        <View style={styles.mainContainer}>

        </View>
      </AppContainer>
    );
  }
}
