

export type QuizType = "Addition" | "Subtraction" | "Multiplication" | "Division";


import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import  Welcome  from './screens/welcome';
import  AgeScreen  from './screens/AgeScreen';

import  signInScreen  from './screens/signin';
import  Mainscreen  from './screens/mainscreen';

import  QuizScreen  from './screens/quizscreen';

import  levelScreen  from './screens/levelScreen';

export type RootStackParamList = {
  Welcome: undefined;
  AgeScreen: undefined;
  signInScreen : undefined;
  Mainscreen: undefined;
  QuizScreen: { type: QuizType }; // ✅ Ensure 'type' is correctly typed
  levelScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();


function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
         <Stack.Screen  name="Welcome"      component={Welcome}      options={{title: 'Welcome'}} />
         <Stack.Screen  name="AgeScreen"      component={AgeScreen}      options={{title: 'AgeScreen'}} />
         <Stack.Screen  name="signInScreen" component={signInScreen} options={{title: 'signInScreen'}} />
         <Stack.Screen  name="Mainscreen"   component={Mainscreen}   options={{title: 'Mainscreen'}} />
         <Stack.Screen  name="QuizScreen"   component={QuizScreen}   options={{title: 'QuizScreen'}} />
         <Stack.Screen  name="levelScreen"   component={levelScreen}   options={{title: 'levelScreen'}} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


