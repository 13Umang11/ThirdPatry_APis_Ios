import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Insert from './Insert';
import Read from './Read';

const Stack = createStackNavigator();

export default function Databaseindex() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Read">
      <Stack.Screen
        name="Read"
        component={Read}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Insert"
        component={Insert}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
