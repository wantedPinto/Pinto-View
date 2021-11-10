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
    backgroundColor: 'tomato',
  },
  me: {
    position: 'absolute',
    top: '50%',
    height: '50%',
    width: '100%',
    backgroundColor: 'salmon',
  },
});
