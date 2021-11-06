/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import Welcome from './component/welcome/welcome';
import InputID from './component/signup/inputID';
import enterID from './component/login/enterID';
import enterPW from './component/login/enterPW';
import Main from './component/chatting/main/main';

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Welcome} />
        <Stack.Screen name="SignUp" component={InputID} />
        <Stack.Screen name="LogIn" component={enterID} />
        <Stack.Screen name="EnterPW" component={enterPW} />
        <Stack.Screen name="Main" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
