// MDIA-4295-0 - App Development Strategy 2 - 87992 - Lab
// Assignment 02
// Joao Resende
// A01319312

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Umbrella from './screens/Umbrella';
import Forecast from './screens/Forecast';
import NoRain from './screens/NoRain';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName='Home'
      >
        <Stack.Screen
        name='Home'
        component={Home}
        options={{
          title: 'Home'
        }}
        />

        <Stack.Screen
        name='Umbrella'
        component={Umbrella}
        options={{
          title: 'Umbrella? : Yes'
        }}
        />

        <Stack.Screen
        name='Forecast'
        component={Forecast}
        options={{
          title: 'Forecast'
        }}
        />

        <Stack.Screen
          name='NoRain'
          component={NoRain}
          options={{
            title: 'Umbrella? : No'
        }}
        />

      </Stack.Navigator>
    </NavigationContainer>
   
  );
}
