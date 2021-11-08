import React from 'react';
import {useEffect} from 'react';
import Icons from 'react-native-vector-icons/dist/Ionicons';
import FilterIcon from 'react-native-vector-icons/dist/FontAwesome';
import {SafeAreaView, Text, View, Pressable} from 'react-native';
import styles from './chatting-main.component.style';

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

export default ChattingMain;
