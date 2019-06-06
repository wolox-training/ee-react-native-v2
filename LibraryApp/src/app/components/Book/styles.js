import { StyleSheet } from 'react-native';
import { white } from '@constants/colors';
import { FONT_SIZE_LARGE, FONT_SIZE_MEDIUM } from '@constants/dimensions';

const IMAGE_SIZE = 80;
const BOOK_CONTAINER_MARGIN_H = 15;
const BOOK_CONTAINER_HEIGHT = 120;
const BOOK_CONTAINER_PADDING = 20;
const RIGHT_CONTAINER_MARGIN_H = 20;
const BOOK_CONTAINER_BORDER_RADIUS = 10;

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: BOOK_CONTAINER_MARGIN_H,
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
    marginHorizontal: RIGHT_CONTAINER_MARGIN_H
  },
  title: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_LARGE
  },
  author: {
    fontSize: FONT_SIZE_MEDIUM
  }
});
