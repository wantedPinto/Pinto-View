import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';

import WelcomePage from './src/component/welcome-page/welcome-page';
import LogInPage from './src/component/login-page/login-page';
import ChattingMainPage from './src/component/chatting-page/chatting-main-page/chatting-main-page';
import PersonalChattingPage from './src/component/chatting-page/personal-chatting-page/personal-chatting-page';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Group>
          <Stack.Screen name="Home" component={WelcomePage} />
        </Stack.Group>
        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen name="LogIn" component={LogInPage} />
        </Stack.Group>
        <Stack.Group>
          <Stack.Screen name="ChattingMain" component={ChattingMainPage} />
          <Stack.Screen
            name="PersonalChatting"
            component={PersonalChattingPage}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
