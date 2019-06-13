import { StyleSheet, Platform } from 'react-native';
import { blackSqueeze, white } from '@constants/colors';

const HEADER_HEIGHT = 110;
const BACK_IMG_SIZE = 20;
const isIOS = Platform.OS === 'ios';
const BACK_IMG_LEFT_OFFSET = 10;

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
  }
});
