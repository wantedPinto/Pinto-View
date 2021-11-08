import React, {useRef} from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';
import InputList from './input-list/input-list';

const enterID = ({navigation}) => {
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Pressable
          style={styles.close}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.closeText}>𝖷</Text>
        </Pressable>
        <View style={styles.textContainer}>
          <Text style={styles.title}>로그인</Text>
          <Text style={styles.sub}>입력을 해야 다음으로 넘어갈 수 있어요</Text>
        </View>
        <View style={styles.inputContainer}>
          <InputList navigation={navigation} />
        </View>
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
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 1,
  },
  close: {
    alignSelf: 'flex-end',
  },
  closeText: {
    fontSize: 20,
    color: '#222222',
  },
  textContainer: {
    flex: 1,
  },
  inputContainer: {
    flex: 4,
    width: '100%',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: '#222222',
    marginVertical: 10,
  },
  sub: {
    color: '#A5A5A3',
  },
});

export default enterID;
