import React, { Component } from 'react';
import { Text, TouchableOpacity, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CustomButton extends Component {
  render() {
    const { title, whiteTheme, buttonStyles, textStyles } = this.props;
    return (
      <TouchableOpacity style={[styles.button, whiteTheme && styles.whiteThemeButton, buttonStyles]}>
        <Text style={[styles.text, whiteTheme && styles.whiteThemeText, textStyles]}>
          {title.toUpperCase()}
        </Text>
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  buttonStyles: ViewPropTypes.style,
  textStyles: Text.propTypes.style,
  title: PropTypes.string.isRequired,
  whiteTheme: PropTypes.bool
};

CustomButton.defaultProps = {
  whiteTheme: false
};

export default CustomButton;
