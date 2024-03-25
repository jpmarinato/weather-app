// MDIA-4295-0 - App Development Strategy 2 - 87992 - Lab
// Assignment 03
// Joao Resende
// A01319312

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


import Umbrella from './screens/Umbrella';
import Details from './screens/Details';

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
        name='Details'
        component={Details}
        options={{
          title: 'Details'
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
