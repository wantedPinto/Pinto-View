/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Welcome from './component/welcome/welcome';
import InputID from './component/signup/inputID';
import LogIn from './component/login/login';
import ChattingMain from './component/chatting/chatting-main/chatting-main';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="SignUp" component={InputID} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="ChattingMain" component={ChattingMain} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
