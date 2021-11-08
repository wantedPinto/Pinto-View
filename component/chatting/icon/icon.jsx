import React from 'react';
import {SafeAreaView, Text, View, Pressable} from 'react-native';

import Icons from 'react-native-vector-icons/dist/FontAwesome';
import styles from './icon.component.style';

const Icon = ({name, background, color, onPress}) => {
  return (
    <Pressable
      onPress={onPress}
      backgroundColor={background || 'transparent'}
      style={styles.iconBackground}>
      <Icons color={color} name={name} size={24} style={styles.icon}></Icons>
    </Pressable>
  );
};

export default Icon;
