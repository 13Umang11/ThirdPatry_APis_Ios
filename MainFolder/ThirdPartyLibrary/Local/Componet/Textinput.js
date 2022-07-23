import React from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const Textinput = ({title, ...others}) => {
  return (
    <View style={{marginVertical: 10}}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        style={styles.textInput}
        placeholder={title}
        placeholderTextColor="#000000"
        {...others}></TextInput>
    </View>
  );
};

export default Textinput;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    backgroundColor: 'rgba(255,255,255,0.3)',
    margin: 10,
    borderRadius: 50,
    padding: 10,
  },
  text: {
    color: 'black',
    textAlign: 'left',
    marginLeft: 10,
  },
});
