import React, {useState, useEffect} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  Image,
  Text,
  StatusBar,
  Alert,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';
import {del, location, mail, phone, plus, salary} from '../assets/icons/Icons';
import Header from '../customcomponets/Header';

var Database = openDatabase({name: 'Employee.db'}); //It's global variable

const Read = ({navigation, route}) => {
  const [Id, setId] = useState('');
  const [items, setItems] = useState([]);

  const isFocused = useIsFocused();

  useEffect(() => {
    console.log('useEffect 3 insert');
    Read();
  }, [isFocused]);

  const Read = () => {
    Database.transaction(tx => {
      tx.executeSql('SELECT * FROM Employee', [], (tx, results) => {
        // console.log(results.rows.length);
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        console.log(temp);
        setItems(temp);
      });
    });
  };

  const Edit = item => {
    navigation.navigate('Insert', {
      Id: item.Id,
      Name: item.name,
      Email: item.email,
      Add: item.address,
      Phone: item.phone,
      Salary: item.salary,
    });
  };

  const Warning = item => {
    console.log('Warning');
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

  const RenderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: '#cdd4cf',
          marginHorizontal: 5,
          marginVertical: 5,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
          }}>
          <Text style={{fontSize: 26, top: 10, left: 10}}>
            Record <Text style={{color: 'blue'}}>{index + 1}</Text>
          </Text>
          <TouchableOpacity
            onPress={() => Warning(item)}
            style={{
              // left:Dimensions.get('screen').width - 77,
              // right:10,
              height: 50,
              width: 50,
              backgroundColor: '#001854',
              borderTopRightRadius: 15,
              borderBottomLeftRadius: 15,
            }}>
            <Image
              style={{tintColor: 'white', height: 50, width: 50}}
              source={del}
            />
          </TouchableOpacity>
        </View>

        <TouchableOpacity activeOpacity={0.7} onPress={() => Edit(item)}>
          <View>
            <Text
              style={{
                fontSize: 16,
                color: '#000',
                margin: 5,
                fontSize: 28,
                marginHorizontal: 10,
                color: 'black',
              }}>
              {item.name}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={phone}
                    style={{height: 27, width: 27, marginHorizontal: 10}}
                  />
                  <Text style={styles.item}>{item.phone}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={mail}
                    style={{height: 27, width: 27, marginHorizontal: 10}}
                  />
                  <Text style={styles.item}>{item.email}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={salary}
                    style={{height: 27, width: 27, marginHorizontal: 10}}
                  />
                  <Text style={styles.item}>{item.salary}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={location}
                    style={{
                      height: 27,
                      width: 27,
                      marginHorizontal: 10,
                      tintColor: 'black',
                    }}
                  />
                  <Text style={styles.item}>{item.address}</Text>
                </View>
              </View>
              <Image
                source={{uri: item.image}}
                style={{
                  height: 120,
                  width: 120,
                  position: 'absolute',
                  borderRadius: 10,
                  right: 10,
                  bottom: 10,
                }}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const Delete = item => {
    if (item.Id) {
      Database.transaction(tx => {
        tx.executeSql(
          'DELETE FROM Employee where Id=?',
          [item.Id],
          (tx, results) => {
            console.log('Results', results.rowsAffected);
          },
          Read(),
        );
      });
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1}}>
        <Header title="Read Info"  goBack={() =>navigation.goBack()}show={true}  />
        <StatusBar barStyle="dark-content" />
        <View
          style={{
            flex: 1,
            width: '96%',
            alignSelf: 'center',
            marginTop: 10,
            borderRadius: 20,
          }}>
          <FlatList
            data={items}
            keyExtractor={item => item.Id}
            renderItem={RenderItem}
          />
        </View>
        <TouchableOpacity
          style={{
            position: 'absolute',
            bottom: 20,
            right: 20,
            padding: 10,
            backgroundColor: '#001854',
            borderRadius: 10,
          }}
          onPress={() => navigation.navigate('Insert')}>
          <Image
            style={{
              height: 40,
              width: 40,
              tintColor: 'white',
            }}
            source={plus}
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
export default Read;

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    color: '#000',
    margin: 5,
    width: 140,
  },
});
