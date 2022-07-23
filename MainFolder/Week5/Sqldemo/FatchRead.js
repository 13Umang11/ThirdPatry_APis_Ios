import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  StatusBar,
  Alert,
} from 'react-native';
import {del, mail, plus, person} from '../assets/icons/Icons';
// import {useIsFocused} from '@react-navigation/native';
import Header from '../customcomponets/Header';

export default FatchRead = ({navigation}) => {
  const [loading, setloading] = useState(false);

  const [Data, setData] = useState([]);

  // const isfocused = useIsFocused();

  const Readdata = async () => {
    try {
      const response = await fetch(
        'http://192.168.1.30/Practical_Api/api/get_user_list',
        {
          method: 'GET',
          headers: {
            Token:
              'dyGyy4ST5P8:APA91bFDJ_X9qdRcWvdAnXxnrKXU0DlVUpGf5CQez4mLSn9y6vo0qQUslK2Zj2YLO2eEH-x7K6dyf40Ltd5aCGoNs9Kk2ZRx_oCb88D3l_53SVqjhdKlLKz0enqdtvxDN3K0lg_eISlc',
          },
        },
      );
      const json = await response.json();
      console.log(json.data);
      setData(json.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    Readdata();
  }, []);

  const Delete = async item => {
    try {
      const response = await fetch(
        'http://192.168.1.30/Practical_Api/api/delete_user',
        {
          method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Token:
              'dyGyy4ST5P8:APA91bFDJ_X9qdRcWvdAnXxnrKXU0DlVUpGf5CQez4mLSn9y6vo0qQUslK2Zj2YLO2eEH-x7K6dyf40Ltd5aCGoNs9Kk2ZRx_oCb88D3l_53SVqjhdKlLKz0enqdtvxDN3K0lg_eISlc',
          },
          body: JSON.stringify({
            user_id: item.user_id,
          }),
        },
      );
      const json = await response.json();
      console.log(json);
      Readdata();
    } catch (e) {
      console.log('error', e);
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
        onPress: () => Delete(item),
      },
    ]);
  };

  const InsertinDatabase = item => {
    navigation.navigate('Insert', {
      item: item,
    });
  };

  const renderItem = ({item, index}) => {
    return (
      <View
        style={{
          marginHorizontal: 12,
          borderBottomColor: 'gray',
          borderBottomWidth: 1,
          backgroundColor: '#FFFFFF',
        }}>
        <View style={{flexDirection: 'row'}}>
          {
            <View style={item.profile_pic ? null : styles.subview}>
              <Image
                source={item.profile_pic ? {uri: item.profile_pic} : person}
                style={{
                  justifyContent: 'center',
                  alignSelf: 'center',
                  height: 60,
                  width: 60,
                  margin: 5,
                  borderRadius: 100,
                  tintColor: item.profile_pic ? null : '#001854',
                  backgroundColor: item.profile_pic ? null : '#bfbfbb',
                }}
              />
            </View>
          }

          <TouchableOpacity
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
            activeOpacity={0.7}
            onPress={() => InsertinDatabase(item)}>
            <View>
              <Text
                style={{
                  ...styles.item,
                  fontSize: 20,
                  marginLeft: 10,
                  color: 'black',
                  width: 200,
                }}>
                {item.name}
              </Text>

              <View style={{flexDirection: 'row'}}>
                <Image
                  source={mail}
                  style={{
                    height: 20,
                    width: 20,
                    marginLeft: 10,
                  }}
                />
                <Text style={{...styles.item, width: 190}}>{item.email}</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => Warning(item)}
              style={{
                // left: 10,
                top: 15,
              }}>
              <Image
                style={{tintColor: '#001854', height: 40, width: 40}}
                source={del}
              />
            </TouchableOpacity>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header title="ReadUser" />
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      ) : (
        <>
          <FlatList
            data={Data}
            keyExtractor={item => item.user_id}
            renderItem={renderItem}
          />

          {/* <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              padding: 10,
              left: 60,
              width: 240,
              backgroundColor: '#001854',
              borderRadius: 10,
              justifyContent: 'center',
            }}
            onPress={null}>
            <Text
              style={{
                color: 'white',
                fontSize: 20,
                padding: 5,
                textAlign: 'center',
              }}>
              Inset Into data Base
            </Text>
          </TouchableOpacity> */}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 14,
    color: '#000',
    marginHorizontal: 5,
  },
  subview: {
    width: 70,
    height: 70,
    backgroundColor: '#bfbfbb',
    borderRadius: 100,
    marginVertical: 5,
  },
});
