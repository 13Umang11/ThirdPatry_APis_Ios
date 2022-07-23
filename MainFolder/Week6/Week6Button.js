import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Week6Button({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Orientation')}>
        <Text style={styles.btntext}>Orientation</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Video Orientation')}>
        <Text style={styles.btntext}>Video Orientation</Text>
      </TouchableOpacity> */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Webviewindex')}>
        <Text style={styles.btntext}>Web View & HTML View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Localindex')}>
        <Text style={styles.btntext}>Localization</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('PinToZoomindex')}>
        <Text style={styles.btntext}>Pin To Zoom & Swipe</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ContextThemes')}>
        <Text style={styles.btntext}>Themes</Text>
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
