import React, {useContext, useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Switch,
} from 'react-native';
import ThemeUi from './ThemeUi';
import {mail, lock} from '../../assets/index';
import ThemeContext, {themes} from './ThemeContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ContextThemes() {
  const [theme, settheme] = useState(themes.dark);
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    console.log('vljbdsovbo');
    try {
      const jsonValue = await AsyncStorage.getItem('theme').then(def => {
        console.log('JSON.parse(jsonValue)', JSON.parse(def));
        if (def) {
          console.log('settheme');
          settheme(JSON.parse(def));
          const json = JSON.parse(def);
          // console.log(json.backgroundColor);
          // console.log('====================================');
          // console.log(themes.dark.backgroundColor);
          // console.log('====================================');
          if (json.backgroundColor == themes.dark.backgroundColor) {
            setIsEnabled(false);
          } else {
            setIsEnabled(true);
          }
        } else {
          settheme(themes.dark);
        }
      });
    } catch (e) {
      console.log(e);
    }
  };

  const toggleSwitch = async val => {
    setIsEnabled(val);
    if (val == true) {
      settheme(themes.light);
      console.log('if', themes.light);
      try {
        const jsonValue = JSON.stringify(themes.light);
        await AsyncStorage.setItem('theme', jsonValue);
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log('else', themes.dark);
      settheme(themes.dark);
      try {
        const jsonValue = JSON.stringify(themes.dark);
        await AsyncStorage.setItem('theme', jsonValue);
      } catch (e) {
        console.log(e);
      }
    }
  };

  // const changetheme = async () => {
  //   if (theme == themes.dark) {
  //     settheme(themes.light);
  //     console.log('if', themes.light);
  //     try {
  //       const jsonValue = JSON.stringify(themes.light);
  //       await AsyncStorage.setItem('theme', jsonValue);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   } else {
  //     console.log('else', themes.dark);
  //     settheme(themes.dark);
  //     try {
  //       const jsonValue = JSON.stringify(themes.dark);
  //       await AsyncStorage.setItem('theme', jsonValue);
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   }
  // };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.color == 'white' ? 'black' : 'white',
      }}>
      <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
        <Text
          style={{
            marginVertical: 15,
            color: theme.color == 'white' ? 'white' : 'black',
          }}>
          Light Mode
        </Text>
        <Switch
          style={{margin: 10}}
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
          // onChange={changetheme}
        />
      </View>

      <ThemeContext.Provider value={theme}>
        <ThemeUi />
      </ThemeContext.Provider>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 39,
    fontWeight: '400',
    textAlign: 'center',
    margin: 20,
    marginTop: 120,
    color: '#23a17d',
  },
  textinput: {
    borderRadius: 50,
    backgroundColor: 'white',
    paddingLeft: 40,
    marginHorizontal: 20,
    margin: 10,
    color: 'black',
    elevation: 5,
  },
  image: {
    height: 23,
    width: 23,
    position: 'absolute',
    top: 13,
    left: 12,
  },
  btntext: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
    marginHorizontal: 20,
    margin: 10,
    marginTop: 30,
    backgroundColor: '#23a17d',
    borderRadius: 50,
    justifyContent: 'center',
    elevation: 5,
  },
});
