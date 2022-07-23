import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';
import Header from '../customcomponets/Header';

const Insert = ({navigation, route}) => {
  const [title, settitle] = useState('Insert');
  const [E_Id, setId] = useState('');
  const [name, setname] = useState('');
  const [E_Phone, setPhone] = useState('');
  const [E_salary, setsalary] = useState('');
  const [email, setemail] = useState('');
  const [E_Address, setAddress] = useState('');

  var Database = openDatabase({name: 'Employees.db'});

  useEffect(() => {
    // console.log('useEffect 1 insert');

    if (route.params) {
      var Route = route.params.item;
      console.log(Route);
      setname(Route.name);
      setemail(Route.email);
      // setname()
      // setId(route.params.Id);
      // setName(route.params.Name);
      // setAddress(route.params.Add);
      // setPhone(String(route.params.Phone));
      // setemail(route.params.Email);
      // setsalary(String(route.params.Salary));
    }
  }, [route.params]);

  useEffect(() => {
    // console.log('useEffect 2 insert');
    Database.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Employees'",
        [],
        function (tx, res) {
          // console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Employees', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Employees(Id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30), email VARCHAR(30))',
              [],
            );
          }
          console.log('table created');
        },
      );
    });
  }, []);

  const insertData = () => {
    try {
      Database.transaction(function (tx) {
        tx.executeSql(
          'INSERT INTO Employees (name, email) VALUES (?,?)',
          [name, email],
          // (tx, results) => {
          //   console.log('Results', results.rowsAffected);
          //   if (results.rowsAffected > 0) {
          //     Alert.alert('Data Inserted Successfully....');
          //   } else Alert.alert('Failed....');
          // },
        );
        console.log('data inserted');
        Navi();
      });
    } catch (e) {
      console.log(e);
    }
  };

  const Navi = () => {
    navigation.navigate('Read');
  };

  return (
    <View style={{flex: 1}}>
      <Header title={title} />
      <ScrollView style={{flexGrow: 1}}>
        {/* <Text style={styles.title}>Emplyee List</Text> */}
        <View style={{marginTop: 30}}>
          <Text style={styles.text}>Name :</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Name"
            onChangeText={setname}
            value={name}></TextInput>

          <Text style={styles.text}>Email Id :</Text>
          <TextInput
            style={styles.textinput}
            placeholder="Email Id"
            keyboardType="email-address"
            onChangeText={setemail}
            value={email}>
            {console.log(email)}
          </TextInput>
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.goBack()}>
            <Text style={styles.btntext}>Cancal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={insertData}
            style={[styles.btn, {backgroundColor: '#001854', marginLeft: 20}]}>
            <Text style={styles.btntext}>ADD</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default Insert;

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 20,
    color: 'black',
    marginTop: 20,
    margin: 10,
    fontWeight: 'bold',
  },
  text: {
    textAlign: 'left',
    marginLeft: 10,
    color: '#001854',
  },
  textinput: {
    width: 340,
    borderColor: '#001854',
    borderRadius: 50,
    borderWidth: 1,
    margin: 10,
    padding: 10,
  },
  btn: {
    backgroundColor: '#ed6b5f',
    borderRadius: 20,
    width: 150,
    margin: 10,
  },
  btntext: {
    color: 'white',
    textAlign: 'center',
    padding: 15,
  },
});
