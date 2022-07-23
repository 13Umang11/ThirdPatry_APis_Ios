import React, {useState} from 'react';
import {
  View,
  Text,
  Dimensions,
  ScaledSize,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';

import {
  responsiveFontSize,
  responsiveHeight,
  responsiveScreenFontSize,
  responsiveScreenHeight,
  responsiveScreenWidth,
  responsiveWidth,
  useDimensionsChange,
  useResponsiveFontSize,
  useResponsiveHeight,
  useResponsiveScreenFontSize,
  useResponsiveScreenHeight,
  useResponsiveScreenWidth,
  useResponsiveWidth,
} from './ResponsiveSize';

export default function TextDemo() {
  const [size, setsize] = useState('1');
  return (
    <View>
      <TextInput style={styles.textInput} onChangeText={setsize} value={size} />
      <Text style={{fontSize: responsiveFontSize(size)}}>
        responsiveFontSize
      </Text>
      <Text style={{fontSize: responsiveScreenFontSize(size)}}>
        responsiveScreenFontSize
      </Text>
      <Text style={{fontSize: useResponsiveFontSize(size)}}>
        useResponsiveFontSize
      </Text>
      <Text style={{fontSize: useResponsiveScreenFontSize(size)}}>
        useResponsiveScreenFontSize
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    borderRadius: 20,
    padding: 10,
    margin: 10,
    borderWidth: 1,
  },
});
