import { StyleSheet } from 'react-native';
import { blackSqueeze } from '@constants/colors';

const HEADER_HEIGHT = 110;
const BAR_MARGIN_HORIZONTAL = 10;
const BOOKS_CONTAINER_MARGIN_T = 10;

export default StyleSheet.create({
  container: {
    backgroundColor: blackSqueeze,
    flex: 1
  },
  booksContainer: {
    flex: 1,
    marginTop: BOOKS_CONTAINER_MARGIN_T
  },
  headerImage: {
    justifyContent: 'center',
    height: HEADER_HEIGHT
  },
  barContainerStyle: {
    marginHorizontal: BAR_MARGIN_HORIZONTAL
  }
});
