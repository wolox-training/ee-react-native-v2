import { StyleSheet } from 'react-native';
import { pictonBlue, white } from '@constants/colors';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: pictonBlue,
    borderRadius: 50,
    height: 50,
    justifyContent: 'center'
  },
  text: {
    color: white,
    fontWeight: 'bold'
  },
  whiteThemeButton: {
    backgroundColor: white,
    borderColor: pictonBlue,
    borderWidth: 1.5
  },
  whiteThemeText: {
    color: pictonBlue
  }
});
