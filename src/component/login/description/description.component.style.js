import {StyleSheet} from 'react-native';
import commonStyle from '@src/styles/style';
const {colors} = commonStyle;

export default StyleSheet.create({
  textContainer: {
    width: '100%',
    marginBottom: 46,
    marginLeft: 58,
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: colors.LIGHT_BLACK,
    marginVertical: 10,
  },
  sub: {
    color: colors.GRAY,
  },
});
