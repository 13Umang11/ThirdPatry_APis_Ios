import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  PermissionsAndroid,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CameraRoll from '@react-native-community/cameraroll';
import MerryPhotoView from '@merryjs/photo-viewer';

const {height, width} = Dimensions.get('screen');

export default function Photos({navigation}) {
  const [uris, seturis] = useState([]);
  const [indexSelected, setIndexSelected] = useState(0);
  const [visible, setvisible] = useState(false);
  //   const isFocused = useIsFocused();
  var temp = [];

  useEffect(() => {
    Images();
  }, []);

  const Images = () => {
    // console.log('route', route);
    CameraRoll.getPhotos({
      first: 430,
      assetType: 'Photos',
    }).then(image => {
      var img = image.edges;
      img.map(item => {
        var files = {
          source: item.node.image,
        };
        temp.push(files);
        // console.log('files', files);
        seturis(temp);
      });
      // console.log('uris', uris);
    });
    console.log('outer uris', uris);
    // console.log('images', images);
  };

  // useEffect(() => {
  //   PermissionsAndroid.requestMultiple([
  //     'android.permission.READ_EXTERNAL_STORAGE',
  //     // 'android.permission.WRITE_EXTERNAL_STORAGE',
  //   ]);
  //   CameraRoll.getPhotos({
  //     first: 200,
  //     assetType: 'Photos',
  //   })
  //     .then(r => {
  //       console.log(r.edges);
  //       setimages(r.edges);
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // }, []);

  const Swipeimage = index => {
    setvisible(!visible);
    setIndexSelected(index);
  };

  const RenderItems = ({item, index}) => {
    return (
      <View key={index}>
        <TouchableOpacity onPress={() => Swipeimage(index)}>
          <Image
            source={{uri: item.source?.uri}}
            style={{
              height: height / 7.5,
              width: width / 3.4,
              marginLeft: 10,
              marginBottom: 10,
              borderRadius: 10,
            }}
          />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#e3e2e1'}}>
      <View style={styles.banner}>
        <Text style={styles.title}>Gallery</Text>
      </View>

      <MerryPhotoView
        visible={visible}
        data={uris}
        // hideStatusBar={true}
        hideCloseButton={true}
        hideShareButton={true}
        initial={indexSelected}
        onDismiss={e => {
          setvisible(false);
          console.log(e);
        }}
        onChange={data => {
          setIndexSelected(data.index);
        }}
      />
      {/* <FlatList
        data={uris}
        renderItem={RenderItems}
        numColumns={3}
        scrollEnabled={true}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 18,
  },
  banner: {
    backgroundColor: '#FF7F7F',
    justifyContent: 'center',
    height: 50,
    width: '100%',
    marginBottom: 10,
  },
  title: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
