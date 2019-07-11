import { StyleSheet } from 'react-native';
import { ceruleanBlue } from '@constants/colors';

const CONTAINER_HEIGHT = 170;

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: ceruleanBlue,
    borderRadius: 10,
    height: CONTAINER_HEIGHT,
    justifyContent: 'center',
    paddingHorizontal: 10
  },
  image: {
    height: 100,
    width: 65
  },
  title: {},
  author: {}
});
