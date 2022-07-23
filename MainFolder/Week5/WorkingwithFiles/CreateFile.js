import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Header from '../customcomponets/Header';
import {useIsFocused} from '@react-navigation/native';

export default function CreateFile({navigation, route}) {
  const [filename, setfilename] = useState('');
  const [filedata, setfiledata] = useState('');

  var RNFS = require('react-native-fs');
  var path = RNFS.ExternalDirectoryPath + `/${filename}`;

  const CreateFiles = () => {
    if (filename && filedata) {
      if (Platform.OS === 'android') {
        RNFS.writeFile(path, `${filedata}`, 'utf8')
          .then(() => {
            console.log('FILE WRITTEN!');
            navigation.navigate('Fileread');
          })
          .catch(err => {
            console.log('error', err.message);
          });
      } else {
        var path1 = RNFS.DocumentDirectoryPath + `/${filename}`;
        RNFS.writeFile(path1, `${filedata}`, 'utf8')
          .then(() => {
            console.log('FILE WRITTEN!');
            navigation.navigate('Fileread');
          })
          .catch(err => {
            console.log('error', err.message);
          });
      }
    } else if (!filename) {
      alert('Enter File Name');
    } else if (!filedata) {
      alert('Enter File Info');
    } else {
      alert('Enter File Name & File Type');
    }
  };

  useEffect(() => {
    if (route.params) {
      console.log('entered');
      ReadFiles();
    }
  }, [route.params]);

  const ReadFiles = async () => {
    var items = route.params.item;
    // var index = route.params.index;
    var path12 = items.path;
    console.log('path12', path12);
    setfilename(items.name);
    if (Platform.OS === 'android') {
      var path1 = RNFS.ExternalDirectoryPath + `/${items.name}`;
    } else {
      var path1 = RNFS.DocumentDirectoryPath + `/${items.name}`;
    }
    const response = await RNFS.readFile(path1);
    console.log('response', response);
    setfiledata(response);
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header
          title={route.params ? 'Edit File' : 'Create File'}
          goBack={() => navigation.goBack()}
          show={true}
        />
        <View style={styles.continer}>
          <Text style={{fontSize: 20, color: 'black'}}>File Name: </Text>
          <TextInput
            style={styles.textinput}
            placeholder="Enter File Name . Type"
            onChangeText={setfilename}
            value={filename}
          />
        </View>
        <View style={{...styles.continer, height: 330}}>
          <Text style={{fontSize: 20, color: 'black'}}>File Info: </Text>
          <TextInput
            style={{...styles.textinput}}
            multiline={true}
            placeholder="Enter File Name"
            onChangeText={setfiledata}
            value={filedata}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 15,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.btn}>
            <Text style={styles.text}>Cancal</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={CreateFiles}>
            <Text style={styles.text}>{route.params ? 'Edit' : 'Save'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  continer: {
    backgroundColor: '#d2d9d4',
    margin: 15,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: '#000000',
    elevation: 10,
  },
  textinput: {
    paddingHorizontal: 15,
    fontSize: 17,
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
    padding: 10,
  },
  btn: {
    backgroundColor: '#007ACC',
    width: 150,
    shadowColor: '#000000',
    elevation: 5,
    borderRadius: 10,
  },
});
