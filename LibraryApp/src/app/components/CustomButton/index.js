import React, { Component } from 'react';
import { Text, TouchableOpacity, ViewPropTypes, Image, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { pictonBlue } from '@constants/colors';
import { DEFAULT_BUTTON_WIDTH } from '@constants/dimensions';

import styles from './styles';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);
const ANIM_DURATION = 2000;

class CustomButton extends Component {
  state = {
    pressAnim: new Animated.Value(0)
  };

  onPress = () => {
    const { onPress } = this.props;
    Animated.timing(this.state.pressAnim, {
      toValue: 1,
      duration: ANIM_DURATION
    }).start();
    if (onPress) onPress();
  };

  render() {
    const { title, icon, whiteTheme, buttonStyles, textStyles, iconStyles, onPressStyles } = this.props;
    const titleToUpper = title && title.toUpperCase();
    const { pressAnim } = this.state;
    return (
      <AnimatedButton
        style={[
          styles.button,
          whiteTheme && styles.whiteThemeButton,
          buttonStyles,
          onPressStyles?.color && {
            backgroundColor: pressAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [pictonBlue, onPressStyles.color]
            }),
            borderColor: pressAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [pictonBlue, onPressStyles.color]
            })
          },
          onPressStyles?.width && {
            width: pressAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [DEFAULT_BUTTON_WIDTH, onPressStyles.width]
            })
          }
        ]}
        onPress={this.onPress}
      >
        {title && (
          <Text style={[styles.text, whiteTheme && styles.whiteThemeText, textStyles]}>{titleToUpper}</Text>
        )}
        {icon && <Image source={icon} style={iconStyles} />}
      </AnimatedButton>
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
  iconStyles: ViewPropTypes.style,
  onPressStyles: PropTypes.oneOf([ViewPropTypes, Text.propTypes.style])
};

CustomButton.defaultProps = {
  whiteTheme: false
};

export default CustomButton;
