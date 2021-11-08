import React from 'react';
import {useState} from 'react';
import {Text, TextInput, View, Pressable} from 'react-native';
import styles from './input-list.component.style';
import Input from '../input/input';
import {useEffect} from 'react';

const MIN_ID_LENGTH = 5;
const MIN_PW_LENGTH = 5;

const InputList = ({navigation}) => {
  const [isValidButton, setIsValidButton] = useState(false);
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  useEffect(() => {
    if (id.length >= MIN_ID_LENGTH && pw.length >= MIN_PW_LENGTH) {
      setIsValidButton(true);
    } else {
      setIsValidButton(false);
    }
  }, [id, pw]);

  const goToChatting = () => {
    navigation.push('ChattingMain', {id});
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
    if (id === 'Hongbeen' && pw === '12345678') {
      return id;
    } else {
      throw new Error(`not valid user data`);
    }
  }

  return (
    <>
      <Input label={'아이디'} onChangeText={setId} isSecure={false} />
      <Input label={'비밀번호'} onChangeText={setPw} isSecure={true} />
      <Pressable
        style={isValidButton ? styles.submitValid : styles.submit}
        onPress={() => {
          isValidButton && checkLoginSuccess(id, pw, goToChatting);
        }}>
        <Text
          style={isValidButton ? styles.submitTextValid : styles.submitText}>
          완료
        </Text>
      </Pressable>
    </>
  );
};

export default InputList;
