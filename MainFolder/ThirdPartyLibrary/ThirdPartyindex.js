import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Otp from './Otp/Otp';
import ThirdPartyButton from './ThirdPartyButton';
import ModalAnimationUi from './ModalAnimation/ModalAnimationUi';
import Modals from './ModalAnimation/Modals';
import Authentication from './Authentication/Authentication';
import DateTime from './Datetimepicker/Date';
import ModalActionSheet from './ActionSheet/ModalActionSheet';

const Stack = createStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ThirdPartyButton" component={ThirdPartyButton} />
      <Stack.Screen name="Otp" component={Otp} />
      <Stack.Screen name="Modals" component={Modals} />
      <Stack.Screen name="Authentication" component={Authentication} />
      <Stack.Screen name="DateTime" component={DateTime} />
      <Stack.Screen name="ModalAnimationUi" component={ModalAnimationUi} />
      <Stack.Screen name="ModalActionSheet" component={ModalActionSheet} />
    </Stack.Navigator>
    // </NavigationContainer>
  );
}
