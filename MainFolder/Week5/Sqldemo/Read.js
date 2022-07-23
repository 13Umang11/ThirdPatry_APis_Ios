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
} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';
import {del, location, mail, phone, plus, salary} from '../assets/icons/Icons';
import Header from '../customcomponets/Header';

var Database = openDatabase({name: 'Employees.db'});

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
      tx.executeSql('SELECT * FROM Employees', [], (tx, results) => {
        // console.log(results.rows.length);
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        console.log(temp);
        setItems(temp);
      });
    });
  };

  // const Edit = item => {
  //   navigation.navigate('Insert', {
  //     Id: item.Id,
  //     Name: item.name,
  //     Email: item.email,
  //     Add: item.address,
  //     Phone: item.phone,
  //     Salary: item.salary,
  //   });
  // };

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

  const RenderItem = ({item, index}) => {
    return (
      <View
        style={{
          backgroundColor: '#9e9796',
          marginHorizontal: 5,
          marginVertical: 5,
          borderTopRightRadius: 15,
          borderBottomLeftRadius: 15,
        }}>
        <TouchableOpacity
          onPress={() => Warning(item)}
          style={{
            left: 286,
            height: 50,
            width: 50,
            backgroundColor: '#001854',
            borderTopRightRadius: 15,
            borderBottomLeftRadius: 15,
          }}>
          <View style={{height: 50, width: 50}}>
            <Image
              style={{tintColor: 'white', height: 50, width: 50}}
              source={del}
            />
          </View>
        </TouchableOpacity>
        <Text style={{fontSize: 26, position: 'absolute', top: 10, left: 10}}>
          Record <Text style={{color: 'blue'}}>{index + 1}</Text>
        </Text>
        <TouchableOpacity activeOpacity={0.7} onPress={null}>
          <View>
            <Text
              style={{
                ...styles.item,
                fontSize: 28,
                marginHorizontal: 10,
                color: 'black',
              }}>
              {item.name}
            </Text>

            <View style={{flexDirection: 'row'}}>
              <Image
                source={mail}
                style={{height: 27, width: 27, marginHorizontal: 10}}
              />
              <Text style={styles.item}>{item.email}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const Delete = item => {
    console.log('delete');
    console.log('item', item);
    setId(item.Id);

    if (Id) {
      Database.transaction(tx => {
        tx.executeSql(
          'DELETE FROM Employees where Id=?',
          [item.Id],
          (tx, results) => {
            console.log('Results', results.rowsAffected);

            Read();
          },
        );
      });
    }
  };

  return (
    <View style={{flex: 1}}>
      <Header title="Read Info" />
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
  );
};
export default Read;

const styles = StyleSheet.create({
  item: {
    fontSize: 16,
    color: '#000',
    margin: 5,
  },
});
