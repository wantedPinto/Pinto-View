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
    marginVertical: 30,
  },
  submit: {
    marginTop: 10,
    marginRight: 26,
    paddingVertical: 18,
    borderRadius: 70,
    backgroundColor: colors.GRAY,
    width: 100,
    alignSelf: 'flex-end',
  },
  submitValid: {
    backgroundColor: colors.YELLOW,
    paddingVertical: 18,
    borderRadius: 70,
    width: '30%',
    alignSelf: 'flex-end',
  },
  submitText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: colors.WHITE,
  },
  submitTextValid: {
    color: colors.BLACK,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
});
