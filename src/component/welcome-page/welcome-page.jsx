import React from 'react';
import {SafeAreaView, Image, View} from 'react-native';
import commonStyle from '@src/styles/style';
const {colors, sizes} = commonStyle;

import Header from '@component/header/header';
import ButtonWithText from '@component/button-with-text/button-with-text';
import styles from './welcome-page.component.style';

const TITLE = `우리 학교\n친구는 어디있나`;

const WelcomePage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Header title={TITLE} highlight={'핀토'} />
      </View>
      <View style={styles.imgContainer}>
        <Image
          // source={{
          //   uri: '#',
          // }}
          style={styles.img}
        />
      </View>
      <View style={styles.buttons}>
        <ButtonWithText
          title="회원가입"
          width="44%"
          background={colors.YELLOW}
          onPress={() => navigation.navigate('SignUp')}
        />
        <ButtonWithText
          title="로그인"
          width="44%"
          color={colors.BLUE}
          borderColor={colors.BLUE}
          onPress={() => navigation.navigate('LogIn')}
        />
      </View>
    </SafeAreaView>
  );
};

export default WelcomePage;
