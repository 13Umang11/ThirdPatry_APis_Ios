import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import LocalButton from './LocalButton';
import Localization from './Localization';

const Stack = createStackNavigator();

export default function Axiosindex() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="LocalButton">
      <Stack.Screen
        name="LocalButton"
        component={LocalButton}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Localization"
        component={Localization}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
