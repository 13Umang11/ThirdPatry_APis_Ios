import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';

export default function CustomModal({
  animationIn,
  animationOut,
  onPress,
  isVisible,
}) {
  return (
    <View>
      <Modal
        isVisible={isVisible}
        // style={}
        animationIn={animationIn}
        animationOut={animationOut}
        animationInTiming={500}
        animationOutTiming={800}
        backdropColor="black"
        backdropTransitionInTiming={600}
        backdropTransitionOutTiming={800}
        onBackdropPress={onPress}
        onBackButtonPress={onPress}
        backdropOpacity={0}
        swipeDirection={['up', 'down', 'left', 'right']}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            elevation: 3,
            marginVertical: '70%',
            margin: 10,
          }}>
          <Text
            style={{
              marginTop: 15,
              textAlign: 'center',
              fontSize: 20,
              fontWeight: 'bold',
              color: 'black',
            }}>
            Do you want to <Text style={{color: 'red'}}>Delete</Text> this
            {'\n'}
            Account?
          </Text>
          <Text style={{color: 'black', marginTop: 20, textAlign: 'center'}}>
            You cannot undo this action
          </Text>
          <View style={{flexDirection: 'row', margin: 10}}>
            <TouchableOpacity
              onPress={onPress}
              style={{
                borderTopWidth: 1,
                borderRightWidth: 1,
                opacity: 0.4,
                width: '50%',
              }}>
              <Text
                style={{
                  color: 'blue',
                  textAlign: 'center',
                  padding: 10,
                  fontWeight: 'bold',
                }}>
                Cancal
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPress}
              style={{
                borderTopWidth: 1,

                opacity: 0.4,
                width: '50%',
              }}>
              <Text
                style={{
                  color: 'red',
                  fontWeight: 'bold',
                  textAlign: 'center',
                  padding: 10,
                }}>
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}
