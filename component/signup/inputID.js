import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

const InputID = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>대학 생활을 더 즐겁게!</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Email"></TextInput>
        <Pressable>
          <Text style={styles.next}>→</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  textContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: '900',
    color: 'black',
    marginVertical: 20,
  },
  input: {
    borderStyle: 'solid',
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 3,
    padding: 10,
    width: '70%',
    height: 50,
  },
  next: {
    height: 50,
    fontSize: 25,
    fontWeight: '600',
  },
});

export default InputID;
