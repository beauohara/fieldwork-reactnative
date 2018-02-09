import React, { Component } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import { DrawerButton } from '../../components';
import AppContainer from '../AppContainer';
import styles, { Colors } from './styles';
import { Images } from '../../themes';
import menuItems from './menu';
import Icon from 'react-native-vector-icons/FontAwesome';

export class DrawBar extends Component {
  onCloseDrawerBar = () => {
    this.props.navigation.navigate('DrawerClose');
  };

  onDrawerMenu = (type, value) => {
    switch (type) {
      case 'login':
        return this.navigate('LoginScreen');
      case 'main':
        return this.navigate('MainScreen');
      case 'splash':
        return this.navigate('SplashScreen');
      default:
        break;
    }
    return null;
  };

  navigate(screen) {
    const { state } = this.props.navigation;
    const { index, routes } = state;
    if (routes[index].key !== screen) {
      this.props.navigation.navigate(screen);
    } else {
      this.onCloseDrawerBar();
    }
  }

  isCurrentPage(type) {
    const { activeItemKey } = this.props;
    switch (type) {
      case 'login':
        return activeItemKey === 'LoginScreen';
      case 'main':
        return activeItemKey === 'MainScreen';
      case 'splash':
        return activeItemKey === 'SplashScreen';
      default:
        break;
    }
    return false;
  }

  renderDrawerSection(section) {
    return (
      <View style={styles.sectionContainer} key={section.title}>
        {section.map((menuItem, key) => {
          return (
            <DrawerButton
              key={`menuItem.title${key}`}
              text={menuItem.title}
              iconStyle={menuItem.style}
              iconColor={Colors.menuItemColor}
              fontSize={menuItem.fontSize}
              iconName={menuItem.icon}
              image={menuItem.image}
              touchable={menuItem.touchable}
              onPress={() => this.onDrawerMenu(menuItem.type, menuItem.title)}
              isActive={this.isCurrentPage(menuItem.type)}
            />
          );
        })}
      </View>
    );
  }

  renderHeader = () => (
    <View style={styles.logoHeaderContent}>
      <Image style={styles.logoImage} source={Images.logo} resizeMode='contain' />
    </View>
  );

  renderFooter = () => (
    <View style={styles.logoFooterContent}>
      <Image style={styles.logoPaperwork} source={Images.logoPaperwork} resizeMode='contain' />
    </View>
  );

  renderTitle = () => (
    <View style={styles.titleContainer}>
      <Text style={styles.labelBeta}>beta</Text>
    </View>
  );

  renderCloseButton = () => (
    <TouchableOpacity onPress={this.onCloseDrawerBar}>
      <Icon name="close" style={styles.iconClose} onPress={this.onCloseDrawerBar} />
    </TouchableOpacity>
  );

  render() {
    return (
      <AppContainer
        navigation={this.props.navigation}
        renderTitle={this.renderTitle}
        noAvatar
        hideNavBar
      >
        <View style={styles.container}>
          <View style={styles.contentContainer} showsVerticalScrollIndicator={false}>
            {this.renderHeader()}
            {this.renderDrawerSection(menuItems)}
            {this.renderFooter()}
          </View>
        </View>
      </AppContainer>
    );
  }
}
