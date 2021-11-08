import React, {useRef} from 'react';
import {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import CloseButton from './close-button/close-button';
import InputList from './input-list/input-list';
import Description from './description/description';

const LogIn = ({navigation}) => {
  const goToHome = () => {
    navigation.navigate('Home');
  };

  const goToChatting = id => {
    navigation.push('ChattingMain', {id});
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
    if (id === 'Hongbeen' && pw === '12345678') {
      return id;
    } else {
      throw new Error(`not valid user data`);
    }
  }

  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <CloseButton goToHome={goToHome} />
        <Description
          title={'로그인'}
          sub={'입력을 해야 다음으로 넘어갈 수 있어요'}
        />
        <InputList
          navigation={navigation}
          checkLoginSuccess={checkLoginSuccess}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: 'white',
    flex: 1,
  },
  container: {
    margin: 30,
    flex: 1,
  },
});

export default LogIn;
