import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';

class TouchableGradient extends Component {
  render() {
    const { onPress, ...props } = this.props;
    return (
      <TouchableOpacity onPress={onPress}>
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} {...props} />
      </TouchableOpacity>
    );
  }
}

TouchableGradient.propTypes = {
  onPress: PropTypes.func
};

export default TouchableGradient;
