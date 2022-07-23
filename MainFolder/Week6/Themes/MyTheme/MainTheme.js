import React, {useReducer, useState} from 'react';
import {View, Text, TouchableOpacity, Switch, StatusBar} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {PreferencesContext} from './PreferencesContext';

export default function MainTheme({navigation}) {
  const {toggleDark, toggleDefault, toggleLight, isThemeDark} =
    React.useContext(PreferencesContext);
  const [theme, settheme] = useState('System Default');
  const RadioPops = ['Light Mode', 'Dark Mode', 'System Default'];
  const {colors} = useTheme();
  const Radio = item => {
    settheme(item);
    console.log('item', item);
    if (item === 'Dark Mode') {
      console.log('toggleDark');
      toggleDark();
    } else if (item === 'Light Mode') {
      console.log('toggleLight');
      toggleLight();
    } else {
      console.log('toggleLight');
      toggleDefault();
    }

    // navigation.navigate('MainUi');
  };
  // const themes = useTheme();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <StatusBar
        barStyle={
          colors.text == 'rgb(229, 229, 231)' ? 'light-content' : 'dark-content'
        }
        backgroundColor={
          colors.text == 'rgb(229, 229, 231)' ? 'black' : 'white'
        }
      />
      {console.log(colors.text)}
      {/* <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isThemeDark ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleTheme}
        value={isThemeDark}
      /> */}
      {RadioPops.map((item, index) => {
        return (
          <View key={index}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{margin: 10, fontSize: 18, color: colors.text}}>
                {item}
              </Text>
              <TouchableOpacity
                onPress={() => Radio(item)}
                style={{
                  borderRadius: 100,
                  borderWidth: 2,
                  borderColor: 'blue',
                  height: 25,
                  marginTop: 10,
                  width: 25,
                  justifyContent: 'center',
                }}>
                {theme === item && (
                  <View
                    style={{
                      backgroundColor: 'blue',
                      height: 15,
                      width: 15,
                      borderRadius: 100,
                      alignSelf: 'center',
                    }}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </View>
  );
}
