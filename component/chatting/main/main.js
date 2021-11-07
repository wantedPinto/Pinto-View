import React from 'react';
import {useEffect} from 'react';
import Icons from 'react-native-vector-icons/dist/Ionicons';
import FilterIcon from 'react-native-vector-icons/dist/FontAwesome';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

const Main = ({navigation, route}) => {
  useEffect(() => {
    if (route.params.id) {
      // alert('로그인 성공!');
    } else {
      // alert('자동 로그인 성공!');
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.topButtons}>
          <Pressable>
            <Icons name="ios-settings-sharp" size={22} style={styles.topIcon} />
          </Pressable>
          <Pressable>
            <Icons name="person" size={22} style={styles.topIcon} />
          </Pressable>
        </View>
        <View style={styles.bottomButtons}>
          <Pressable style={styles.filterBackground}>
            <FilterIcon name="filter" style={styles.filter} size={24} />
          </Pressable>
          <View style={styles.cameraAndVoice}>
            <Pressable style={styles.cameraOnOff}>
              <Text style={styles.cameraOnOffText}>카메라 켜기</Text>
            </Pressable>
            <Pressable style={styles.voiceOnOffBackground}>
              <Icons name="mic-off" style={styles.voiceOnOff} size={24} />
            </Pressable>
          </View>
        </View>
      </View>
      <View style={styles.chattingButtons}>
        <Pressable style={styles.chatting}>
          <Text style={styles.chattingText}>개인채팅</Text>
        </Pressable>
        <Pressable style={styles.chatting}>
          <Text style={styles.chattingText}>그룹채팅</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default Main;
