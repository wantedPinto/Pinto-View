import React from 'react';
import {useEffect} from 'react';
import {View} from 'react-native';
import styles from './personal-chatting.component.style';
import Buttons from './buttons/buttons';

const PersonalChatting = ({navigation, route}) => {
  const user = route.params.id;
  // useEffect(() => {
  //   // if (user) {
  //     // alert('로그인 성공!');
  //   // } else {
  //     // alert('자동 로그인 성공!');
  //   }
  // }, []);

  const handleVoice = isVoiceOn => {
    if (isVoiceOn) {
      // 목소리 송신
    } else {
      // 목소리 송신 중지
    }
  };
  const handleCameraSwitch = () => {};
  const handleEndCall = async () => {
    await alert('End call');
    navigation.push('ChattingMain', {user});
  };

  return (
    <View style={styles.screenContainer}>
      <View style={styles.you}></View>
      <View style={styles.me}></View>
      <Buttons
        handleVoice={handleVoice}
        handleCameraSwitch={handleCameraSwitch}
        handleEndCall={handleEndCall}
      />
    </View>
  );
};

export default PersonalChatting;
