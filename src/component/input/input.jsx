import React from 'react';
import {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import styles from './input.component.style';
import commonStyle from '@src/styles/style';
const {colors} = commonStyle;

const Input = ({label, onChangeText, isSecure, placeholder}) => {
  const [isFocused, setIsFocused] = useState(false);

  const isFocusedHandler = () => {
    setIsFocused(true);
  };
  const isBluredHandler = () => {
    setIsFocused(false);
  };

  return (
    <View style={styles.inputContainer}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        onChangeText={onChangeText}
        onFocus={isFocusedHandler}
        onBlur={isBluredHandler}
        style={isFocused ? styles.inputFocused : styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.GRAY}
        secureTextEntry={isSecure}></TextInput>
    </View>
  );
};

export default Input;
