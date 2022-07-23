import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Week6Button from './Week6Button';
import VideoOrientation from './Orientation/VideoOrientation';
import OrientationUi from './Orientation/OrienttationUi';
import Webviewindex from './Webview/Webviewindex';
import Localindex from './Localization/Localindex';
import Htmlview from './Webview/Htmlview';
import Webview from './Webview/Webview';
import PinToZoomindex from './PinToZoom/PinToZoomindex';
import PinToZoom from './PinToZoom/PintoZoom';
import Swipe from './PinToZoom/Swipe';
import ContextThemes from './Themes/ContextHook/ContextThemes';
import Drag from './PinToZoom/Drag';
import TapGesture from './PinToZoom/TapGesture';
import LongPress from './PinToZoom/LongPress';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Week6Button" component={Week6Button} />
      <Stack.Screen name="Orientation" component={OrientationUi} />
      <Stack.Screen name="Video Orientation" component={VideoOrientation} />
      <Stack.Screen name="Webviewindex" component={Webviewindex} />
      <Stack.Screen name="Htmlview" component={Htmlview} />
      <Stack.Screen name="Webview" component={Webview} />
      <Stack.Screen name="Localindex" component={Localindex} />
      <Stack.Screen name="PinToZoomindex" component={PinToZoomindex} />
      <Stack.Screen name="PinToZoom" component={PinToZoom} />
      <Stack.Screen name="Swipe" component={Swipe} />
      <Stack.Screen name="Drag" component={Drag} />
      <Stack.Screen name="TapGesture" component={TapGesture} />
      <Stack.Screen name="LongPress" component={LongPress} />
      <Stack.Screen name="ContextThemes" component={ContextThemes} />
    </Stack.Navigator>
  );
}
