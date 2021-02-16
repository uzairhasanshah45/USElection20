import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import StartScreen from '../Features/StartScreen/StartScreen';
import Home from '../Features/Home/Home';
import ElectionResults from '../Features/ElectionResults/ElectionResults';
import VotersIssues from '../Features/VotersIssues/VotersIssues';
import AboutBiden from '../Features/AboutBiden/AboutBiden';
import QuizAboutElection from '../Features/QuizAboutElection/QuizAboutElection';
import QuizAboutBiden from '../Features/QuizAboutBiden/QuizAboutBiden';
import SuccessScreen from '../Features/SuccessScreen/SuccessScreen'
import FailedScreen from '../Features/FailedScreen/FailedScreen'

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen
          name="StartScreen"
          component={StartScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen 
          name="Home"
          component={Home}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Election results"
          component={ElectionResults}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Voters issues"
          component={VotersIssues}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen 
          name="About Biden"
          component={AboutBiden}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Quiz about Election"
          component={QuizAboutElection}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="Quiz about Biden"
          component={QuizAboutBiden}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="SuccessScreen"
          component={SuccessScreen}
          options={{gestureEnabled: false}}
        />
        <Stack.Screen
          name="FailedScreen"
          component={FailedScreen}
          options={{gestureEnabled: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
