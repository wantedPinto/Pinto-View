import React from 'react';
import {useState} from 'react';
import {View} from 'react-native';
import styles from './input-list.component.style';
import Input from '@component/input/input';
import ButtonWithText from '@component/button-with-text/button-with-text';
import {useEffect} from 'react';
import commonStyle from '@src/styles/style';
const {colors} = commonStyle;

const InputList = ({checkLoginSuccess, MIN_ID_LENGTH, MIN_PW_LENGTH}) => {
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
      <Input
        label={'아이디'}
        onChangeText={setId}
        isSecure={false}
        placeholder="정확하게 입력해주세요"
      />
      <View style={styles.Horizon}></View>
      <Input
        label={'비밀번호'}
        onChangeText={setPw}
        isSecure={true}
        placeholder="정확하게 입력해주세요"
      />
      <View style={styles.submit}>
        <ButtonWithText
          title="완료"
          width={100}
          onPress={() => {
            isValidButton && checkLoginSuccess(id, pw);
          }}
          background={isValidButton ? colors.YELLOW : colors.GRAY}
          color={isValidButton ? colors.BLACK : colors.WHITE}
        />
      </View>
    </View>
  );
};

export default InputList;
