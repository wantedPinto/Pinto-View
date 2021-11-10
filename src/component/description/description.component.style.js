import {StyleSheet} from 'react-native';
import commonStyle from '@src/styles/style';
const {colors, sizes} = commonStyle;

export default StyleSheet.create({
  textContainer: {
    width: '100%',
    marginBottom: 46,
    marginLeft: 58,
  },
  title: {
    fontSize: sizes.FONT_LARGE,
    fontWeight: sizes.SEMI_BOLD,
    color: colors.LIGHT_BLACK,
    marginBottom: 10,
  },
  sub: {
    color: colors.GRAY,
    fontSize: sizes.FONT_SMALL,
    fontWeight: sizes.REGULAR_BOLD,
  },
});
