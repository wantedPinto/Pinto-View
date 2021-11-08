import {StyleSheet} from 'react-native';

const COVER_SIZE = 60;

export default StyleSheet.create({
  iconBackground: {
    width: COVER_SIZE,
    height: COVER_SIZE,
    borderRadius: COVER_SIZE,
    marginLeft: 10,
  },
  icon: {
    textAlign: 'center',
    lineHeight: COVER_SIZE,
  },
});
