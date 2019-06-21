import { StyleSheet } from 'react-native';
import { FONT_SIZE_LARGE } from '@constants/dimensions';

export default StyleSheet.create({
  container: {},
  title: {
    fontSize: FONT_SIZE_LARGE,
    fontWeight: '500'
  },
  inputContainer: {
    borderBottomWidth: 1
  },
  input: {
    fontSize: FONT_SIZE_LARGE,
    fontWeight: 'bold'
  }
});
