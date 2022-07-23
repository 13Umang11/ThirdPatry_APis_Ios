import React, {useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
import {mail, lock} from '../../assets/index';
import ThemeContext from './ThemeContext';

export default function Localization() {
  const theme = useContext(ThemeContext);
  return (
    <ScrollView style={{flexGrow: 1}} keyboardShouldPersistTaps="always">
      <StatusBar
        backgroundColor={theme.color == 'white' ? 'black' : 'white'}
        barStyle={theme.color == 'white' ? 'light-content' : 'dark-content'}
      />
      <View
        style={{
          flex: 1,

          backgroundColor: theme.color == 'white' ? 'black' : 'white',
        }}>
        <Text
          style={{
            ...styles.title,
            // ...theme,
            color: theme.color == 'white' ? 'white' : '#23a17d',
          }}>
          Login
        </Text>
        <View
          style={{
            ...styles.textinput,
            tintColor: theme.color == 'white' ? 'black' : 'black',
          }}>
          <Image
            source={mail}
            style={{
              ...styles.image,
            }}
          />
          <TextInput placeholder="Email Address" />
        </View>
        <View
          style={{
            ...styles.textinput,
            tintColor: theme.color == 'white' ? 'white' : 'black',
          }}>
          <Image
            source={lock}
            style={{
              ...styles.image,
              height: 30,
              width: 30,
              top: 8,
              left: 8,
            }}
          />
          <TextInput placeholder="Password" />
        </View>
        <TouchableOpacity
          style={{
            ...styles.btn,
            marginTop: 10,
            backgroundColor: theme.color === 'white' ? 'white' : '#23a17d',
          }}>
          <Text
            style={{
              ...styles.btntext,
              color: theme.color === 'white' ? 'black' : 'white',
            }}>
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.btn,
            marginTop: 10,
            backgroundColor: theme.color === 'white' ? 'white' : '#23a17d',
          }}>
          <Text
            style={{
              ...styles.btntext,
              color: theme.color === 'white' ? 'black' : 'white',
            }}>
            Sign Up
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            color: theme.color === 'white' ? 'white' : '#23a17d',
          }}>
          Forgot Your Password?
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 39,
    fontWeight: '400',
    textAlign: 'center',
    margin: 20,
    marginTop: 120,
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
