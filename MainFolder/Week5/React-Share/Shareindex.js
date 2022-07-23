import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Header from '../customcomponets/Header';

export default function Main({navigation}) {
  return (
    <SafeAreaView>
       <Header title="Share"  goBack={() =>navigation.goBack()}show={true} />
      <View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Defaultshare')}>
          <Text style={styles.btntext}>Default Share</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Share')}>
          <Text style={styles.btntext}>Share</Text>
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
