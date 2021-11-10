import {StyleSheet} from 'react-native';
import commonStyle from '@src/styles/style';
const {colors, sizes} = commonStyle;

export default StyleSheet.create({
  button: {
    borderRadius: 70,
  },
  buttonText: {
    paddingVertical: 18,
    textAlign: 'center',
    fontSize: sizes.FONT_MEDIUM,
  },
});
