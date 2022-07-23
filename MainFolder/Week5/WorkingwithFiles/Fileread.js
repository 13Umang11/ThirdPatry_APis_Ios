import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  SafeAreaView,
} from 'react-native';
import moment from 'moment';
import {plus1, del, pencil, share} from '../assets/icons/Icons';
import {useIsFocused} from '@react-navigation/native';
import Header from '../customcomponets/Header';
import Share, {Social} from 'react-native-share';

var RNFS = require('react-native-fs');

export default function Fileread({navigation}) {
  const [Data, setData] = useState([]);
  const isfocused = useIsFocused();
  useEffect(() => {
    ReadFile();
  }, [isfocused]);


  const ReadFile = async () => {
    if (Platform.OS === 'android') {
      var path = RNFS.ExternalDirectoryPath;
      const Read = await RNFS.readDir(path);
      setData(Read);
    } else {
      var path = RNFS.DocumentDirectoryPath;
      const Read = await RNFS.readDir(path);
      setData(Read);
    }
  
  };

  const Warning = item => {
    Alert.alert('Alert', 'Are you sure you want to delete this User', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => DeleteFile(item),
      },
    ]);
  };

  const DeleteFile = item => {
    if (Platform.OS === 'android') {
      console.log(item.name);

    var path = RNFS.ExternalDirectoryPath + `/${item.name}`;
    return RNFS.unlink(path)
      .then(() => {
        console.log('FILE DELETED');
        ReadFile();
      })
      .catch(err => {
        console.log('error', err.message);
      });
    } else {
     

      var path = RNFS.DocumentDirectoryPath + `/${item.name}`;
      return RNFS.unlink(path)
        .then(() => {
          console.log('FILE DELETED');
          ReadFile();
        })
        .catch(err => {
          console.log('error', err.message);
        });
    }

    
  };

  const ShareFiles = async item => {
    var urls = `file://${item.path}`; //also using library
    console.log('url', urls);
    Share.open({
      title: 'This is my report ',
      message: 'Message:',
      url: urls,
      subject: 'Report',
    });
  };

  const Edit = (item, index) => {
    console.log('item', item);
    navigation.navigate('CreateFile', {item: item, index: index});
  };

  const renderItem = ({item, index}) => {
    return (
      <View key={index}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#d2d9d4',
            marginHorizontal: 10,
            marginTop: 10,
            justifyContent: 'space-between',
            padding: 10,
            borderRadius: 10,
          }}>
          <View>
            <Text style={{fontSize: 20, color: 'black'}}>{item.name}</Text>
            <View style={{flexDirection: 'row', marginTop: 5}}>
              <Text>Size: </Text>
              <Text>{item.size} Bytes</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text>Date: </Text>
              <Text>{moment(item.mtime).format('DD/MM/YYYY')}</Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Text>Time: </Text>
              <Text>{moment(item.mtime).format('HH:mm:SS')}</Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            {/* style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignSelf: 'center',
            }} */}
            <View>
              <TouchableOpacity
                style={{alignSelf: 'center'}}
                onPress={() => Edit(item, index)}>
                <Image
                  source={pencil}
                  style={{
                    ...styles.edit,
                    height: 25,
                    width: 25,
                    tintColor: 'green',
                    marginTop: 12,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => Warning(item)}>
                <Image
                  source={del}
                  style={{...styles.edit, tintColor: 'red'}}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{alignSelf: 'center'}}
              onPress={() => ShareFiles(item)}>
              <Image
                source={share}
                style={{
                  ...styles.edit,
                  tintColor: '#007ACC',
                  height: 25,
                  width: 25,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
    <View style={{flex: 1}}>
      <Header title="Files List" goBack={() =>navigation.goBack()}show={true}/>
      <FlatList data={Data} renderItem={renderItem} />
      <TouchableOpacity
        onPress={() => navigation.navigate('CreateFile')}
        style={styles.btnplus}
        activeOpacity={0.5}>
        <Image source={plus1} style={styles.plus} />
      </TouchableOpacity>
    </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  plus: {
    height: 55,
    width: 55,
    tintColor: '#007ACC',
  },
  btnplus: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  edit: {
    height: 35,
    width: 35,
    margin: 10,
  },
});
