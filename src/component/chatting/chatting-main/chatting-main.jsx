import React from 'react';
import {useEffect, useState} from 'react';
import {BlurView} from '@react-native-community/blur';
import {SafeAreaView, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import styles from './chatting-main.component.style';

import TopButtons from './top-buttons/top-buttons';
import BottomButtons from './bottom-buttons/bottom-buttons';
import ChattingButtons from './chatting-buttons/chatting-buttons';

const BLUR_AMOUNT = 14;

const ChattingMain = ({navigation, route}) => {
  const [isCameraOn, setisCameraOn] = useState(false);

  useEffect(() => {
    // if (route.params.id) {
    //   // alert('로그인 성공!');
    // } else {
    //   // alert('자동 로그인 성공!');
    // }
  }, []);

  const handleCamera = () => {
    setisCameraOn(!isCameraOn);
  };

  const handlePersonalChat = () => {};

  const handleGroupChat = () => {};

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
        handlePersonalChat={handlePersonalChat}
        handleGroupChat={handleGroupChat}
      />
    </View>
  );
};

export default ChattingMain;
