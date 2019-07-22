import React, { Component } from 'react';
import { View, Text, TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CustomTextInput extends Component {
  state = {
    value: this.props.value || (this.props.input && this.props.input.value)
  };

  onChange = value => {
    const { onChange, controlled, input } = this.props;
    if (!controlled) this.setState({ value });
    if (onChange) onChange(value);
    if (input) input.onChange(value);
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
      value,
      input
    } = this.props;
    const { value: valueState } = this.state;
    const valueProp = value || (input && input.value);
    const valueToRender = controlled ? valueProp : valueState;
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
  controlled: PropTypes.bool,
  input: PropTypes.shape({
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  })
};

CustomTextInput.defaultProps = {
  value: '',
  placeholder: '',
  secureTextEntry: false,
  controlled: false
};

export default CustomTextInput;
