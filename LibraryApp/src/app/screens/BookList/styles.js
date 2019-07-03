import { StyleSheet } from 'react-native';
import { isIOS } from '@constants/platform';
import { transparent } from '@constants/colors';

const MARGIN_TOP = isIOS ? 140 : 120;
const SEARCH_BUTTON_ICON_SIZE = 20;
const SEARCH_BUTTON_LEFT = 15;
const SEARCH_BUTTON_TOP = 30;

export default StyleSheet.create({
  container: {
    flex: 1
  },
  booksContainer: {
    marginTop: MARGIN_TOP
  },
  searchButtonStyle: {
    backgroundColor: transparent,
    borderWidth: 0,
    left: SEARCH_BUTTON_LEFT,
    position: 'absolute',
    top: SEARCH_BUTTON_TOP,
    zIndex: 1
  },
  searchButtonIcon: {
    height: SEARCH_BUTTON_ICON_SIZE,
    width: SEARCH_BUTTON_ICON_SIZE
  }
});
