import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Fatchindex from './APIs/FatchIndex';
import Databaseindex from './SqlDatabase/Navigation';
import Axiosindex from './Axios/Axiosindex';
import Fileindex from './WorkingwithFiles/Fileindex';
import Shareindex from './React-Share/Shareindex';
import Week5Button from './Week5Button';
import Defaultshare from './React-Share/Defaultshare';
import Share from './React-Share/Share';
import ImageComponent from './GallaryView/ImageComponent';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={Week5Button} />
      <Stack.Screen name="Fatchindex" component={Fatchindex} />
      <Stack.Screen name="Databaseindex" component={Databaseindex} />
      <Stack.Screen name="Axiosindex" component={Axiosindex} />
      <Stack.Screen name="Shareindex" component={Shareindex} />
      <Stack.Screen name="Defaultshare" component={Defaultshare} />
      <Stack.Screen name="Share" component={Share} />
      <Stack.Screen name="Fileindex" component={Fileindex} />
      <Stack.Screen name="ImageComponent" component={ImageComponent} />
    </Stack.Navigator>
  );
}
