import { StyleSheet } from 'react-native';
import { pictonBlue, white } from '@constants/colors';

const BUTTON_HEIGHT = 50;
const BORDER_WIDTH_MEDIUM = 1.5;

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: pictonBlue,
    borderRadius: BUTTON_HEIGHT,
    height: BUTTON_HEIGHT,
    justifyContent: 'center'
  },
  text: {
    color: white,
    fontWeight: 'bold'
  },
  whiteThemeButton: {
    backgroundColor: white,
    borderColor: pictonBlue,
    borderWidth: BORDER_WIDTH_MEDIUM
  },
  whiteThemeText: {
    color: pictonBlue
  }
});
