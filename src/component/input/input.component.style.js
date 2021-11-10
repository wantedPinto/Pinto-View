import {StyleSheet} from 'react-native';
import commonStyle from '@src/styles/style';
const {colors, sizes} = commonStyle;

export default StyleSheet.create({
  inputContainer: {
    width: '100%',
    alignItems: 'center',
  },
  label: {
    fontSize: sizes.FONT_MEDIUM,
    fontWeight: sizes.MEDUIM_BOLD,
    color: colors.LIGHT_BLACK,
    paddingLeft: 25,
    paddingBottom: 5,
    alignSelf: 'flex-start',
  },
  input: {
    borderStyle: 'solid',
    borderColor: colors.LIGHT_GRAY,
    color: colors.BLACK,
    borderWidth: sizes.BORDER_WIDTH,
    borderRadius: 30,
    padding: 15,
    width: '86%',
    height: 50,
    marginTop: 10,
  },
  inputFocused: {
    borderStyle: 'solid',
    borderColor: colors.BLUE,
    color: colors.BLACK,
    borderWidth: sizes.BORDER_WIDTH,
    borderRadius: 30,
    padding: 15,
    width: '86%',
    height: 50,
    marginVertical: 10,
  },
});
