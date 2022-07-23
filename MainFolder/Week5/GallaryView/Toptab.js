import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

// main screen
import Top from '../customcomponets/Top';
import Photos from './GalleryView';
import Videos from './Videos';

const Tab = createMaterialTopTabNavigator();

export default function Topindex() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <Top {...props} />}>
        <Tab.Screen name="Photos" component={Photos} />
        <Tab.Screen name="Videos" component={Videos} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
