import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Fileread from './Fileread';
import CreateFile from './CreateFile';

const Stack = createStackNavigator();

export default function Fileindex() {
  return (
    // <NavigationContainer>
    <Stack.Navigator initialRouteName="Fileread">
      <Stack.Screen
        name="Fileread"
        component={Fileread}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="CreateFile"
        component={CreateFile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
    // {/* </NavigationContainer> */}
  );
}
