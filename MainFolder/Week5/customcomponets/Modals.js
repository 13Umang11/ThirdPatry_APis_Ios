import React, {useState} from 'react';
import {View, Dimensions, Image, TouchableOpacity} from 'react-native';
import Pinchable from 'react-native-pinchable';
import Modal from 'react-native-modal';
import {close} from '../assets/icons/Icons';
import FastImage from 'react-native-fast-image';
import ImageZoom from 'react-native-image-pan-zoom';

export default function Modals({
  isVisible,
  onBackButtonPress,
  onBackdropPress,
  uri,
  closebtn,
}) {
  return (
    <View style={{flex: 1}}>
      <Modal
        style={{flex: 1}}
        isVisible={isVisible}
        animationIn="fadeIn"
        animationOut="fadeOut"
        onBackButtonPress={onBackButtonPress}
        onBackdropPress={onBackdropPress}
        useNativeDriver={true}
        coverScreen={true}
        backdropOpacity={0.9}>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity onPress={closebtn}>
            <Image
              source={close}
              style={{
                // position: 'absolute',
                height: 32,
                width: 32,
                // top: 20,
                bottom: 10,
                tintColor: 'red',
              }}
            />
          </TouchableOpacity>

          <View>
            {/* <Pinchable> */}
            <ImageZoom
              style={{
                alignSelf: 'center',
                // bottom: 55,
                // position: 'absolute',
                // justifyContent: 'center',
              }}
              cropWidth={Dimensions.get('window').width}
              cropHeight={Dimensions.get('window').height}
              imageWidth={435}
              useNativeDriver={true}
              imageHeight={435}>
              <FastImage //for stoping image fliking in resized mode contain
                source={{uri: uri, priority: 'high'}}
                style={{
                  width: '100%',
                  height: '99%',
                }}
                resizeMode="contain"
              />
            </ImageZoom>

            {/* </Pinchable> */}
          </View>
        </View>
      </Modal>
    </View>
  );
}
