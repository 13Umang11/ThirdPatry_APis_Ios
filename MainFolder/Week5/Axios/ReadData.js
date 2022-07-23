import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  StyleSheet,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {del, mail, plus, person} from '../assets/icons/Icons';
import {useIsFocused} from '@react-navigation/native';
import Header from '../customcomponets/Header';

export default function ReadData({navigation}) {
  // const [isLoading, setLoading] = useState(false);
  // const [loading, setloading] = useState(false);
  const [Data, setData] = useState([]);

  const isfocused = useIsFocused();

  const axios = require('axios').default;

  async function getUser() {
    try {
      // setloading(true);
      const response = await axios
        .get('http://192.168.29.72/Practical_Api/api/get_user_list', {
          headers: {
            Token:
              'dyGyy4ST5P8:APA91bFDJ_X9qdRcWvdAnXxnrKXU0DlVUpGf5CQez4mLSn9y6vo0qQUslK2Zj2YLO2eEH-x7K6dyf40Ltd5aCGoNs9Kk2ZRx_oCb88D3l_53SVqjhdKlLKz0enqdtvxDN3K0lg_eISlc',
          },
        })
        .then(response => {
          // setloading(false);
          return response;
        });
      console.log(response.data.data);
      setData(response.data.data);
    } catch (error) {
      console.error(error);
      // setloading(false);
    }
  }
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

  useEffect(() => {
    getUser();
  }, [isfocused]);

  const Delete = async item => {
    console.log(item.user_id);
    try {
      const response = await axios.delete(
        'http://192.168.29.72/Practical_Api/api/delete_user',
        {
          // method: 'DELETE',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Token:
              'dyGyy4ST5P8:APA91bFDJ_X9qdRcWvdAnXxnrKXU0DlVUpGf5CQez4mLSn9y6vo0qQUslK2Zj2YLO2eEH-x7K6dyf40Ltd5aCGoNs9Kk2ZRx_oCb88D3l_53SVqjhdKlLKz0enqdtvxDN3K0lg_eISlc',
          },
          data: JSON.stringify({
            user_id: item.user_id,
          }),
        },
      );
      console.log(response.data.data);
      getUser();
    } catch (e) {
      console.log('error', e);
    }
  };

  const Edit = item => {
    navigation.navigate('Insert UserInfo', {
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
            onPress={() => Edit(item)}>
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
                <Text style={{...styles.item, width: 190, marginTop: 0}}>
                  {item.email}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => Warning(item)}
              style={{
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
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header title="ReadUser"  goBack={() =>navigation.goBack()}show={true} />
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        {/* {loading ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} animating={loading} />
        </View>
      ) : ( */}
        <>
          <FlatList
            data={Data}
            keyExtractor={item => item.user_id}
            renderItem={renderItem}
          />

          <TouchableOpacity
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              padding: 10,
              backgroundColor: '#001854',
              borderRadius: 10,
            }}
            onPress={() => navigation.navigate('Insert UserInfo')}>
            <Image
              style={{
                height: 40,
                width: 40,
                tintColor: 'white',
                // position:'absolute'
              }}
              source={plus}
            />
          </TouchableOpacity>
        </>
        {/* )} */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    fontSize: 14,
    color: '#000',
    margin: 5,
  },
  subview: {
    width: 70,
    height: 70,
    backgroundColor: '#bfbfbb',
    borderRadius: 100,
    marginVertical: 5,
  },
});
