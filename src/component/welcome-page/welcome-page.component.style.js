import {StyleSheet} from 'react-native';
import commonStyle from '@src/styles/style';
const {colors, sizes} = commonStyle;

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    width: '100%',
    flex: 2,
    justifyContent: 'center',
    marginLeft: 60,
  },
  imgContainer: {
    width: '80%',
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(225,225,225)',
  },
  img: {
    width: '100%',
    height: '100%',
  },
  buttons: {
    width: '86%',
    marginTop: 10,
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
