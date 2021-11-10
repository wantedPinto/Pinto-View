import React from 'react';
import {useEffect} from 'react';
import {View} from 'react-native';
import styles from './personal-chatting-page.component.style';
import Buttons from './buttons/buttons';

const PersonalChattingPage = ({navigation, route}) => {
  const {userData} = route.params;
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
      alert(isVoiceOn);
    }
  };
  const handleCameraSwitch = () => {};
  const handleEndCall = async () => {
    // await alert('End call');
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'ChattingMain',
          params: {userData: userData},
        },
      ],
    });
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

export default PersonalChattingPage;
