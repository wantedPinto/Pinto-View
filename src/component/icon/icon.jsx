import React from 'react';
import {Pressable} from 'react-native';

import Icons from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import styles from './icon.component.style';

const Icon = ({name, background, color, onPress}) => {
  if (name === 'close')
    return (
      <Pressable
        onPress={onPress}
        backgroundColor={background || 'transparent'}
        style={styles.iconBackground}>
        <Ionicons
          color={color}
          name={name}
          size={25}
          style={styles.icon}></Ionicons>
      </Pressable>
    );

  return (
    <Pressable
      onPress={onPress}
      backgroundColor={background || 'transparent'}
      style={styles.iconBackground}>
      <Icons color={color} name={name} size={26} style={styles.icon}></Icons>
    </Pressable>
  );
};

export default Icon;
