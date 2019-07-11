import { StyleSheet } from 'react-native';
import { transparent } from '@constants/colors';

const SEARCH_BUTTON_ICON_SIZE = 20;
const SEARCH_BUTTON_LEFT = 15;

export default StyleSheet.create({
  searchButtonStyle: {
    backgroundColor: transparent,
    borderWidth: 0,
    left: SEARCH_BUTTON_LEFT
  },
  searchButtonIcon: {
    height: SEARCH_BUTTON_ICON_SIZE,
    width: SEARCH_BUTTON_ICON_SIZE
  }
});
