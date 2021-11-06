import React from 'react';
import {
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>새롭게 세상을 즐겨봐</Text>
        <Text style={styles.title}>
          어디로? <Text style={styles.highlight}>여기로</Text>
        </Text>
      </View>

      <View style={styles.imgContainer}>
        <Text style={styles.description}>
          Detail description, image files, how to use....
        </Text>
        <Image
          source={{
            uri: '#',
          }}
          style={styles.img}
        />
      </View>
      <View style={styles.buttons}>
        <Pressable
          title="Sign Up"
          style={styles.signUp}
          onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.signUpText}>회원가입</Text>
        </Pressable>
        <Pressable
          title="Log In"
          style={styles.logIn}
          onPress={() => navigation.navigate('LogIn')}>
          <Text style={styles.logInText}>로그인</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#FCFDFA',
    justifyContent: 'center',
  },
  header: {
    width: '100%',
    flex: 2,
    justifyContent: 'center',
    marginLeft: 60,
  },
  title: {
    textAlign: 'left',
    color: '#222222',
    fontSize: 25,
    fontWeight: '300',
  },
  highlight: {
    color: '#222222',
    fontSize: 26,
    fontWeight: 'bold',
  },
  description: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
  },
  imgContainer: {
    width: '80%',
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#5F5FF0',
  },

  buttons: {
    width: '80%',
    marginTop: 10,
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  signUp: {
    width: '45%',
    height: 54,
    paddingVertical: 18,
    borderRadius: 30,
    backgroundColor: '#FFF079',
    color: '#222222',
  },
  logIn: {
    width: '45%',
    height: 54,
    paddingVertical: 18,
    borderRadius: 30,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#5F5FF0',
    color: '#5F5FF0',
  },
  signUpText: {
    color: '#222222',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  logInText: {
    color: '#5F5FF0',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
  },
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default Welcome;
