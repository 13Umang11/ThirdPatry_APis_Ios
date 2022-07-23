import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import FatchRead from './FatchRead';
import FatchInsert from './FatchInsert';

const Stack = createStackNavigator();

export default function Fatchindex() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="FatchRead">
      <Stack.Screen
        name="FatchRead"
        component={FatchRead}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FatchInsert"
        component={FatchInsert}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
