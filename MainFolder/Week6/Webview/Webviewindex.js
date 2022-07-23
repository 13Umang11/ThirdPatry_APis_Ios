import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Main({navigation}) {
  return (
    <View>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Htmlview')}>
        <Text style={styles.btntext}>HTML View</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Webview')}>
        <Text style={styles.btntext}>Web View</Text>
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
