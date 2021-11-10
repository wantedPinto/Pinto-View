import React from 'react';
import {SafeAreaView, View} from 'react-native';
import Icon from '@component/icon/icon';
import InputList from './input-list/input-list';
import Description from '@component/description/description';

import styles from './login-page.component.style';
import commonStyle from '@src/styles/style';
const {colors} = commonStyle;

const MIN_ID_LENGTH = 8;
const MIN_PW_LENGTH = 8;

const LogInPage = ({navigation}) => {
  const goToHome = () => {
    navigation.goBack();
  };

  const goToChatting = user => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'ChattingMain',
          params: {userData: user},
        },
      ],
    });
  };

  async function checkLoginSuccess(id, pw) {
    try {
      const user = await tmpServer(id, pw);
      goToChatting(user);
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
        <View style={styles.close}>
          <Icon
            name="close"
            size={26}
            color={colors.LIGHT_BLACK}
            onPress={goToHome}
          />
        </View>
        <View style={styles.contents}>
          <Description title={'로그인'} sub={'반갑습니다. 핀토입니다!'} />
          <InputList
            MIN_ID_LENGTH={MIN_ID_LENGTH}
            MIN_PW_LENGTH={MIN_PW_LENGTH}
            navigation={navigation}
            checkLoginSuccess={checkLoginSuccess}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LogInPage;
