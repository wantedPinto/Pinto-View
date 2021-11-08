import React from 'react';
import {View} from 'react-native';
import Icon from '@component/chatting/icon/icon';
import ButtonWithText from '@component/button-with-text/button-with-text';
import styles from './bottom-buttons.component.style';
import commonStyle from '@src/styles/style';
import {useState} from 'react/cjs/react.development';
const {colors} = commonStyle;

const BottomButtons = ({isCameraOn, handleVoice, handleCamera}) => {
  const handleCameraButton = async () => {
    await handleCamera(); // need to install react-native-camera library
  };

  const cameraOff = () => {
    return (
      <>
        <ButtonWithText
          onPress={handleCameraButton}
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
      </>
    );
  };

  const cameraOn = () => {
    return (
      <>
        <ButtonWithText
          onPress={handleCameraButton}
          title={'카메라 끄기'}
          width={'80%'}
          background={colors.WHITE}
          color={colors.LIGHT_BLACK}
        />
        <Icon
          onPress={handleVoice}
          name="microphone"
          background={colors.WHITE}
          color={colors.GREEN}
        />
      </>
    );
  };

  return (
    <View style={styles.bottomButtons}>
      <Icon name={'filter'} background={colors.GRAY} color={colors.WHITE} />
      <View style={styles.cameraAndVoice}>
        {isCameraOn ? cameraOn() : cameraOff()}
      </View>
    </View>
  );
};

export default BottomButtons;
