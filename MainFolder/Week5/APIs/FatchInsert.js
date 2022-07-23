import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  StyleSheet,
  Image,
  ActivityIndicator,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {person} from '../assets/icons/Icons';
import ImagePicker from 'react-native-image-crop-picker';
import Header from '../customcomponets/Header';

export default function FatchInsert({navigation, route}) {
  const [loading, setloading] = useState(false);
  const [title, settitle] = useState('InsertUser');
  const [name, setName] = useState('');
  const [email, setemail] = useState('');
  const [id, setid] = useState('');
  const [image, setimage] = useState('');
  const [type, settype] = useState('');

  const ImageCrop = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
    }).then(image => {
      setimage(image.path);
      settype(image.mime);
      console.log(image);
    });
  };

  useEffect(() => {
    settitle('InsertUser');
    if (route.params) {
      settitle('EditUserInfo');
      var routes = route.params.item;
      setName(routes.name);
      setemail(routes.email);
      setimage(routes.profile_pic);
      setid(routes.user_id);
    }
  }, []);

  const InsertData = async () => {
    if (name && email && image) {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(validRegex)) {
        let formdata = new FormData();
        formdata.append('name', name);
        formdata.append('email', email.trim());
        formdata.append('profile_pic', {
          name: 'profile_pic.jpg',
          type: type,
          uri: image,
        });
        try {
          // setloading(true);
          const response = await fetch(
            'http://192.168.29.72/Practical_Api/api/add_user',
            {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'multipart/form-data',
                Token:
                  'dyGyy4ST5P8:APA91bFDJ_X9qdRcWvdAnXxnrKXU0DlVUpGf5CQez4mLSn9y6vo0qQUslK2Zj2YLO2eEH-x7K6dyf40Ltd5aCGoNs9Kk2ZRx_oCb88D3l_53SVqjhdKlLKz0enqdtvxDN3K0lg_eISlc',
              },
              body: formdata,
            },
          );
          const json = await response.json();
          console.log(json);
          navigation.navigate('FatchRead');
          // setloading(false);
        } catch (error) {
          console.error('error', error);
          // setloading(false);
        }
        // setloading(false);
      } else {
        alert(' Enter Valid email address!');
      }
      // setloading(false);
    } else if (!name) {
      alert('Enter Name');
    } else if (!email) {
      alert('Enter Email');
    } else if (!image) {
      alert('Pick Profile pic');
    } else {
      alert('Check All Details are filled or not');
    }
  };

  const EditUser = async () => {
    if (name && email && image) {
      var validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (email.match(validRegex)) {
    // setloading(true);
    console.log(id);

    const raw = {
      user_id: id,
      name: name,
      email: email,
    };
    console.log(JSON.stringify(raw));
    try {
      const response = await fetch(
        'http://192.168.29.72/Practical_Api/api/edit_user_details',
        {
          method: 'PUT',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Token:
              'dyGyy4ST5P8:APA91bFDJ_X9qdRcWvdAnXxnrKXU0DlVUpGf5CQez4mLSn9y6vo0qQUslK2Zj2YLO2eEH-x7K6dyf40Ltd5aCGoNs9Kk2ZRx_oCb88D3l_53SVqjhdKlLKz0enqdtvxDN3K0lg_eISlc',
          },
          body: JSON.stringify(raw),
        },
      );
      var routes = route.params.item;
      if (image != routes.profile_pic) {
        changeProfile();
      }
      const json = await response.json();
      console.log(json);
      navigation.navigate('FatchRead');
      // setloading(false);
    } catch (error) {
      console.error('error', error);
      // setloading(false);
    }
  }
  else {
    alert(' Enter Valid email address!');
  }
  // setloading(false);
} else if (!name) {
  alert('Enter Name');
} else if (!email) {
  alert('Enter Email');
} else if (!image) {
  alert('Pick Profile pic');
} else {
  alert('Check All Details are filled or not');
}
  };

  const changeProfile = async () => {
    // setloading(true);
    let formdata = new FormData();
    formdata.append('user_id', id);
    formdata.append('profile_pic', {
      name: 'profile_pic.jpg',
      type: type,
      uri: image,
    });

    try {
      const response = await fetch(
        'http://192.168.29.72/Practical_Api/api/change_profile_pic',
        {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'multipart/form-data',
            Token:
              'dyGyy4ST5P8:APA91bFDJ_X9qdRcWvdAnXxnrKXU0DlVUpGf5CQez4mLSn9y6vo0qQUslK2Zj2YLO2eEH-x7K6dyf40Ltd5aCGoNs9Kk2ZRx_oCb88D3l_53SVqjhdKlLKz0enqdtvxDN3K0lg_eISlc',
          },
          body: formdata,
        },
      );
      const json = await response.json();
      console.log(json);
      // setloading(false);
    } catch (error) {
      console.error('error', error);
      // setloading(false);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <View style={{backgroundColor: 'white', flex: 1}}>
          <Header title={title} goBack={() =>navigation.goBack()}show={true} />
          {/* {loading ? (
        <ActivityIndicator
          style={{flex: 1, justifyContent: 'center'}}
          animating={true}
          size="large"
          color="#007ACC"
        />
      ) : ( */}
          <ScrollView style={{flexGrow: 1}} keyboardShouldPersistTaps="always">
            <View style={{marginTop: 30}}>
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

              <Text style={styles.text}>Name :</Text>
              <TextInput
                style={styles.textinput}
                placeholderTextColor={'gray'}
                placeholder="Name"
                onChangeText={setName}
                value={name}></TextInput>

              <Text style={styles.text}>Email Id :</Text>
              <TextInput
                style={styles.textinput}
                placeholderTextColor={'gray'}
                placeholder="Email Id"
                keyboardType="email-address"
                onChangeText={setemail}
                value={email.trim()}></TextInput>
            </View>
            <View style={{flexDirection: 'row', marginTop: 30,alignSelf:'center'}}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.goBack()}>
                <Text style={styles.btntext}>Cancal</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={route.params ? EditUser : InsertData}
                style={[
                  styles.btn,
                  {backgroundColor: '#99c5e0', marginLeft: 20},
                ]}>
                <Text style={styles.btntext}>
                  {route.params ? 'Save' : 'ADD'}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
          {/* )} */}
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

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
    margin: 15,
    padding: 10,
  },
  btn: {
    backgroundColor: '#e39610',
    borderRadius: 20,
    width: 150,
    padding: 5,
    margin: 10,
  },
  btntext: {
    color: 'black',
    textAlign: 'center',
    padding: 10,
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
