import React from 'react';
import {useEffect} from 'react';
import Icons from 'react-native-vector-icons/dist/Ionicons';
import FilterIcon from 'react-native-vector-icons/dist/FontAwesome';
import {SafeAreaView, Text, View, Pressable} from 'react-native';
import styles from './chatting-main.component.style';
import Icon from '../icon/icon';

const ChattingMain = ({navigation, route}) => {
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
          <Icon name={'gear'} color="#FDFDFA" />
          <Icon name={'user'} color="#FDFDFA" />
        </View>
        <View style={styles.bottomButtons}>
          <Icon
            name={'filter'}
            background={'rgba(200, 200, 200, 0.7)'}
            color={'#FCFDFA'}
          />
          <View style={styles.cameraAndVoice}>
            <Pressable style={styles.cameraOnOff}>
              <Text style={styles.cameraOnOffText}>카메라 켜기</Text>
            </Pressable>
            <Icon
              name="microphone-slash"
              background={'#FCFDFA'}
              color={'#FF2347'}
            />
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

export default ChattingMain;
