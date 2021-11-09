import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import Welcome from './src/component/welcome/welcome';
import InputID from './src/component/signup/inputID';
import LogIn from './src/component/login/login';
import ChattingMain from './src/component/chatting/chatting-main/chatting-main';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {/* <Stack.Screen name="Home" component={Welcome} /> */}
        <Stack.Screen name="ChattingMain" component={ChattingMain} />
        <Stack.Screen name="SignUp" component={InputID} />
        <Stack.Screen name="LogIn" component={LogIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
