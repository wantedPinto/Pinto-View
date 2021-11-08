import React from 'react';
import {useEffect, useState} from 'react';

import {SafeAreaView, View} from 'react-native';
import styles from './chatting-main.component.style';

import TopButtons from './top-buttons/top-buttons';
import BottomButtons from './bottom-buttons/bottom-buttons';
import ChattingButtons from './chatting-buttons/chatting-buttons';

const ChattingMain = ({navigation, route}) => {
  const [isCameraOn, setisCameraOn] = useState(false);

  useEffect(() => {
    if (route.params.id) {
      // alert('로그인 성공!');
    } else {
      // alert('자동 로그인 성공!');
    }
  }, []);

  const handleCamera = () => {
    setisCameraOn(!isCameraOn);
  };

  const handleVoice = () => {};

  const handlePersonalChat = () => {};

  const handleGroupChat = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <TopButtons />
        <BottomButtons
          isCameraOn={isCameraOn}
          handleCamera={handleCamera}
          handleVoice={handleVoice}
        />
      </View>
      <ChattingButtons
        isCameraOn={isCameraOn}
        handlePersonalChat={handlePersonalChat}
        handleGroupChat={handleGroupChat}
      />
    </SafeAreaView>
  );
};

export default ChattingMain;
