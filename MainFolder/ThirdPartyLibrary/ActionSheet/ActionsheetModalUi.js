import React, {useState} from 'react';
import {
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  Text,
} from 'react-native';
import Actionsheet from 'react-native-action-sheet-modal';

const ActionsheetModal = () => {
  const [show, setshow] = useState(false);
  const [select, onselect] = useState('');
  const [full, onfull] = useState();
  const [last, onlast] = useState('');

  const list = [
    {
      name: 'Choose from camera',
      value: 'Camera',
    },
    {
      name: 'Choose from gallery',
      value: 'Gallery',
    },
  ];
  const Show = () => {
    setshow(true);
  };
  const onchange = (value, extraData) => {
    onselect(value);
    setshow(false);
  };

  return (
    <View>
      <Actionsheet
        options={list}
        isVisible={show}
        onClose={() => setshow(false)}
        onChange={onchange}
        hideCancel={false}
        cancelText="Close"
        cancelTextStyle={{fontSize: 15}}
        cancelContainerStyle={{backgroundColor: 'white'}}
        optionsTextStyle={{fontSize: 15}}
        optionsContainerStyle={{backgroundColor: 'white'}}
        modalProps={{
          animationInTiming: 800,
        }}></Actionsheet>
      <ImageBackground
        style={styles.imageback}
        source={{uri: 'https://wallpaperaccess.com/full/1672438.jpg'}}>
        <View>
          <TouchableOpacity onPress={Show}>
            <Image
              style={styles.image}
              source={{
                uri: 'https://cdn2.iconfinder.com/data/icons/people-flat-design/64/Add-User-Profile-New-More-Plus-Contact-128.png',
              }}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={styles.text}>Full Name :</Text>
        <TextInput
          style={styles.textin}
          placeholder="Full Name"
          placeholderTextColor="black"
          autoCapitalize="words"
          onChangeText={onfull}
          value={full}></TextInput>
      </View>
      <View style={{flexDirection: 'row', marginTop: 20}}>
        <Text style={styles.text}>Last Name :</Text>
        <TextInput
          style={styles.textin}
          placeholder="Last Name"
          placeholderTextColor="black"
          onChangeText={onlast}
          value={last}
          autoCapitalize="words"></TextInput>
      </View>
      <TouchableOpacity onPress={null} style={styles.btn}>
        <Text style={{textAlign: 'center', color: 'black'}}>Save</Text>
      </TouchableOpacity>
      {/* <Text>{select}</Text> */}
    </View>
  );
};

export default ActionsheetModal;

const styles = StyleSheet.create({
  image: {
    borderRadius: 100,
    height: 110,
    width: 100,
    margin: 10,
  },
  imageback: {
    height: 200,
    width: '100%',
  },
  textin: {
    width: '50%',
    borderColor: 'black',
    borderRadius: 50,
    margin: 10,
    padding: 10,
    borderWidth: 1,
  },
  text: {
    margin: 10,
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 10,
  },
  btn: {
    backgroundColor: 'grey',
    margin: 10,
    borderRadius: 30,
    marginVertical: 30,
    padding: 10,
  },
});
