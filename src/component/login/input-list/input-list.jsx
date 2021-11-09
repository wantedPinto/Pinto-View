import React from 'react';
import {useState} from 'react';
import {Text, View, Pressable} from 'react-native';
import styles from './input-list.component.style';
import Input from '@component/login/input/input';
import {useEffect} from 'react';

const MIN_ID_LENGTH = 5;
const MIN_PW_LENGTH = 5;

const InputList = ({navigation, checkLoginSuccess}) => {
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

  return (
    <View style={styles.inputListContainer}>
      <Input label={'아이디'} onChangeText={setId} isSecure={false} />
      <View style={styles.Horizon}></View>
      <Input label={'비밀번호'} onChangeText={setPw} isSecure={true} />
      <Pressable
        style={isValidButton ? styles.submitValid : styles.submit}
        onPress={() => {
          isValidButton && checkLoginSuccess(id, pw);
        }}>
        <Text
          style={isValidButton ? styles.submitTextValid : styles.submitText}>
          완료
        </Text>
      </Pressable>
    </View>
  );
};

export default InputList;
