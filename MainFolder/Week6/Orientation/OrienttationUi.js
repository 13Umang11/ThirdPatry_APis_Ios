import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';

import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import {mail, lock} from '../assets/index';

export default function OrientationUi() {
  return (
    <ScrollView>
      <View>
        <OrientationLocker orientation="UNLOCK" />
        <Text style={styles.title}>Login</Text>
        <View style={{...styles.textinput}}>
          <Image source={mail} style={styles.image} />
          <TextInput placeholder="Email Address" />
        </View>
        <View style={{...styles.textinput}}>
          <Image
            source={lock}
            style={{...styles.image, height: 30, width: 30, top: 8, left: 8}}
          />
          <TextInput placeholder="Password" />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.btn, marginTop: 10}}>
          <Text style={styles.btntext}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', color: '#23a17d'}}>
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
