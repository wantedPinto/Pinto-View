import {StyleSheet} from 'react-native';
import commonStyle from '@src/styles/style';
const {colors, sizes} = commonStyle;

export default StyleSheet.create({
  button: {
    borderRadius: 70,
  },
  buttonText: {
    paddingVertical: 16,
    textAlign: 'center',
    fontSize: sizes.FONT_MEDIUM,
  },
});
