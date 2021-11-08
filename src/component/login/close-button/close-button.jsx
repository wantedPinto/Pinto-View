import React, {useRef} from 'react';
import {useState} from 'react';
import {Text, Pressable} from 'react-native';
import styles from './close-button.component.style';

const CloseButton = ({goToHome}) => {
  return (
    <Pressable style={styles.close} onPress={() => goToHome()}>
      <Text style={styles.closeText}>𝖷</Text>
    </Pressable>
  );
};

export default CloseButton;
