import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function MainButtonindex({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <StatusBar barStyle={'dark-content'} />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('ThirdPartyindex')}>
          <Text style={styles.btntext}>ThirdParty library</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Week5index')}>
          <Text style={styles.btntext}>Week5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Week6index')}>
          <Text style={styles.btntext}>Week6</Text>
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
