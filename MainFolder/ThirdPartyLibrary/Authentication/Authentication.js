import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import LocalAuthentication from 'rn-local-authentication';

const Auth = () => {
  LocalAuthentication.authenticateAsync({
    reason: 'ALL',
    fallbackToPasscode: true,
    fallbackToPinCodeAction: true,
    fallbackEnabled: true,
    fallbackToPinCodeAction: true,
    description: 'hello',
    fallbackTitle: 'nbkjnkj',
  }).then(response => {
    if (response.success) {
      Alert.alert('Authenticated successfully!');
    } else {
      Alert.alert('Something went wrong');
    }
  });
};

const Authentication = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TouchableOpacity style={styles.btn} onPress={Auth}>
        <Text style={styles.btntext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 30,
    backgroundColor: '#007ACC',
    margin: 10,
  },
  btntext: {
    textAlign: 'center',
    color: 'black',
    padding: 10,
  },
});
