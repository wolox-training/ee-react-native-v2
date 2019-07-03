import { StyleSheet } from 'react-native';
import { white, gray, lightGray, monzaRed } from '@constants/colors';
import { FONT_SIZE_XLARGE } from '@constants/dimensions';

const BAR_BORDER_RADIUS = 20;
const BAR_HEIGHT = 35;
const BAR_PADDING_HORIZONTAL = 10;
const INPUT_MARGIN_HORIZONTAL = 15;
const SEARCH_ICON_SIZE = 20;
const CLOSE_ICON_SIZE = 10;
const CLOSE_ICON_CONTAINER_SIZE = 20;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: white,
    borderRadius: BAR_BORDER_RADIUS,
    flexDirection: 'row',
    height: BAR_HEIGHT,
    paddingHorizontal: BAR_PADDING_HORIZONTAL
  },
  containerInput: {
    width: '90%'
  },
  input: {
    borderBottomWidth: 0,
    marginHorizontal: INPUT_MARGIN_HORIZONTAL
  },
  inputTextStyle: {
    fontSize: FONT_SIZE_XLARGE,
    fontWeight: 'normal',
    padding: 0
  },
  searchIcon: {
    tintColor: gray,
    height: SEARCH_ICON_SIZE,
    width: SEARCH_ICON_SIZE
  },
  closeIcon: {
    tintColor: white,
    height: CLOSE_ICON_SIZE,
    width: CLOSE_ICON_SIZE
  },
  closeIconRed: {
    backgroundColor: monzaRed
  },
  closeIconContainer: {
    alignItems: 'center',
    backgroundColor: lightGray,
    borderRadius: CLOSE_ICON_CONTAINER_SIZE,
    height: CLOSE_ICON_CONTAINER_SIZE,
    justifyContent: 'center',
    width: CLOSE_ICON_CONTAINER_SIZE
  }
});
