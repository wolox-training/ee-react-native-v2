import { StyleSheet } from 'react-native';
import { greenDeco, white, red } from '@constants/colors';

const CONTAINER_HEIGHT = 300;
const CONTAINER_MARGIN = 18;
const CONTAINER_PADDING_V = 20;
const CONTAINER_PADDING_H = 30;
const CONTAINER_BORDER_RADIUS = 10;
const IMAGE_HEIGHT = CONTAINER_HEIGHT * 0.4;
const IMAGE_WIDTH = IMAGE_HEIGHT * 0.65;
const RIGHT_CONTAINER_PADDING_H = 20;
const BUTTONS_CONTAINER_PADDING_V = 16;
const BUTTON_MARGIN_V = 5;
/* FONT HEIGHTS */
const FONT_HEIGHT_XBIG = 28;
const FONT_HEIGHT_MEDIUM = 16;

export default StyleSheet.create({
  container: {
    height: CONTAINER_HEIGHT,
    backgroundColor: white,
    borderRadius: CONTAINER_BORDER_RADIUS,
    margin: CONTAINER_MARGIN,
    paddingHorizontal: CONTAINER_PADDING_H,
    paddingVertical: CONTAINER_PADDING_V
  },
  detailsContainer: {
    flexDirection: 'row',
    height: '50%'
  },
  rightContainer: {
    flex: 1,
    paddingHorizontal: RIGHT_CONTAINER_PADDING_H
  },
  coverImage: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH
  },
  title: {
    fontSize: FONT_HEIGHT_XBIG,
    fontWeight: 'bold'
  },
  available: {
    color: greenDeco,
    fontWeight: 'bold'
  },
  unavailable: {
    color: red,
    fontWeight: 'bold'
  },
  buttonsContainer: {
    height: '50%',
    justifyContent: 'space-between',
    paddingVertical: BUTTONS_CONTAINER_PADDING_V
  },
  buttonsMargin: {
    marginVertical: BUTTON_MARGIN_V
  },
  buttonTextStyle: {
    fontSize: FONT_HEIGHT_MEDIUM
  }
});
