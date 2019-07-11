import { StyleSheet } from 'react-native';
import { isIOS } from '@constants/platform';
import { white } from '@constants/colors';
import { FONT_SIZE_MEDIUM, FONT_SIZE_XLARGE } from '@constants/dimensions';

const MARGIN_TOP = isIOS ? 140 : 120;
const CONTAINER_PADDING_V = 20;
const CONTAINER_BORDER_RADIUS = 10;
const MARGIN_HORIZONTAL = 15;
const IMAGE_CONTAINER_HEIGHT = 90;
const IMAGE_CONTAINER_WIDTH = 130;
const BORDER_RADIUS = 10;
const TEXT_MARGIN_V = 2;
const RIGHT_INFO_CONT_MARGIN_H = 20;
const RIGHT_INFO_CONT_MARGIN_TOP = 10;
const RECENT_BOOKS_MARGIN_TOP = 10;

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: MARGIN_TOP
  },
  infoContainer: {
    alignItems: 'center',
    height: '50%',
    backgroundColor: white,
    borderRadius: CONTAINER_BORDER_RADIUS,
    paddingVertical: CONTAINER_PADDING_V
  },
  imageContainer: {
    alignItems: 'center',
    borderRadius: BORDER_RADIUS,
    justifyContent: 'center',
    height: IMAGE_CONTAINER_HEIGHT,
    width: IMAGE_CONTAINER_WIDTH
  },
  profileImage: {
    height: '100%',
    width: '100%',
    borderRadius: BORDER_RADIUS
  },
  rightInfoContainer: {
    alignItems: 'center',
    marginHorizontal: RIGHT_INFO_CONT_MARGIN_H,
    marginTop: RIGHT_INFO_CONT_MARGIN_TOP
  },
  textStyle: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_MEDIUM,
    marginVertical: TEXT_MARGIN_V
  },
  titleStyle: {
    fontSize: FONT_SIZE_XLARGE
  },
  emailStyle: {
    fontStyle: 'italic'
  },
  recentBooksContainer: {
    alignItems: 'center',
    height: '45%',
    backgroundColor: white,
    borderRadius: CONTAINER_BORDER_RADIUS,
    marginTop: RECENT_BOOKS_MARGIN_TOP,
    marginHorizontal: MARGIN_HORIZONTAL
  },
  carouselTitle: {
    fontSize: FONT_SIZE_XLARGE,
    fontWeight: 'bold'
  }
});
