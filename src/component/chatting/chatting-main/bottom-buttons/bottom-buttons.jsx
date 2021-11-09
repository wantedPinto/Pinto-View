import React from 'react';
import {View} from 'react-native';
import Icon from '@component/icon/icon';
import ButtonWithText from '@component/button-with-text/button-with-text';
import styles from './bottom-buttons.component.style';
import commonStyle from '@src/styles/style';
const {colors} = commonStyle;

const BottomButtons = ({isCameraOn, handleCamera}) => {
  const handleCameraButton = async () => {
    await handleCamera(); // need to install react-native-camera library
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
      </>
    );
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
      </>
    );
  };

  // isVoiceOn ? voiceOn() : voiceOff()
  // const voiceOn = () => {
  //   return (
  //     <>
  //       <Icon
  //         onPress={handleVoiceButton}
  //         name="microphone-slash"
  //         background={colors.WHITE}
  //         color={colors.RED}
  //       />
  //     </>
  //   );
  // };

  // const voiceOff = () => {
  //   return (
  //     <>
  //       <Icon
  //         onPress={handleVoiceButton}
  //         name="microphone"
  //         background={colors.WHITE}
  //         color={colors.GREEN}
  //       />
  //     </>
  //   );
  // };

  return (
    <View style={styles.bottomButtons}>
      <View style={styles.cameraAndFilter}>
        {isCameraOn ? cameraOn() : cameraOff()}
        <Icon name={'filter'} background={colors.GRAY} color={colors.WHITE} />
      </View>
    </View>
  );
};

export default BottomButtons;
