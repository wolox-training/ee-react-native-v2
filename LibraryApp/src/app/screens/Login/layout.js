import React, { Component } from 'react';
import { ImageBackground, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import CustomButton from '@components/CustomButton';
import CustomTextInput from '@components/CustomTextInput';
import backgroundImg from '@assets/bc_inicio.png';
import logo from '@assets/Group.png';

import styles from './styles';
import {
  EMAIL,
  EMAIL_PLACEHOLDER,
  PASSWORD,
  PASSWORD_PLACEHOLDER,
  SUBMIT_TEXT,
  FOOTER_TEXT
} from './constants';

class Login extends Component {
  render() {
    const { onSubmit, onPasswordChange, onEmailChange, emailError, passwordError, authError } = this.props;
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <CustomTextInput
          title={EMAIL}
          placeholder={EMAIL_PLACEHOLDER}
          viewStyles={styles.inputStyle}
          titleStyles={styles.titleStyle}
          inputTextStyles={styles.inputTextStyle}
          onChange={onEmailChange}
        />
        {emailError && <Text style={styles.errorText}>{emailError}</Text>}
        <CustomTextInput
          title={PASSWORD}
          placeholder={PASSWORD_PLACEHOLDER}
          viewStyles={styles.inputStyle}
          titleStyles={styles.titleStyle}
          inputTextStyles={styles.inputTextStyle}
          onChange={onPasswordChange}
          secureTextEntry
        />
        {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
        <CustomButton
          title={SUBMIT_TEXT}
          buttonStyles={styles.buttonStyle}
          textStyles={styles.buttonTextStyle}
          onPress={onSubmit}
        />
        {!!authError && <Text style={styles.errorTextGeneral}>{authError}</Text>}
        <Text style={styles.footerText}>{FOOTER_TEXT}</Text>
      </ImageBackground>
    );
  }
}

Login.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  authError: PropTypes.string
};

export default Login;
