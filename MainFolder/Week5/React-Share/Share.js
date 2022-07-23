import React, {useState} from 'react';
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {person} from '../assets/icons/Icons';
import Share, {Social} from 'react-native-share';
import Header from '../customcomponets/Header';

export default function ShareInfo({navigation}) {
  const [image, setimage] = useState('');
  const [message, setmessage] = useState('');
  const [title, settitle] = useState('');
  const [url, seturl] = useState('');
  const [type, settype] = useState('');
  const Shareinfo = () => {
    var options = {
      message: message + '\n' + url,
      title: 'Invite by', //on share dialog
      subject: 'Share Link',
      failOnCancel: false,
      image: image,
      url: image,
      // email:'email address',
      social: Share.Social.WHATSAPP,
    };

    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

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

  return (
    <SafeAreaView>
    <View>
       <Header title="Share"  goBack={() =>navigation.goBack()}show={true} />
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
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

        {/* <Text style={styles.title}>Title :</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Title"
          onChangeText={settitle}
          value={title}
        /> */}
        <Text style={styles.title}>Message :</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Message"
          onChangeText={setmessage}
          placeholderTextColor={'gray'}
          value={message}
        />
        <Text style={styles.title}>URL :</Text>
        <TextInput
          style={styles.textinput}
          placeholder="Url"
          onChangeText={seturl}
          placeholderTextColor={'gray'}
          value={url}
        />
        <TouchableOpacity
          onPress={Shareinfo}
          style={{...styles.btn, backgroundColor: '#6799db'}}>
          <Text style={styles.btntext}>Share</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  btn: {
    margin: 10,
    marginHorizontal: 15,
    borderRadius: 20,
  },
  btntext: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
  },
  imageview: {
    marginTop: 50,
    marginVertical: 10,
    borderRadius: 100,
    borderColor: '#001854',
    borderWidth: 1,
    padding: 5,
    alignSelf: 'center',
  },
  title: {
    margin: 10,
    fontSize: 20,
    color: 'black',
  },
  textinput: {
    margin: 10,
    padding: 15,
    backgroundColor: 'white',
    borderRadius: 10,
  },
});
