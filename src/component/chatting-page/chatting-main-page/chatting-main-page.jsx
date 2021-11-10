import React from 'react';
import {useEffect, useState} from 'react';
import {BlurView} from '@react-native-community/blur';
import {SafeAreaView, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './chatting-main-page.component.style';

import TopButtons from './top-buttons/top-buttons';
import BottomButtons from './bottom-buttons/bottom-buttons';
import ChattingButtons from './chatting-buttons/chatting-buttons';

const BLUR_AMOUNT = 14;

const ChattingMainPage = ({navigation, route}) => {
  const [isCameraOn, setisCameraOn] = useState(false);
  const {userData} = route.params;

  // useEffect(() => {
  //   if (user) {
  //     // alert('로그인 성공!');
  //   } else {
  //     // alert('자동 로그인 성공!');
  //   }
  // }, []);

  const handleCamera = () => {
    setisCameraOn(!isCameraOn);
  };

  const handlePersonalChattting = () => {
    isCameraOn &&
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'PersonalChatting',
            params: {userData: userData},
          },
        ],
      });
  };

  const handleGroupChattting = () => {};

  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.camera}
        type={RNCamera.Constants.Type.front}
        captureAudio={true}>
        {!isCameraOn && (
          <BlurView
            blurType="dark"
            blurAmount={BLUR_AMOUNT}
            style={styles.blur}
          />
        )}
        <TopButtons />
        <BottomButtons isCameraOn={isCameraOn} handleCamera={handleCamera} />
      </RNCamera>

      <ChattingButtons
        isCameraOn={isCameraOn}
        handlePersonalChattting={handlePersonalChattting}
        handleGroupChattting={handleGroupChattting}
      />
    </View>
  );
};

export default ChattingMainPage;
