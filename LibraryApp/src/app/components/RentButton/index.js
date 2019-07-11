import React, { Component } from 'react';
import CustomButton from '@components/CustomButton';
import checkIcon from '@assets/icon_check_green.png';

import styles from './styles';

export const RENT = 'Rent';

class RentButton extends Component {
  state = {
    isPressed: false
  };

  handlePress = () => {
    this.setState({ isPressed: true });
  };

  render() {
    const { isPressed } = this.state;
    return (
      <CustomButton
        title={!isPressed && RENT}
        onPressStyles={styles.buttonRentStyle}
        icon={isPressed && checkIcon}
        iconStyles={isPressed && styles.buttonRentIconStyle}
        onPress={this.handlePress}
        {...this.props}
      />
    );
  }
}

export default RentButton;
