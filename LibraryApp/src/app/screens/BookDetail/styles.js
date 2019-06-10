import { StyleSheet } from 'react-native';
import { greenDeco, white } from '@constants/colors';

const CONTAINER_HEIGHT = 300;
const CONTAINER_MARGIN = 18;
const CONTAINER_PADDING_V = 20;
const CONTAINER_PADDING_H = 30;
const IMAGE_HEIGHT = CONTAINER_HEIGHT * 0.4;
const IMAGE_WIDTH = IMAGE_HEIGHT * 0.65;
const RIGHT_CONTAINER_PADDING_H = 20;
/* FONT HEIGHTS */
const FONT_HEIGHT_XBIG = 30;
const FONT_HEIGHT_MEDIUM = 16;

export default StyleSheet.create({
  container: {
    height: CONTAINER_HEIGHT,
    backgroundColor: white,
    borderRadius: 10,
    borderWidth: 1,
    margin: CONTAINER_MARGIN,
    paddingHorizontal: CONTAINER_PADDING_H,
    paddingVertical: CONTAINER_PADDING_V
  },
  detailsContainer: {
    flexDirection: 'row',
    height: '50%'
  },
  rightContainer: {
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
  availability: {
    color: greenDeco,
    fontWeight: 'bold'
  },
  commonLabel: {},
  buttonsContainer: {
    height: '50%',
    justifyContent: 'space-between',
    paddingVertical: FONT_HEIGHT_MEDIUM
  },
  buttonsMargin: {
    marginVertical: 5
  },
  buttonTextStyle: {
    fontSize: 16
  }
});
