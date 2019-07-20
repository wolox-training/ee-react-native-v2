import React, { Component } from 'react';
import { Text, ViewPropTypes, Image, Animated } from 'react-native';
import PropTypes from 'prop-types';
import { transparent } from '@constants/colors';
import { DEFAULT_BUTTON_WIDTH } from '@constants/dimensions';
import TouchableGradient from '@components/TouchableGradient';
import withLoading from '@components/LoadingHOC';

import styles from './styles';

const AnimatedButton = Animated.createAnimatedComponent(TouchableGradient);
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
    const {
      title,
      icon,
      whiteTheme,
      buttonStyles,
      textStyles,
      iconStyles,
      onPressStyles,
      color,
      colors,
      borderColor
    } = this.props;
    const titleToUpper = title && title.toUpperCase();
    const { pressAnim } = this.state;
    const colorsGradient = colors || [color, color];
    return (
      <AnimatedButton
        style={[
          styles.button,
          whiteTheme && styles.whiteThemeButton,
          buttonStyles,
          onPressStyles?.width && {
            width: pressAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [DEFAULT_BUTTON_WIDTH, onPressStyles.width]
            })
          },
          borderColor && { borderColor }
        ]}
        colors={colorsGradient}
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
  onPressStyles: PropTypes.oneOf([ViewPropTypes, Text.propTypes.style]),
  color: PropTypes.string,
  colors: PropTypes.arrayOf(PropTypes.string),
  borderColor: PropTypes.string
};

CustomButton.defaultProps = {
  whiteTheme: false,
  color: transparent
};

const CustomButtonWithLoading = withLoading(CustomButton);

export default CustomButtonWithLoading;
