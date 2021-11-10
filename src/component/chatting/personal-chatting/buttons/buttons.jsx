import React from 'react';
import {View, Text} from 'react-native';
import styles from './buttons.component.style';
import Icon from '@component/icon/icon';

import commonStyle from '@src/styles/style';
import VoiceOnOff from '../voice-on-off/voice-on-off';
const {colors, sizes} = commonStyle;

const Buttons = ({
  navigator,
  handleVoice,
  handleCameraSwitch,
  handleEndCall,
}) => {
  return (
    <View style={styles.buttonsContainer}>
      <Icon
        onPress={handleCameraSwitch}
        style={styles.refresh}
        name="refresh"
        background={colors.WHITE_TRANS}
        color={colors.LIGHT_BLACK}></Icon>
      <View style={styles.VoiceAndEnd}>
        <VoiceOnOff handleVoice={handleVoice} />
        <Icon
          onPress={handleEndCall}
          name="phone-hangup"
          background={colors.RED}
          color={colors.WHITE_TRANS}
        />
      </View>
    </View>
  );
};

export default Buttons;
