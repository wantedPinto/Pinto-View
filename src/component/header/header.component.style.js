import {StyleSheet} from 'react-native';
import commonStyle from '@src/styles/style';
const {colors, sizes} = commonStyle;

export default StyleSheet.create({
  title: {
    textAlign: 'left',
    color: colors.BLACK,
    fontSize: sizes.FONT_LARGE,
    fontWeight: sizes.LIGHT_BOLD,
  },
  highlight: {
    marginTop: 3,
    color: colors.BLACK,
    fontSize: sizes.FONT_LARGE,
    fontWeight: sizes.SEMI_BOLD,
  },
});
