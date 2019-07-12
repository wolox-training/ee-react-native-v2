import { StyleSheet } from 'react-native';
import { ceruleanBlue } from '@constants/colors';

const CONTAINER_HEIGHT = 170;
const CONTAINER_BORDER_RADIUS = 10;
const CONTAINER_PADDING_HORIZONTAL = 10;
const IMAGE_HEIGHT = 100;
const IMAGE_WIDTH = 65;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: ceruleanBlue,
    borderRadius: CONTAINER_BORDER_RADIUS,
    height: CONTAINER_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: CONTAINER_PADDING_HORIZONTAL
  },
  image: {
    height: IMAGE_HEIGHT,
    width: IMAGE_WIDTH
  }
});
