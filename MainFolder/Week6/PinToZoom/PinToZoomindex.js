import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Main({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('PinToZoom')}>
        <Text style={styles.btntext}>Pin To Zoom</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Swipe')}>
        <Text style={styles.btntext}>Swipe</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Drag')}>
        <Text style={styles.btntext}>Drag</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('TapGesture')}>
        <Text style={styles.btntext}>Tap</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('LongPress')}>
        <Text style={styles.btntext}>LongPress</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#007ACC',
    width: '95%',
    margin: 10,
    borderRadius: 10,
  },
  btntext: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
  },
});
