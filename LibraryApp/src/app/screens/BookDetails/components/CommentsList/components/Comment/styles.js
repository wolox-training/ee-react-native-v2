import { StyleSheet } from 'react-native';

const IMAGE_SIZE = 50;
const COMMENT_CONTAINER_PADDING = 15;
const AVATAR_MARGIN_V = 5;
const TEXT_CONTAINER_PADDING_H = 15;
const FONT_SIZE_BIG = 18;
const FONT_SIZE_MEDIUM = 16;

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: COMMENT_CONTAINER_PADDING
  },
  avatar: {
    borderRadius: IMAGE_SIZE,
    height: IMAGE_SIZE,
    marginVertical: AVATAR_MARGIN_V,
    width: IMAGE_SIZE
  },
  textContainer: {
    paddingHorizontal: TEXT_CONTAINER_PADDING_H,
    flex: 1
  },
  username: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE_BIG
  },
  comment: {
    fontSize: FONT_SIZE_MEDIUM
  }
});
