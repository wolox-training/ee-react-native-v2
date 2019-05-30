import { StyleSheet } from 'react-native';
import { FONT_SIZE_LARGE, FONT_SIZE_MEDIUM } from '../../../constants/dimensions';
import { white } from '../../../constants/colors';

const IMAGE_HEIGHT = 80;
const IMAGE_WIDTH = IMAGE_HEIGHT * 0.7;
const IMAGE_HORIZONTAL_MARGIN = (IMAGE_HEIGHT - IMAGE_WIDTH) / 2;
const BOOK_CONTAINER_MARGIN_HORIZONTAL = 15;
const BOOK_CONTAINER_MARGIN_BOTTOM = 15;
const BOOK_CONTAINER_HEIGHT = 120;
const BOOK_CONTAINER_PADDING = 20;
const RIGHT_CONTAINER_MARGIN_HORIZONTAL = 20;
const BOOK_CONTAINER_BORDER_RADIUS = 10;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: BOOK_CONTAINER_MARGIN_HORIZONTAL,
    height: BOOK_CONTAINER_HEIGHT,
    padding: BOOK_CONTAINER_PADDING,
    borderRadius: BOOK_CONTAINER_BORDER_RADIUS,
    backgroundColor: white,
    marginBottom: BOOK_CONTAINER_MARGIN_BOTTOM
  },
  coverImage: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH,
    marginHorizontal: IMAGE_HORIZONTAL_MARGIN
  },
  rightContainer: {
    justifyContent: 'flex-start',
    marginHorizontal: RIGHT_CONTAINER_MARGIN_HORIZONTAL
  },
  title: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_LARGE
  },
  author: {
    fontSize: FONT_SIZE_MEDIUM
  }
});
