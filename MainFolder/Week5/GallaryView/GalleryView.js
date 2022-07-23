import React, {useState, useEffect} from 'react';
import {
  View,
  PermissionsAndroid,
  Image,
  FlatList,
  StyleSheet,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll'; //for useing this intall this npm install fbjs
import {useIsFocused} from '@react-navigation/native';
import Lightbox from 'react-native-lightbox-v2';
import Pinchable from 'react-native-pinchable';
// import Modal from 'react-native-modal';
// import {PinchGestureHandler, State} from 'react-native-gesture-handler';
// import Modals from './Modals';

export default function Photos() {
  // const {width} = Dimensions.get('screen');
  const [images, setimages] = useState([]);
  const [image, setimage] = useState('');
  const [show, setshow] = useState(false);
  const isFocused = useIsFocused();

  useEffect(() => {
    PermissionsAndroid.requestMultiple([
      'android.permission.READ_EXTERNAL_STORAGE',
      // 'android.permission.WRITE_EXTERNAL_STORAGE',
    ]);
    CameraRoll.getPhotos({
      first: 50,
      assetType: 'Photos',
    })
      .then(r => {
        console.log(r.edges);
        setimages(r.edges);
      })
      .catch(err => {
        console.log(err);
      });
  }, [isFocused]);

  const PinTOZoom = item => {
    console.log('item', item);
    setimage(item.node.image.uri);
    setshow(true);
  };

  const Show = () => {
    setshow(false);
  };

  const RenderItems = ({item, index}) => {
    return (
      <View key={index}>
        {/* <TouchableOpacity
          onPress={() => {
            PinTOZoom(item);
          }}> */}
        <Lightbox
          underlayColor="white"
          renderContent={() => {
            return (
              <Pinchable>
                <Image
                  source={{
                    uri: item.node.image.uri,
                  }}
                  style={{
                    alignSelf: 'center',
                    height: '90%',
                    width: '100%',

                    borderRadius: 10,
                  }}
                />
              </Pinchable>
            );
          }}>
          <Pinchable>
            <Image
              source={{
                uri: item.node.image.uri,
              }}
              style={{
                alignSelf: 'center',
                height: 107,
                width: 110,
                marginLeft: 10,
                marginTop: 10,
                borderRadius: 10,
              }}
            />
          </Pinchable>
        </Lightbox>
        {/* </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={images}
        renderItem={RenderItems}
        numColumns={3}
        scrollEnabled={true}
      />

      {/* <Modals
        isVisible={show}
        onBackButtonPress={Show}
        onBackdropPress={Show}
        uri={image}
        onSwipeComplete={Show}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 18,
  },
});
