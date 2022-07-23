import React, {useEffect, useState, createContext} from 'react';
import {useColorScheme} from 'react-native';
import MainUi from './MainUi';
import MainTheme from './MainTheme';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {PreferencesContext} from './PreferencesContext';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  const [Theme, setTheme] = useState(false);
  const [isThemeDark, setIsThemeDark] = React.useState('Light Mode');
  const scheme = useColorScheme();

  let theme = isThemeDark == 'Dark Mode' ? DarkTheme : MyTheme; //isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleDark = React.useCallback(() => {
    setTheme(false);
    setIsThemeDark('Dark Mode');
  }, [isThemeDark]);

  const toggleLight = React.useCallback(() => {
    setTheme(false);
    setIsThemeDark('Light Mode');
  }, [isThemeDark]);

  const toggleDefault = React.useCallback(() => {
    setTheme(true);
    console.log(scheme);
    if (scheme == 'dark') {
      setIsThemeDark(DarkTheme);
    } else {
      setIsThemeDark(MyTheme);
    }
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleDark,
      toggleLight,
      toggleDefault,
      isThemeDark,
    }),
    [toggleDark, isThemeDark],
  );

  const MyTheme = {
    dark: true,
    colors: {
      primary: 'rgb(255, 45, 85)',
      background: 'rgb(242, 242, 242)',
      card: '#44c9c7',
      text: '#290845',
      border: 'rgb(199, 199, 204)',
      notification: 'blue',
    },
  };

  return (
    <PreferencesContext.Provider value={preferences}>
      <NavigationContainer theme={Theme ? isThemeDark : theme}>
        <Drawer.Navigator
          screenOptions={{
            headerLeft: () => null,
          }}
          initialRouteName="MainTheme">
          <Drawer.Screen name="MainTheme" component={MainTheme} />
          <Drawer.Screen name="MainUi" component={MainUi} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PreferencesContext.Provider>
  );
}
