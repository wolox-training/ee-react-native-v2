import React, { Component } from 'react';
import { ImageBackground, Image, Text, KeyboardAvoidingView } from 'react-native';
import PropTypes from 'prop-types';
import { Field, reduxForm } from 'redux-form';
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
  FOOTER_TEXT,
  EMAIL_FIELD,
  PASSWORD_FIELD
} from './constants';

class Login extends Component {
  render() {
    const { handleSubmit, emailError, passwordError, loginError, loading } = this.props;
    return (
      <KeyboardAvoidingView behavior="height" style={styles.keyboardAvoidingContainer}>
        <ImageBackground source={backgroundImg} style={styles.container}>
          <Image source={logo} style={styles.logo} />
          <Field
            component={CustomTextInput}
            name={EMAIL_FIELD}
            title={EMAIL}
            placeholder={EMAIL_PLACEHOLDER}
            viewStyles={styles.inputStyle}
            titleStyles={styles.titleStyle}
            inputTextStyles={styles.inputTextStyle}
          />
          {emailError && <Text style={styles.errorText}>{emailError}</Text>}
          <Field
            component={CustomTextInput}
            name={PASSWORD_FIELD}
            title={PASSWORD}
            placeholder={PASSWORD_PLACEHOLDER}
            viewStyles={styles.inputStyle}
            titleStyles={styles.titleStyle}
            inputTextStyles={styles.inputTextStyle}
            secureTextEntry
          />
          {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}
          <CustomButton
            title={SUBMIT_TEXT}
            buttonStyles={styles.buttonStyle}
            textStyles={styles.buttonTextStyle}
            onPress={handleSubmit}
            loading={loading}
          />
          {!!loginError && <Text style={styles.errorTextGeneral}>{loginError}</Text>}
          <Text style={styles.footerText}>{FOOTER_TEXT}</Text>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

Login.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  emailError: PropTypes.string,
  passwordError: PropTypes.string,
  loginError: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default reduxForm({
  form: 'login'
})(Login);
