import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FatchRead from './FatchRead';
import Insert from './Insert';
import Read from './Read';

const Stack = createStackNavigator();

export default function Demoindex() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="FatchRead">
        <Stack.Screen
          name="FatchRead"
          component={FatchRead}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Insert"
          component={Insert}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Read"
          component={Read}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
