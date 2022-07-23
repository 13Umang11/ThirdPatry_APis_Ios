import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Modal from 'react-native-modal';
import {close, dele, setting} from '../assets';

const ModalActionSheet = () => {
  const [show, setshow] = useState(false);
  const Show = () => {
    setshow(!show);
  };
  return (
    <View style={{flex: 1}}>
      <Modal
        style={{justifyContent: 'flex-end'}}
        isVisible={show}
        useNativeDriver
        animationIn="slideInUp"
        animationOut="slideOutDown"
        animationInTiming={300}
        animationOutTiming={300}
        backdropColor="black"
        backdropTransitionInTiming={300}
        backdropTransitionOutTiming={300}
        onBackdropPress={Show}
        onBackButtonPress={Show}
        backdropOpacity={0.7}
        swipeDirection={['up', 'down', 'left', 'right']}>
        <View
          style={{
            backgroundColor: 'blue',
            // flex: 1,

            backgroundColor: '#fff',
            borderRadius: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{height: 20, width: 20, margin: 15}}
              source={setting}
            />
            <TouchableOpacity onPress={Show}>
              <Text
                style={{textAlign: 'center', margin: 10, marginLeft: '35%'}}>
                Setting
              </Text>
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row'}}>
            <Image style={{height: 20, width: 20, margin: 15}} source={dele} />
            <TouchableOpacity onPress={Show}>
              <Text
                style={{
                  textAlign: 'center',
                  margin: 10,
                  color: 'red',
                  marginLeft: '35%',
                }}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image style={{height: 20, width: 20, margin: 15}} source={close} />
            <TouchableOpacity style={{alignSelf: 'center'}} onPress={Show}>
              <Text
                style={{textAlign: 'center', margin: 10, marginLeft: '35%'}}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity style={styles.btn} onPress={Show}>
        <Text style={styles.btntext}>Modal ActionSheet</Text>
      </TouchableOpacity>
    </View>
  );
};
export default ModalActionSheet;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#007ACC',
    width: '95%',
    margin: 10,
    alignSelf: 'center',
    borderRadius: 10,
  },
  btntext: {
    textAlign: 'center',
    padding: 15,
    color: 'white',
  },
});
