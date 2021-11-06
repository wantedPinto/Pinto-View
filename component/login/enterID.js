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

const enterID = ({navigation}) => {
  const inputRef = useRef(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isValidButton, setIsValidButton] = useState(false);
  const [text, setText] = useState('');

  const isFocusedHandler = () => {
    setIsFocused(true);
  };

  const isBluredHandler = () => {
    setIsFocused(false);
  };

  const onChangeText = text => {
    setText(text);
    if (text.length > 0) {
      setIsValidButton(true);
    } else {
      setIsValidButton(false);
    }
  };

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
          <Text style={styles.label}>아이디</Text>
          <TextInput
            onChangeText={onChangeText}
            onFocus={isFocusedHandler}
            onBlur={isBluredHandler}
            style={isFocused ? styles.inputFocused : styles.input}
            placeholder="정확하게 입력해주세요"></TextInput>
          <Pressable
            style={isValidButton ? styles.nextValid : styles.next}
            onPress={() => navigation.push('EnterPW', {id: text})}>
            <Text
              style={isValidButton ? styles.nextTextValid : styles.nextText}>
              다음
            </Text>
          </Pressable>
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

  label: {
    fontSize: 16,
    fontWeight: '400',
  },
  input: {
    borderStyle: 'solid',
    borderColor: '#EDEDED',
    color: '#222222',
    borderWidth: 1.5,
    borderRadius: 30,
    padding: 15,
    width: '100%',
    height: 50,
    marginVertical: 10,
  },
  inputFocused: {
    borderStyle: 'solid',
    borderColor: '#5F5FF0',
    color: '#222222',
    borderWidth: 1.5,
    borderRadius: 30,
    padding: 15,
    width: '100%',
    height: 50,
    marginVertical: 10,
  },
  next: {
    paddingVertical: 18,
    borderRadius: 70,
    backgroundColor: '#BCBCBB',
    width: '30%',
    alignSelf: 'flex-end',
  },
  nextValid: {
    backgroundColor: '#FFF079',
    paddingVertical: 18,
    borderRadius: 70,
    width: '30%',
    alignSelf: 'flex-end',
  },
  nextText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#FCFDFA',
  },
  nextTextValid: {
    color: '#222222',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default enterID;
