import React from 'react';
import {Text, View} from 'react-native';
import styles from './header.component.style';

const Header = ({title, highlight}) => {
  return (
    <>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.highlight}>{highlight}</Text>
    </>
  );
};

export default Header;
