import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  Pressable,
} from 'react-native';

const Main = ({navigation, route}) => {
  const {id} = route.params;

  return (
    <SafeAreaView>
      <View>
        <Text>Hi {id}!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Main;
