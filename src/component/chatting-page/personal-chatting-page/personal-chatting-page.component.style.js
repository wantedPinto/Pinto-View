import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  screenContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-end',
  },
  you: {
    position: 'absolute',
    top: 0,
    height: '50%',
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.16)',
  },
  me: {
    position: 'absolute',
    top: '50%',
    height: '50%',
    width: '100%',
    backgroundColor: 'rgba(120, 122, 122, 0.6)',
  },
});
