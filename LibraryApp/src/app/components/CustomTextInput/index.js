import React, { Component } from 'react';
import { View, Text, TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CustomTextInput extends Component {
  state = {
    value: this.props.value
  };

  onChange = value => {
    const { onChange, controlled } = this.props;
    if (!controlled) this.setState({ value });
    if (onChange) onChange(value);
  };

  render() {
    const {
      title,
      titleStyles,
      viewStyles,
      inputTextStyles,
      inputContainerStyles,
      placeholder,
      secureTextEntry,
      controlled,
      value
    } = this.props;
    const { value: valueState } = this.state;
    const valueToRender = controlled ? value : valueState;
    return (
      <View style={[styles.container, viewStyles]}>
        {title && <Text style={[styles.title, titleStyles]}>{title}</Text>}
        <View style={[styles.inputContainer, inputContainerStyles]}>
          <TextInput
            value={valueToRender}
            style={[styles.input, inputTextStyles]}
            placeholder={placeholder}
            onChangeText={this.onChange}
            secureTextEntry={secureTextEntry}
          />
        </View>
      </View>
    );
  }
}

CustomTextInput.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  titleStyles: Text.propTypes.style,
  viewStyles: ViewPropTypes.style,
  inputTextStyles: Text.propTypes.style,
  inputContainerStyles: ViewPropTypes.style,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  secureTextEntry: PropTypes.bool,
  controlled: PropTypes.bool
};

CustomTextInput.defaultProps = {
  value: '',
  placeholder: '',
  secureTextEntry: false,
  controlled: false
};

export default CustomTextInput;
