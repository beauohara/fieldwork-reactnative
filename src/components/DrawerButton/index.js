import React from 'react';
import PropTypes from 'prop-types';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { Colors, Fonts } from '../../themes';

const DrawerButton = (props) => {
  const { text, isActive, onPress, iconName, iconSize, iconColor, image, iconStyle, touchable } = props;
  const containerStyle = [styles.btnDrawer, isActive ? styles.btnDrawerActive : null];
  const textStyle = [styles.btnDrawerText, isActive ? styles.btnDrawerTextActive : null];
  let fontSize = Fonts.size.large;
  switch (props.fontSize) {
    case 'small':
      fontSize = Fonts.size.medium - 1;
      break;
    case 'medium':
      fontSize = Fonts.size.medium;
      break;
    default:
      fontSize = Fonts.size.large;
  }
  const Component = touchable ? TouchableOpacity : View;
  const compProps = touchable ? { onPress } : {};
  if (text.length > 0) {
    return (
      <Component style={containerStyle} {...compProps}>
        <View style={styles.titleContainer}>
          {iconName &&
          <Icon
            name={iconName}
            size={iconSize}
            color={isActive ? Colors.primary : iconColor}
            style={[styles.icon, iconStyle]}
          />
          }
          <Text style={[textStyle, { fontSize }]}>{text}</Text>
        </View>
      </Component>
    );
  }
  return <View />;
};
DrawerButton.propTypes = {
  iconName: PropTypes.string,
  image: PropTypes.any,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onPress: PropTypes.func.isRequired,
};

DrawerButton.defaultProps = {
  iconSize: 20,
  iconColor: Colors.snow,
};

export default DrawerButton;
