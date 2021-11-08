import React from 'react';
import {useEffect} from 'react';

import {SafeAreaView, View} from 'react-native';
import styles from './chatting-main.component.style';
import Icon from '@component/chatting/icon/icon';
import ButtonWithText from '@component/button-with-text/button-with-text';
import commonStyle from '@src/styles/style';
const {colors} = commonStyle;

const ChattingMain = ({navigation, route}) => {
  useEffect(() => {
    if (route.params.id) {
      // alert('로그인 성공!');
    } else {
      // alert('자동 로그인 성공!');
    }
  }, []);

  const handleCamera = () => {};

  const handleVoice = () => {};

  const handlePersonalChat = () => {};

  const handleGroupChat = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <View style={styles.topButtons}>
          <Icon name={'gear'} color={colors.WHITE} />
          <Icon name={'user'} color={colors.WHITE} />
        </View>
        <View style={styles.bottomButtons}>
          <Icon name={'filter'} background={colors.GRAY} color={colors.WHITE} />
          <View style={styles.cameraAndVoice}>
            <ButtonWithText
              onPress={handleCamera}
              title={'카메라 켜기'}
              width={'80%'}
              background={colors.YELLOW}
              color={colors.BLACK}
            />
            <Icon
              onPress={handleVoice}
              name="microphone-slash"
              background={colors.WHITE}
              color={colors.RED}
            />
          </View>
        </View>
      </View>
      <View style={styles.chattingButtons}>
        <ButtonWithText
          onPress={handlePersonalChat}
          title={'개인채팅'}
          width={'45%'}
          color={colors.GRAY}
          border={'solid'}
          borderColor={colors.BORDER_GRAY}
        />
        <ButtonWithText
          onPress={handleGroupChat}
          title={'그룹채팅'}
          width={'45%'}
          color={colors.GRAY}
          border={'solid'}
          borderColor={colors.BORDER_GRAY}
        />
      </View>
    </SafeAreaView>
  );
};

export default ChattingMain;
