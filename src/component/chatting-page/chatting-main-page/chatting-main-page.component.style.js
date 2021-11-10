import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  camera: {
    flex: 5,
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'rgb(205,205,205)',
  },
  blur: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
});
