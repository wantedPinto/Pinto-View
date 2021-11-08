import React, {useRef} from 'react';
import {useState} from 'react';
import {Text, View} from 'react-native';
import styles from './description.component.style';

const Description = ({title, sub}) => {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.sub}>{sub}</Text>
    </View>
  );
};

export default Description;
