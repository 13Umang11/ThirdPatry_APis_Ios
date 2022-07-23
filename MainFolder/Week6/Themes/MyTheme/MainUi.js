import React, {createContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {color, list} from '../../assets';
import {useTheme} from '@react-navigation/native';
import {PreferencesContext} from './PreferencesContext';

export default function MainUi({navigation}) {
  //   const ThemeContext = createContext();

  const {colors} = useTheme();
  return (
    <View style={{flex: 1}}>
      {/* <ThemeContext.Provider value={}> */}
      <Text
        style={{
          fontSize: 28,
          margin: 25,
          fontWeight: '800',
          color: colors.text,
        }}>
        Home
      </Text>
      <View style={{flexDirection: 'row', margin: 15}}>
        <Image
          source={color}
          style={{height: 25, width: 25, marginHorizontal: 20}}
        />
        <Text style={{color: colors.text}}>Open this color Menu</Text>
      </View>
      <View style={{flexDirection: 'row', marginHorizontal: 15}}>
        <Image
          source={list}
          style={{height: 25, width: 25, marginHorizontal: 20}}
        />
        <Text style={{color: colors.text}}>Open this Note</Text>
      </View>
      <View
        style={{
          backgroundColor: colors.card,
          elevation: 5,
          padding: 15,
          margin: 15,
          borderRadius: 20,
        }}>
        <Text style={{color: colors.text, margin: 10, fontSize: 26}}>
          Card Title
        </Text>
        <Text style={{margin: 10, color: colors.text}}>
          This is a sample text for Card Layout
        </Text>
      </View>
      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          marginTop: 90,
          backgroundColor: colors.notification,
          borderRadius: 10,
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: '#fff',
            padding: 10,
          }}>
          OK
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          marginHorizontal: 20,
          marginTop: 10,
          backgroundColor: colors.border,
          borderRadius: 10,
        }}>
        <Text style={{textAlign: 'center', color: colors.text, padding: 10}}>
          Cancal
        </Text>
      </TouchableOpacity>
      {/* </ThemeContext.Provider> */}
    </View>
  );
}
