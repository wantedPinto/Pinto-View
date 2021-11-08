import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  main: {
    flex: 6,
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: 'rgb(205,205,205)',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 20,
  },
  bottomButtons: {
    alignItems: 'flex-end',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  cameraAndVoice: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  chattingButtons: {
    width: '100%',
    marginTop: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  chatting: {
    width: '40%',
    height: 54,
    paddingVertical: 18,
    borderRadius: 30,
    borderColor: '#EDEDED',
    borderWidth: 1.5,
    borderStyle: 'solid',
  },
  chattingText: {
    color: '#A5A5A3',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
});
