import React from 'react';
import {Pressable, Text} from 'react-native';
import commonStyle from '@src/styles/style';

const {sizes} = commonStyle;

import styles from './button-with-text.component.style';

const ButtonWithText = ({
  title,
  width,
  background,
  color,
  border,
  borderColor,
}) => {
  return (
    <Pressable
      width={width}
      backgroundColor={background || 'transparent'}
      borderStyle={border || 'solid'}
      borderWidth={sizes.BORDER_WIDTH}
      borderColor={borderColor || background}
      style={styles.button}>
      <Text color={color} style={styles.buttonText}>
        {title}
      </Text>
    </Pressable>
  );
};

export default ButtonWithText;
