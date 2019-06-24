import React, { Component } from 'react';
import { View, Text, TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

class CustomTextInput extends Component {
  state = {
    value: this.props.value
  };

  onChange = value => {
    const { onChange } = this.props;
    this.setState({ value });
    if (onChange) onChange(value);
  };

  render() {
    const { title, titleStyles, viewStyles, inputTextStyles, inputContainerStyles, placeholder } = this.props;
    const { value } = this.state;
    return (
      <View style={[styles.container, viewStyles]}>
        {title && <Text style={[styles.title, titleStyles]}>{title}</Text>}
        <View style={[styles.inputContainer, inputContainerStyles]}>
          <TextInput
            value={value}
            style={[styles.input, inputTextStyles]}
            placeholder={placeholder}
            onChangeText={this.onChange}
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
  onChange: PropTypes.func
};

CustomTextInput.defaultProps = {
  value: '',
  placeholder: ''
};

export default CustomTextInput;
