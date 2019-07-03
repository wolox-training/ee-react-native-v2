import React, { Component } from 'react';
import { Text, TouchableOpacity, ViewPropTypes, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CustomButton extends Component {
  render() {
    const { title, icon, whiteTheme, buttonStyles, textStyles, iconStyles, onPress } = this.props;
    const titleToUpper = title && title.toUpperCase();
    console.log(`Estoy en el button ${title || icon}`);
    console.log(onPress);
    debugger;
    return (
      <TouchableOpacity
        style={[styles.button, whiteTheme && styles.whiteThemeButton, buttonStyles]}
        onPress={onPress}
      >
        {title && (
          <Text style={[styles.text, whiteTheme && styles.whiteThemeText, textStyles]}>{titleToUpper}</Text>
        )}
        {icon && <Image source={icon} style={iconStyles} />}
      </TouchableOpacity>
    );
  }
}

CustomButton.propTypes = {
  buttonStyles: ViewPropTypes.style,
  textStyles: Text.propTypes.style,
  title: PropTypes.string,
  whiteTheme: PropTypes.bool,
  onPress: PropTypes.func,
  icon: PropTypes.number,
  iconStyles: ViewPropTypes.style
};

CustomButton.defaultProps = {
  whiteTheme: false
};

export default CustomButton;
