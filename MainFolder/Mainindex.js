import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Week5index from './Week5/Week5index';
import Week6index from './Week6/Week6index';
import MainButtonindex from './MainButtonindex';
import ThirdPartyindex from './ThirdPartyLibrary/ThirdPartyindex';



export default function Mainindex() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="MainButtonindex"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="MainButtonindex" component={MainButtonindex} />
        <Stack.Screen name="ThirdPartyindex" component={ThirdPartyindex} />
        <Stack.Screen name="Week5index" component={Week5index} />
        <Stack.Screen name="Week6index" component={Week6index} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
