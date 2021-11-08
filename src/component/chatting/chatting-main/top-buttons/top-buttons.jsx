import React from 'react';
import {View} from 'react-native';
import Icon from '@component/chatting/icon/icon';
import styles from './top-buttons.component.style';
import commonStyle from '@src/styles/style';
const {colors} = commonStyle;

const TopButtons = () => {
  return (
    <View style={styles.topButtons}>
      <Icon name={'gear'} color={colors.WHITE} />
      <Icon name={'user'} color={colors.WHITE} />
    </View>
  );
};

export default TopButtons;
