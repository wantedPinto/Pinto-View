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
  topIcon: {
    color: '#FDFDFA',
  },
  topButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 25,
  },
  bottomButtons: {
    alignItems: 'flex-end',
  },
  filterBackground: {
    width: 60,
    height: 60,
    backgroundColor: 'rgba(200, 200, 200, 0.7)',
    borderRadius: 60,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  filter: {
    lineHeight: 60,
    color: '#FCFDFA',
    textAlign: 'center',
  },
  cameraAndVoice: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 30,
  },
  cameraOnOff: {
    backgroundColor: '#FFF079',
    borderRadius: 70,
    height: 60,
    width: '80%',
  },
  cameraOnOffText: {
    textAlign: 'center',
    fontSize: 18,
    lineHeight: 60,
  },
  voiceOnOffBackground: {
    width: 60,
    height: 60,
    backgroundColor: '#FCFDFA',
    borderRadius: 60,
    marginLeft: 10,
  },
  voiceOnOff: {
    lineHeight: 60,
    color: '#FF2347',
    textAlign: 'center',
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
