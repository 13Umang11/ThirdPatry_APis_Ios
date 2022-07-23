
import React, {useState} from 'react';
import {
  View,
  Text,
  Share,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import Header from '../customcomponets/Header'

export default function ShareInfo({navigation}) {
  const [message, setmessage] = useState('');
  const [title, settitle] = useState('');
  const Shareinfo = async () => {
    try {
      const result = await Share.share({
        title: title,
        message: message,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          alert('Share info');
        } else {
          alert('Shared');
        }
      } else if (result.action === Share.dismissedAction) {
        alert('Canceled');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
        <Header title="Default Share"  goBack={() =>navigation.goBack()}show={true} />
      <View style={{flex: 1}}>
        <Text
          style={{
            fontSize: 25,
            textAlign: 'center',
            marginVertical: 40,
            color: 'black',
          }}>
          Share
        </Text>
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
          placeholderTextColor={'gray'}
          onChangeText={setmessage}
          value={message}
        />
        <TouchableOpacity
          onPress={Shareinfo}
          style={{...styles.btn, backgroundColor: '#6799db'}}>
          <Text style={styles.btntext}>Share</Text>
        </TouchableOpacity>
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
