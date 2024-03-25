// MDIA-4295-0 - App Development Strategy 2 - 87992 - Lab
// Assignment 03
// Joao Resende
// A01319312

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Umbrella from './screens/Umbrella';
import Forecast from './screens/Forecast';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      >
        <Stack.Screen
        name='Home'
        component={Umbrella}
        options={{
          title: 'Umbrella?'
        }}
        />

        <Stack.Screen
        name='Forecast'
        component={Forecast}
        options={{
          title: 'Details'
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
