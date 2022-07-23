import React, {useEffect, useState, useLayoutEffect} from 'react';
import {
  Text,
  View,
  Button,
  Dimensions,
  Image,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import {back, fullscreen, next, options, pause, play} from '../assets/index';

const {height, width} = Dimensions.get('screen');

export default function VideoOrientation() {
  const [onpause, setpause] = useState(false);
  const [color, setcolor] = useState('black');
  const [position, setposition] = useState('PORTRAIT');
  const [fullScreen, setfullScreen] = useState(false);

  return (
    <View style={{flex: 1}}>
      {fullScreen && (
        <View style={{...styles.bar}}>
          <OrientationLocker orientation="LANDSCAPE" />
          <TouchableOpacity style={styles.icon}>
            <Image
              source={options}
              style={{
                ...styles.options,
                height: 25,
                width: 25,
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={back} style={styles.options} />
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => setcolor('red')}
            onPressOut={() => setcolor('black')}
            onPress={() => setpause(!onpause)}
            style={styles.icon}>
            <Image
              source={onpause ? pause : play}
              style={{
                ...styles.options,
                tintColor: color,
                height: 25,
                width: 25,
              }}
            />
            {console.log(onpause)}
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <Image source={next} style={styles.options} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setfullScreen(!fullScreen)}
            style={styles.icon}>
            <Image
              source={fullscreen}
              style={{
                ...styles.options,
                height: 25,
                width: 25,
              }}
            />
          </TouchableOpacity>
        </View>
      )}

      <View style={{...styles.bar}}>
        <OrientationLocker
          orientation="PORTRAIT"
          onChange={orientation => setposition(orientation)}
          onDeviceChange={orientation =>
            console.log('onDeviceChange', orientation)
          }
        />
        <TouchableOpacity style={styles.icon}>
          <Image
            source={options}
            style={{
              ...styles.options,
              height: 25,
              width: 25,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Image source={back} style={styles.options} />
        </TouchableOpacity>
        <TouchableOpacity
          onPressIn={() => setcolor('red')}
          onPressOut={() => setcolor('black')}
          onPress={() => setpause(!onpause)}
          style={styles.icon}>
          <Image
            source={onpause ? pause : play}
            style={{
              ...styles.options,
              tintColor: color,
              height: 25,
              width: 25,
            }}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon}>
          <Image source={next} style={styles.options} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setfullScreen(!fullScreen)}
          style={styles.icon}>
          <Image
            source={fullscreen}
            style={{
              ...styles.options,
              height: 25,
              width: 25,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bar: {
    backgroundColor: 'gray',
    height: 50,
    width: width / 1.06,
    bottom: 10,
    alignSelf: 'center',
    borderRadius: 10,
    position: 'absolute',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  icon: {
    justifyContent: 'center',
  },
  options: {
    height: 20,
    width: 20,
    tintColor: 'black',
  },
});
