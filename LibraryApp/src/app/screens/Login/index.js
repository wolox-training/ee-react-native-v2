import React, { Component } from 'react';
import { ImageBackground, Image, Text } from 'react-native';
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
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <CustomTextInput
          title={EMAIL}
          placeholder={EMAIL_PLACEHOLDER}
          viewStyles={styles.inputStyle}
          titleStyles={styles.titleStyle}
          inputTextStyles={styles.inputTextStyle}
        />
        <CustomTextInput
          title={PASSWORD}
          placeholder={PASSWORD_PLACEHOLDER}
          viewStyles={styles.inputStyle}
          titleStyles={styles.titleStyle}
          inputTextStyles={styles.inputTextStyle}
        />
        <CustomButton
          title={SUBMIT_TEXT}
          buttonStyles={styles.buttonStyle}
          textStyles={styles.buttonTextStyle}
        />
        <Text style={styles.footerText}>{FOOTER_TEXT}</Text>
      </ImageBackground>
    );
  }
}

export default Login;
