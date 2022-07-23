import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  PermissionsAndroid,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function Week5Button({navigation}) {
  useEffect(() => {
    PermissionsAndroid.requestMultiple([
      'android.permission.READ_EXTERNAL_STORAGE',
      'android.permission.WRITE_EXTERNAL_STORAGE',
    ]);
  }, []);
  return (
    <SafeAreaView>
    <View>
      <StatusBar barStyle={'dark-content'}/>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Fatchindex')}>
        <Text style={styles.btntext}>Fetch</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Databaseindex')}>
        <Text style={styles.btntext}>SQl Database</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Axiosindex')}>
        <Text style={styles.btntext}>Axious</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Shareindex')}>
        <Text style={styles.btntext}>Share</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Fileindex')}>
        <Text style={styles.btntext}>Working with Files</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('ImageComponent')}>
        <Text style={styles.btntext}>Image Gallary View</Text>
      </TouchableOpacity> */}
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
