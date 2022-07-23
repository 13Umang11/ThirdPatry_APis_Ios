import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Header from '../customcomponets/Header';
import ImagePicker from 'react-native-image-crop-picker';
import {person} from '../assets/icons/Icons';

export default function Create({navigation, route}) {
  const [filename, setfilename] = useState('');
  const [filetype, setfiletype] = useState('');
  const [filedata, setfiledata] = useState('');
  const [type, settype] = useState(false);
  const [image, setimage] = useState('');
  var tempfiles = [];

  var RNFS = require('react-native-fs');
  var path = RNFS.DocumentDirectoryPath + `/${filename}.${filetype}`;

  const CreateFile = () => {
    if (filename != '' && filetype != '') {
      RNFS.writeFile(path, `${filedata}`, 'utf8')
        .then(() => {
          console.log('FILE WRITTEN!');
          // tempfiles.push({
          //   name: `${filename}`,
          //   filename: `${filename}.${filetype}`,
          //   filepath: RNFS.DocumentDirectoryPath + `/${filename}.${filetype}`,
          //   filetype: `${filetype}`,
          // });
          console.log('file array created');
        })
        .catch(err => {
          console.log('error', err.message);
        });
    } else {
      alert('Enter File Name & File Type');
    }
  };

  const ReadFile = () => {
    if (filename != '' && filetype != '') {
      RNFS.readFile(path)
        .then(result => {
          console.log('GOT RESULT', result);
          return Promise.all([RNFS.stat(result[0].path), result[0].path]);
        })
        .then(statResult => {
          console.log('statResult', statResult);
          if (statResult[0].isFile()) {
            console.log('statResult', statResult[0]);
            // return RNFS.readFile(statResult[0], 'utf8');
          }
          return 'no file';
        })
        .then(contents => {
          console.log(contents);
        })
        .catch(err => {
          console.log(err.message, err.code);
        });
    } else {
      alert('Enter File Name & File Type');
    }
  };

  const UploadFile = async () => {
    var uploadUrl = 'https://eowx1xnbyf7oi0y.m.pipedream.net';
    var files = [
      {
        name: `${filename}`,
        filename: `${filename}.${filetype}`,
        filepath: RNFS.DocumentDirectoryPath + `/${filename}.${filetype}`,
        filetype: `${filetype}`,
      },
    ];

    var uploadBegin = response => {
      console.log(response);
      var jobId = response.jobId;
      console.log('UPLOAD HAS BEGUN! JobId: ' + jobId);
    };

    var uploadProgress = response => {
      console.log('response', response);
      var percentage = Math.floor(
        (response.totalBytesSent / response.totalBytesExpectedToSend) * 100,
      );
      console.log('UPLOAD IS ' + percentage + '% DONE!');
    };
    RNFS.uploadFiles({
      toUrl: uploadUrl,
      files: files,
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      fields: {
        Data: `${filedata}`,
      },
      begin: uploadBegin,
      progress: uploadProgress,
    })
      .promise.then(response => {
        if (response.statusCode == 200) {
          console.log('FILES UPLOADED!');
        } else {
          console.log('SERVER ERROR');
        }
      })
      .catch(err => {
        if (err.description === 'cancelled') {
          // cancelled by user
        }
        console.log(err);
      });
  };

  // const ImageCrop = () => {
  //   ImagePicker.openPicker({
  //     width: 200,
  //     height: 200,
  //     cropping: true,
  //   }).then(image => {
  //     setfiledata(image.path);
  //     setfiletype(image.mime);
  //     console.log(image);
  //   });
  // };

  const Downloadfile = () => {
    try {
      RNFS.downloadFile({
        fromUrl: 'https://eowx1xnbyf7oi0y.m.pipedream.net',
        toFile: `${RNFS.DocumentDirectoryPath}/react-native.file`,
      }).promise.then(r => {
        console.log(r);
        alert('Download in Progress');
      });
      console.log('Downloadfile');
    } catch (e) {
      console.log('error', e);
    }
  };

  const DeleteFile = () => {
    if (filename != '' && filetype != '') {
      RNFS.unlink(path)
        .then(() => {
          console.log('FILE DELETED');
        })
        .catch(err => {
          console.log('error', err.message);
        });
    } else {
      alert('Enter File Name & File Type');
    }
  };

  return (
    <View>
      <View style={styles.subview}>
        <Text style={styles.text}>File Name :-</Text>
        <TextInput
          style={styles.textinput}
          placeholder="File Name"
          onChangeText={setfilename}
          value={filename}
        />
        <Text style={{...styles.text, marginVertical: 25, fontSize: 26}}>
          .
        </Text>
        <TextInput
          style={{...styles.textinput, width: 65}}
          placeholder=" Type"
          autoCapitalize="none"
          onChangeText={setfiletype}
          value={filetype}
        />
      </View>
      {/* {!type ? ( */}
      <View>
        <Text style={styles.text}>File Text :-</Text>
        <TextInput
          style={{
            ...styles.textinput,
            ...styles.textdata,
          }}
          placeholder="File Text"
          multiline={true}
          autoCapitalize="words"
          onChangeText={setfiledata}
          vale={filedata}
        />
      </View>
      {/* ) : (
        <View>
          <TouchableOpacity activeOpacity={0.3} onPress={ImageCrop}>
            <View style={styles.imageview}>
              <Image
                style={{
                  height: 130,
                  width: 130,
                  borderRadius: 100,
                }}
                source={filedata ? {uri: filedata} : person}
              />
            </View>
          </TouchableOpacity>
        </View>
      )} */}
      <View style={{...styles.subview, marginVertical: 10, marginTop: 40}}>
        <TouchableOpacity
          onPress={CreateFile}
          style={{
            ...styles.btn,
            marginHorizontal: 10,
            backgroundColor: '#9e71de',
          }}
          activeOpacity={0.5}>
          <Text style={{...styles.btntext, color: 'white'}}>Create</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={ReadFile}
          activeOpacity={0.5}
          style={{...styles.btn, backgroundColor: '#60a1d6'}}>
          <Text style={{...styles.btntext, color: 'white'}}>Read</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.subview}>
        <TouchableOpacity
          onPress={DeleteFile}
          activeOpacity={0.5}
          style={{
            ...styles.btn,
            marginHorizontal: 10,
            backgroundColor: '#eb5481',
          }}>
          <Text style={{...styles.btntext, color: 'white'}}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={UploadFile}
          activeOpacity={0.5}
          style={{...styles.btn, backgroundColor: '#53c996'}}>
          <Text style={{...styles.btntext, color: 'white'}}>Upload</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={Downloadfile}
        activeOpacity={0.5}
        style={{
          ...styles.btn,
          backgroundColor: '#d69e24',
          width: 340,
          margin: 10,
        }}>
        <Text style={{...styles.btntext, color: 'white'}}>Download</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity
        onPress={() => settype(!type)}
        activeOpacity={0.5}
        style={{
          ...styles.btn,
          backgroundColor: '#97cee8',
          width: 340,
          marginHorizontal: 10,
        }}>
        <Text style={{...styles.btntext, color: 'black'}}>Upload An Image</Text>
      </TouchableOpacity> */}
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 16,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  textinput: {
    paddingHorizontal: 10,
    fontSize: 16,
    color: 'black',
    borderColor: 'black',
    borderBottomWidth: 1,
    marginTop: 12,
    height: 40,
    width: 150,
  },
  textdata: {
    marginHorizontal: 15,
    borderWidth: 1,
    borderRadius: 20,
    height: 100,
    width: 330,
    marginTop: -10,
  },
  subview: {
    flexDirection: 'row',
  },
  btn: {
    width: 165,
    padding: 15,
    borderRadius: 10,
  },
  btntext: {
    textAlign: 'center',
    color: 'black',
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
