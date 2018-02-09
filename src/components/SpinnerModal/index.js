import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, ActivityIndicator, View, Modal } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors, Fonts } from '../../themes';

class SpinnerModal extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { type, text } = this.props;
    return (
      <Modal
        visible={this.props.isVisible}
        animationType='fade'
        transparent
        onRequestClose={this.props.onRequestClose}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            {
              type === 'loading' && (<ActivityIndicator size="large" color='white' />)
            }
            {
              type === 'done' && (<Icon name='md-checkmark' size={30} color='white' />)
            }
            <Text style={styles.loadingText}>
              {text}
            </Text>
          </View>
        </View>
      </Modal>
    );
  }
};

SpinnerModal.propTypes = {
  type: PropTypes.oneOf(['loading', 'done']),
  text: PropTypes.string,
  isVisible: PropTypes.bool,
  onRequestClose: PropTypes.func,
};

SpinnerModal.defaultProps = {
  type: 'loading',
  text: 'Logging in...',
  isVisible: false,
  onRequestClose: () => {}
};

export default SpinnerModal;
