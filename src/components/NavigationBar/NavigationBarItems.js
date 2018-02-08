import React from 'react';
import { TouchableOpacity, Keyboard, Image, Text } from 'react-native';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { Colors } from '../../themes';

function openDrawer(navigation) {
  Keyboard.dismiss();
  navigation.navigate('DrawerOpen');
}
function goBack(navigation) {
  Keyboard.dismiss();
  navigation.goBack();
}
export default {
  backButton(navigation) {
    return () => (
      <TouchableOpacity onPress={() => goBack(navigation)} style={styles.backButton}>
        <IconFontAwesome name="angle-left" size={35} color={Colors.background} style={styles.backIcon} />
      </TouchableOpacity>
    );
  },

  hamburgerButton(navigation) {
    return () => (
      <TouchableOpacity onPress={() => openDrawer(navigation)} style={styles.navButtonLeft}>
        <IconFontAwesome name="navicon" size={20} color={Colors.primary} />
      </TouchableOpacity>
    );
  },

  logoTitle(imgLogo) {
    return () => (
      <Image source={imgLogo} style={styles.logoTitleImage} />
    );
  },

  mapButton(onPress) {
    return () => (
      <TouchableOpacity onPress={onPress} style={styles.navButtonRight}>
        <Text style={styles.navText}> MAP </Text>
      </TouchableOpacity>
    );
  },

  // mapButton(onPress) {
  //   return () => (
  //     <TouchableOpacity onPress={onPress} style={styles.navButtonRight}>
  //       <IconFontAwesome name="map" size={20} color={Colors.snow} style={styles.icon} />
  //     </TouchableOpacity>
  //   );
  // },

  brandTitle() {
    return (
      <IconFontAwesome name="gear" size={20} color={Colors.background} />
    );
  },
};
