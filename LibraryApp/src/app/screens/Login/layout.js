import React, { Component } from 'react';
import { ImageBackground, Image, Text, KeyboardAvoidingView } from 'react-native';
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
    const {
      handleSubmit,
      onPasswordChange,
      onEmailChange,
      emailError,
      passwordError,
      authError,
      email,
      password,
      loading
    } = this.props;
    return (
      <KeyboardAvoidingView behavior="height" style={styles.keyboardAvoidingContainer}>
        <ImageBackground source={backgroundImg} style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <CustomTextInput
            title={EMAIL}
            placeholder={EMAIL_PLACEHOLDER}
            viewStyles={styles.inputStyle}
            titleStyles={styles.titleStyle}
            inputTextStyles={styles.inputTextStyle}
            onChange={onEmailChange}
            value={email}
            controlled
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
            value={password}
            controlled
          />
          {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
          <CustomButton
            title={SUBMIT_TEXT}
            buttonStyles={styles.buttonStyle}
            textStyles={styles.buttonTextStyle}
            onPress={handleSubmit}
            loading={loading}
            notFlex
          />
          {!!authError && <Text style={styles.errorTextGeneral}>{authError}</Text>}
          <Text style={styles.footerText}>{FOOTER_TEXT}</Text>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  onEmailChange: PropTypes.func.isRequired,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  authError: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  loading: PropTypes.bool
};

export default Login;
