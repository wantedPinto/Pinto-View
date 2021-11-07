import React from 'react';
import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

const enterPW = ({navigation, route}) => {
  const {id} = route.params;
  const [isFocused, setIsFocused] = useState(false);
  const [isValidButton, setIsValidButton] = useState(false);
  const [pw, setPW] = useState('');

  const isFocusedHandler = () => {
    setIsFocused(true);
  };

  const isBluredHandler = () => {
    setIsFocused(false);
  };

  const onChangeText = pw => {
    setPW(pw);
    if (pw.length > 0) {
      setIsValidButton(true);
    } else {
      setIsValidButton(false);
    }
  };

  const goToChatting = () => {
    navigation.push('Main', {id});
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
          <Text style={styles.label}>비밀번호</Text>
          <TextInput
            onChangeText={onChangeText}
            onFocus={isFocusedHandler}
            onBlur={isBluredHandler}
            style={isFocused ? styles.inputFocused : styles.input}
            placeholder="정확하게 입력해주세요"
            secureTextEntry={true}></TextInput>
          <View style={styles.buttons}>
            <Pressable
              style={styles.previous}
              onPress={() => navigation.goBack()}>
              <Text style={styles.previousText}>이전</Text>
            </Pressable>
            <Pressable style={isValidButton ? styles.nextValid : styles.next}>
              <Text
                style={isValidButton ? styles.nextTextValid : styles.nextText}
                onPress={() => {
                  checkLoginSuccess(id, pw, goToChatting);
                }}>
                완료
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

async function checkLoginSuccess(id, pw, callback) {
  try {
    const response = await tmpServer(id, pw);
    callback();
  } catch (error) {
    alert(error);
  }
}

function tmpServer(id, pw) {
  if (id === 'Hongbeen' && pw === '123') {
    return id;
  } else {
    throw new Error(`not valid user data`);
  }
}

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
    color: '#222222',
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
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  previous: {
    paddingVertical: 18,
    borderWidth: 1.5,
    borderStyle: 'solid',
    borderColor: '#EDEDED',
    borderRadius: 70,
    width: '30%',
    alignSelf: 'flex-start',
  },
  previousText: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    color: '#A5A5A3',
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

export default enterPW;
