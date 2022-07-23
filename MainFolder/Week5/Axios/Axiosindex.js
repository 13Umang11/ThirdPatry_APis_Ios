import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ReadData from './ReadData';
import Insert from './Insert';

const Stack = createStackNavigator();

export default function Axiosindex() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="ReadData">
      <Stack.Screen
        name="Read Info"
        component={ReadData}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Insert UserInfo"
        component={Insert}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
