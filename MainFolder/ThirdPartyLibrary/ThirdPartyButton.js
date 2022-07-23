import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, StatusBar, SafeAreaView} from 'react-native';

export default function ThirdPartyButton({navigation}) {
  return (
    <SafeAreaView>
    <View>
      <StatusBar barStyle={'dark-content'}/>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Authentication')}>
        <Text style={styles.btntext}>Local Authentication</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Otp')}>
        <Text style={styles.btntext}>Otp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('DateTime')}>
        <Text style={styles.btntext}>Date & Time</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ModalAnimationUi')}>
        <Text style={styles.btntext}>All Third Party library</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Modals')}>
        <Text style={styles.btntext}>Modals</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ModalActionSheet')}>
        <Text style={styles.btntext}>Modal ActionSheet</Text>
      </TouchableOpacity>
    </View>
    </SafeAreaView>
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
