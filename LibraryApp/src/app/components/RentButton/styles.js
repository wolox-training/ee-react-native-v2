import { StyleSheet } from 'react-native';
import { white, laurelGreen } from '@constants/colors';
import { refRatioScale } from '@constants/platform';

const BUTTON_RENT_CIRCLE_WIDTH = refRatioScale(50);
const BUTTON_RENT_ICON_SIZE = 50;

export default StyleSheet.create({
  buttonRentStyle: {
    color: laurelGreen,
    width: BUTTON_RENT_CIRCLE_WIDTH
  },
  buttonRentIconStyle: {
    width: BUTTON_RENT_ICON_SIZE,
    height: BUTTON_RENT_ICON_SIZE,
    tintColor: white
  }
});
