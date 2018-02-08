import React, { Component } from 'react';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { TextField } from 'react-native-material-textfield';
import styles from './styles';
import { Images, Colors } from '../../themes';

export class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  componentDidUpdate() {

  }

  onPressLogin = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoPanel}>
          <Image source={Images.logoFieldwork} style={styles.imgLogo} resizeMode='contain' />
        </View>
        <View style={styles.formPanel}>
          <TextField
            label='E-mail'
            style={styles.inputfield}
            textColor={Colors.white}
            tintColor={Colors.white}
            baseColor={Colors.lightGray}
            onChangeText={text => this.setState({ email: text })}
            value={this.state.email}
          />
          <TextField
            label='password'
            style={styles.inputfield}
            textColor={Colors.white}
            tintColor={Colors.white}
            baseColor={Colors.lightGray}
            onChangeText={text => this.setState({ password: text })}
            value={this.state.password}
          />
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={this.onPressLogin}
          >
            <Text
              style={styles.btnTitle}
              textDecorationLine='underline'
            >
              Log in
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
