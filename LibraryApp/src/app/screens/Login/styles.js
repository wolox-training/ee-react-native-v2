import { StyleSheet } from 'react-native';
import { transparent, white } from '@constants/colors';
import { FONT_SIZE_LARGE } from '@constants/dimensions';
import { isIOS } from '@constants/platform';

const CONTAINER_PADDING_H = 45;
const INPUT_MARGIN_V = isIOS ? 30 : 15;
const TITLE_LEFT = isIOS ? 0 : 3;
const TITLE_BOTTOM = isIOS ? 15 : -15;
const BUTTON_MARGIN_V = 20;
const INPUT_TEXT_BOT = isIOS ? 10 : -4;
const LOGO_HEIGHT = 120;
const LOGO_WIDTH = 160;
const FOOTER_BOTTOM = 10;

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: CONTAINER_PADDING_H
  },
  inputStyle: {
    marginVertical: INPUT_MARGIN_V
  },
  inputTextStyle: {
    bottom: INPUT_TEXT_BOT
  },
  titleStyle: {
    bottom: TITLE_BOTTOM,
    left: TITLE_LEFT
  },
  buttonStyle: {
    backgroundColor: transparent,
    borderColor: white,
    marginVertical: BUTTON_MARGIN_V
  },
  buttonTextStyle: {
    fontSize: FONT_SIZE_LARGE
  },
  logo: {
    alignSelf: 'center',
    height: LOGO_HEIGHT,
    width: LOGO_WIDTH
  },
  footerText: {
    alignSelf: 'center',
    bottom: FOOTER_BOTTOM,
    position: 'absolute'
  }
});
