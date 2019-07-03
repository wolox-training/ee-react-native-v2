import { StyleSheet } from 'react-native';
import { tundoraBlack, black } from '@constants/colors';
import { FONT_SIZE_XLARGE } from '@constants/dimensions';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 100
  },
  searchIcon: {
    tintColor: tundoraBlack,
    height: 70,
    width: 70
  },
  searchTitle: {
    color: black,
    fontSize: FONT_SIZE_XLARGE,
    fontWeight: 'bold',
    paddingTop: 20
  },
  searchDescription: {
    fontSize: FONT_SIZE_XLARGE,
    paddingTop: 15
  }
});
