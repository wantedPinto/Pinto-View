import React from 'react';
import {Pressable} from 'react-native';

import Icons from 'react-native-vector-icons/dist/FontAwesome';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import MCI from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import styles from './icon.component.style';

const Icon = ({name, background, size, color, onPress}) => {
  if (name === 'close')
    return (
      <Pressable
        onPress={onPress}
        backgroundColor={background || 'transparent'}
        style={styles.iconBackground}>
        <Ionicons
          color={color}
          name={name}
          size={size || 22}
          style={styles.icon}></Ionicons>
      </Pressable>
    );
  else if (name === 'phone-hangup')
    return (
      <Pressable
        onPress={onPress}
        backgroundColor={background || 'transparent'}
        style={styles.iconBackground}>
        <MCI
          color={color}
          name={name}
          size={size || 22}
          style={styles.icon}></MCI>
      </Pressable>
    );

  return (
    <Pressable
      onPress={onPress}
      backgroundColor={background || 'transparent'}
      style={styles.iconBackground}>
      <Icons
        color={color}
        name={name}
        size={size || 22}
        style={styles.icon}></Icons>
    </Pressable>
  );
};

export default Icon;
