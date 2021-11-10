import {StyleSheet} from 'react-native';
import commonStyle from '@src/styles/style';
const {colors, sizes} = commonStyle;

export default StyleSheet.create({
  inputListContainer: {
    width: '100%',
  },
  Horizon: {
    width: '100%',
    borderBottomColor: colors.LIGHT_GRAY,
    borderBottomWidth: sizes.BORDER_WIDTH,
    borderBottomStyle: 'solid',
    marginVertical: 26,
  },
  submit: {
    marginTop: 11,
    marginRight: 26,
    alignSelf: 'flex-end',
  },
});
