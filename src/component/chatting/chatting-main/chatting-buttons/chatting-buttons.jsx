import React from 'react';
import {View} from 'react-native';
import ButtonWithText from '@component/button-with-text/button-with-text';
import styles from './chatting-buttons.component.style';
import commonStyle from '@src/styles/style';
const {colors} = commonStyle;

const chattingButtons = ({isCameraOn, handlePersonalChat, handleGroupChat}) => {
  return (
    <View style={styles.chattingButtons}>
      <ButtonWithText
        onPress={handlePersonalChat}
        title={'개인채팅'}
        width={'40%'}
        color={isCameraOn ? colors.BLUE : colors.GRAY}
        border={'solid'}
        borderColor={isCameraOn ? colors.BLUE : colors.BORDER_GRAY}
      />
      <ButtonWithText
        onPress={handleGroupChat}
        title={'그룹채팅'}
        width={'40%'}
        color={isCameraOn ? colors.BLUE : colors.GRAY}
        border={'solid'}
        borderColor={isCameraOn ? colors.BLUE : colors.BORDER_GRAY}
      />
    </View>
  );
};

export default chattingButtons;
