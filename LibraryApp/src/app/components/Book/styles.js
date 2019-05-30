import { StyleSheet } from 'react-native';
import { FONT_SIZE_LARGE, FONT_SIZE_MEDIUM } from '../../../constants/dimensions';
import { white } from '../../../constants/colors';

const IMAGE_SIZE = 80;
const BOOK_CONTAINER_MARGIN_HORIZONTAL = 15;
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
    backgroundColor: white
  },
  coverImage: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE
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
