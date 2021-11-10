import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import Icon from '@component/icon/icon';
import InputList from './input-list/input-list';
import Description from './description/description';

import styles from './login.component.style';
import commonStyle from '@src/styles/style';
const {colors} = commonStyle;

const LogIn = ({navigation}) => {
  const goToHome = () => {
    navigation.navigate('Home');
  };

  const goToChatting = user => {
    navigation.push('ChattingMain', {user});
  };

  async function checkLoginSuccess(id, pw) {
    try {
      const response = await tmpServer(id, pw);
      goToChatting(id);
    } catch (error) {
      alert(error);
    }
  }

  function tmpServer(id, pw) {
    if (id === '1' && pw === '1') {
      return id;
    } else {
      throw new Error(`not valid user data`);
    }
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <View style={styles.close}>
          <Icon name="close" color={colors.LIGHT_BLACK} onPress={goToHome} />
        </View>
        <View style={styles.contents}>
          <Description title={'로그인'} sub={'반갑습니다. 핀토입니다!'} />
          <InputList
            navigation={navigation}
            checkLoginSuccess={checkLoginSuccess}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogIn;
