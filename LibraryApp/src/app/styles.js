import { StyleSheet } from 'react-native';
import { blackSqueeze, white, transparent } from '@constants/colors';
import { FONT_SIZE_MEDIUM } from '@constants/dimensions';
import { isIOS } from '@constants/platform';

const HEADER_HEIGHT = 110;
const BACK_IMG_SIZE = 20;
const BACK_IMG_LEFT_OFFSET = 10;
const TAB_ICON_SIZE = 30;
const TAB_BAR_HEIGHT = 60;
const TAB_BAR_PADDING_TOP = 10;
const LOGOUT_RIGHT = 10;
const LOGOUT_WIDTH = 70;

export default StyleSheet.create({
  container: {
    backgroundColor: blackSqueeze,
    flex: 1
  },
  headerStyles: {
    height: HEADER_HEIGHT
  },
  headerImageStyles: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  headerTitleStyles: {
    color: white
  },
  headerBackImgStyles: {
    height: BACK_IMG_SIZE,
    width: BACK_IMG_SIZE,
    left: isIOS ? BACK_IMG_LEFT_OFFSET : 0
  },
  tabLabelStyles: {
    fontSize: FONT_SIZE_MEDIUM,
    fontWeight: 'bold'
  },
  tabIcon: {
    height: TAB_ICON_SIZE,
    width: TAB_ICON_SIZE
  },
  tabBarStyles: {
    height: TAB_BAR_HEIGHT,
    paddingTop: TAB_BAR_PADDING_TOP
  },
  logoutButtonStyle: {
    backgroundColor: transparent,
    borderColor: transparent,
    right: LOGOUT_RIGHT,
    width: LOGOUT_WIDTH
  }
});
