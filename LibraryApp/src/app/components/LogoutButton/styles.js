import { StyleSheet } from 'react-native';
import { transparent } from '@constants/colors';

const LOGOUT_RIGHT = 10;
const LOGOUT_WIDTH = 70;

export default StyleSheet.create({
  logoutButtonStyle: {
    backgroundColor: transparent,
    borderColor: transparent,
    right: LOGOUT_RIGHT,
    width: LOGOUT_WIDTH
  }
});
