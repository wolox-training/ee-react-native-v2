import { StyleSheet } from 'react-native';
import { isIOS } from '@constants/platform';

const MARGIN_TOP = isIOS ? 140 : 120;

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 18,
    marginTop: MARGIN_TOP
  }
});
