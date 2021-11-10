import {StyleSheet} from 'react-native';

const COVER_SIZE = 44;

export default StyleSheet.create({
  iconBackground: {
    width: COVER_SIZE,
    height: COVER_SIZE,
    borderRadius: COVER_SIZE,
    margin: 3,
  },
  icon: {
    textAlign: 'center',
    lineHeight: COVER_SIZE,
  },
});
