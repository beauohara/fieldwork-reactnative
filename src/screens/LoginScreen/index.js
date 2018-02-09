import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { View, Image, Text, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { login } from '../../actions/auth';
import { SpinnerModal } from '../../components';
import styles from './styles';
import { Images, Colors } from '../../themes';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'MainNavigator' })],
});

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'beau@anstarproducts.com',
      password: 'pest321',
      visible: false,
    };
  }

  componentDidUpdate() {}

  componentWillReceiveProps(newProps) {
    if (newProps.auth && newProps.auth.get('isLoggedIn') === true) {
      this.setState({ visible: false });
      this.props.navigation.dispatch(resetAction);
    }
  }

  onPressLogin = () => {
    const { email, password } = this.state;
    this.setState({ visible: true });
    this.props.login(email, password);
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logoPanel}>
          <Image
            source={Images.logoFieldwork}
            style={styles.imgLogo}
            resizeMode="contain"
          />
        </View>
        <View style={styles.formPanel}>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="E-mail"
              placeholderTextColor={Colors.primary}
              style={styles.inputfield}
              onChangeText={text => this.setState({ email: text })}
              value={this.state.email}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={Colors.primary}
              style={styles.inputfield}
              onChangeText={text => this.setState({ password: text })}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity style={styles.btnLogin} onPress={this.onPressLogin}>
            <Text style={styles.btnTitle} textDecorationLine="underline">
              SIGN IN
            </Text>
          </TouchableOpacity>
        </View>
        <SpinnerModal
          isVisible={this.state.visible}
        />
      </View>
    );
  }
}

LoginScreen.propTypes = {
  login: PropTypes.func.isRequired,
  auth: PropTypes.object,
};

const mapStateToProps = state => ({ auth: state.get('auth') });

// const dispatchToProps = (dispatch) => {
//   return {
//     login: (email, password) => dispatch(login(email, password))
//   }
// }

export default connect(mapStateToProps, { login })(LoginScreen);
