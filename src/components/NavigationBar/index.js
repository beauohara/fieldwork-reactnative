import React from 'react';
import { View, Text, Animated, Platform, StyleSheet } from 'react-native';
// import CachedImage from 'react-native-cached-image';

import styles from './styles';

function renderTitle(props) {
  if (props.renderTitle) {
    return props.renderTitle();
  }
  if (props.title) {
    return (
      <Text style={[styles.title, props.titleStyle]}>{props.title}</Text>
    );
  }
  return null;
}

let platformContainerStyles;
if (Platform.OS === 'ios') {
  platformContainerStyles = {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(0, 0, 0, .3)',
  };
} else {
  platformContainerStyles = {
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowRadius: StyleSheet.hairlineWidth,
    shadowOffset: {
      height: StyleSheet.hairlineWidth,
    },
    elevation: 4,
  };
}

export default props => (
  <Animated.View style={[styles.container, platformContainerStyles, props.navigationBarStyle]}>
    <View style={styles.topSpaceConatiner} />
    <Animated.View style={[styles.realNavContainer, props.navigationBarStyle]}>
      <View style={styles.buttonContainer}>
        {props.renderLeftButton && props.renderLeftButton()}
      </View>
      {renderTitle(props)}
      <View style={styles.buttonContainer}>
        {props.renderRightButton && props.renderRightButton()}
      </View>
    </Animated.View>
  </Animated.View>
);
