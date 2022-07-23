import React, {useState, useEffect, useRef} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  TextInput,
  ScrollView,
  ToastAndroid,
  Image,
  SafeAreaView,
  StatusBar,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

import {openDatabase} from 'react-native-sqlite-storage';
import {person} from '../assets/icons/Icons';
import Header from '../customcomponets/Header';
import ImagePicker from 'react-native-image-crop-picker';

const Insert = ({navigation, route}) => {
  const [title, settitle] = useState('Insert');
  const [E_Id, setId] = useState('');
  const [E_Name, setName] = useState('');
  const [E_Phone, setPhone] = useState('');
  const [E_salary, setsalary] = useState('');
  const [E_email, setemail] = useState(null);
  const [E_Address, setAddress] = useState('');
  const [image, setimage] = useState('');

  var Database = openDatabase({name: 'Employee.db'});

  // const secondTextInput = useRef();

  useEffect(() => {
    // console.log('useEffect 1 insert');

    if (route.params) {
      settitle('Edit Record');
      setId(route.params.Id);
      setName(route.params.Name);
      setAddress(route.params.Add);
      setPhone(String(route.params.Phone));
      setemail(route.params.Email);
      setsalary(String(route.params.Salary));
    }
  }, [route.params]);

  useEffect(() => {
    // console.log('useEffect 2 insert');
    Database.transaction(function (txn) {
      txn.executeSql(
        "SELECT name FROM sqlite_master WHERE type='table' AND name='Employee'",
        [],
        function (tx, res) {
          // console.log('item:', res.rows.length);
          if (res.rows.length == 0) {
            txn.executeSql('DROP TABLE IF EXISTS Employee', []);
            txn.executeSql(
              'CREATE TABLE IF NOT EXISTS Employee(Id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR(30), phone INT(15), address VARCHAR(255), image VARCHAR(330), salary INT(15), email VARCHAR(30))',
              [],
            );
          }
        },
      );
    });
  }, []);

  const insertData = () => {
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (!E_Name) {
      alert('Enter Name');
    } else if (!E_Phone) {
      alert('Enter Phone No');
    } else if (!E_email) {
      alert('Enter Email Id');
    } else if (!E_salary) {
      alert('Enter Salary');
    } else if (!E_Address) {
      alert('Enter Address');
    } else if (!image) {
      alert('Pick Employee Image');
    } else if (
      E_Name != '' &&
      E_Phone != '' &&
      E_Address != '' &&
      E_email != '' &&
      E_salary != ''
    ) {
      if (E_email.match(validRegex)) {
        if (E_Phone.length == 10) {
          try {
            Database.transaction(function (tx) {
              tx.executeSql(
                'INSERT INTO Employee(name, phone, address, image, salary, email) VALUES (?,?,?,?,?,?)',
                [E_Name, E_Phone, E_Address, image, E_salary, E_email],
                // (tx, results) => {
                //   console.log('Results', results.rowsAffected);
                //   if (results.rowsAffected > 0) {
                //     Alert.alert('Data Inserted Successfully....');
                //   } else Alert.alert('Failed....');
                // },
              );
              Navi();
            });
          } catch (e) {
            console.log(e);
          }
        } else {
          alert('Enter 10 Digits No!');
        }
      } else {
        alert('Enter Valid email address!');
      }
    } else {
      Alert.alert('Alert', 'Please check all details are filed');
    }
  };

  const editData = () => {
    Database.transaction(tx => {
      tx.executeSql(
        'UPDATE Employee set name=?, phone=? , address=?, image=?, salary=?, email=? where Id=?',
        [E_Name, E_Phone, E_Address, image, E_salary, E_email, E_Id],
      );
      Navi();
    });
  };

  const Navi = () => {
    navigation.navigate('Read');
  };

  const ImageCrop = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    }).then(image => {
      setimage(image.path);
      console.log(image);
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{flex: 1}}>
          <StatusBar barStyle={'dark-content'} />
          <Header title={title}  goBack={() =>navigation.goBack()}show={true}  />
          <ScrollView style={{flexGrow: 1}}>
            {/* <Text style={styles.title}>Emplyee List</Text> */}

            <TouchableOpacity activeOpacity={0.3} onPress={ImageCrop}>
              <View style={styles.imageview}>
                <Image
                  style={{
                    height: 130,
                    width: 130,
                    borderRadius: 100,
                    tintColor: image == person ? '#001854' : null,
                  }}
                  source={image == '' ? person : {uri: image}}
                />
              </View>
            </TouchableOpacity>

            <View>
              <Text style={styles.text}>Name :</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Name"
                placeholderTextColor={'gray'}
                onChangeText={setName}
                value={E_Name}
                blurOnSubmit={true}
              />
              <Text style={styles.text}>Phone No :</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Phone No"
                placeholderTextColor={'gray'}
                maxLength={10}
                keyboardType="number-pad"
                onChangeText={setPhone}
                value={String(E_Phone)}></TextInput>
              <Text style={styles.text}>Email Id :</Text>
              <TextInput
                style={styles.textinput}
                placeholder="Email Id"
                keyboardType="email-address"
                placeholderTextColor={'gray'}
                onChangeText={setemail}
                value={E_email}></TextInput>
              <Text style={styles.text}>Salary :</Text>
              <TextInput
                style={styles.textinput}
                keyboardType="number-pad"
                placeholder="Salary"
                placeholderTextColor={'gray'}
                maxLength={6}
                onChangeText={setsalary}
                value={E_salary}
                returnKeyType="next"
                onSubmitEditing={() => {
                  this.secondTextInput.focus();
                }}
              />
              <Text style={styles.text}>Address :</Text>
              <TextInput
                ref={input => {
                  this.secondTextInput = input;
                }}
                style={styles.textinput}
                placeholder="Address"
                onChangeText={setAddress}
                placeholderTextColor={'gray'}
                value={E_Address}></TextInput>
            </View>
            <View style={{flexDirection: 'row', alignSelf: 'center'}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.goBack()}>
                <Text style={styles.btntext}>Cancal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={route.params ? editData : insertData}
                style={[
                  styles.btn,
                  {backgroundColor: '#001854', marginLeft: 20},
                ]}>
                <Text style={styles.btntext}>
                  {route.params ? 'Save' : 'ADD'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
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
    borderColor: '#001854',
    borderRadius: 50,
    borderWidth: 1,
    margin: 10,
    padding: 10,
    marginHorizontal: 15,
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
  imageview: {
    marginVertical: 10,
    borderRadius: 100,
    borderColor: '#001854',
    borderWidth: 1,
    padding: 5,
    alignSelf: 'center',
  },
});
