import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  Platform,
  ScrollView,
  Button,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll'; //for useing this intall this npm install fbjs

export default function Photos() {
  const [images, setimages] = useState([]);

  useEffect(() => {
    CameraRoll.getPhotos({
      first: 10,
      assetType: 'Videos',
    })
      .then(r => {
        console.log(r.edges);
        setimages(r.edges);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  //   const pinToZoom = item => {
  //     console.log(item);
  //   };

  const RenderItems = ({item, index}) => {
    return (
      <View style={{}} key={index}>
        {/* <TouchableOpacity onPress={() => pinToZoom(item)}> */}
        <Image
          source={{uri: item.node.image.uri}}
          style={{
            height: 107,
            width: 107,
            marginLeft: 10,
            marginTop: 10,
            borderRadius: 10,
          }}
        />
        {/* </TouchableOpacity> */}
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: 'gray'}}>
      <FlatList
        data={images}
        renderItem={RenderItems}
        numColumns={3}
        scrollEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 18,
  },
});
