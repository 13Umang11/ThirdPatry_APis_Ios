import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';

const Btn = ({btn, backcolor, textcolor, onpress}) => {
  return (
    <TouchableOpacity
      style={[styles.btn, {backgroundColor: backcolor}]}
      onPress={onpress}>
      <Text style={[styles.btntext, {color: textcolor}]}>{btn}</Text>
    </TouchableOpacity>
  );
};
export default Btn;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 50,
    padding: 12,
    margin: 10,
    elevation: 3,
    marginVertical: 30,
  },
  btntext: {
    textAlign: 'center',
  },
});
