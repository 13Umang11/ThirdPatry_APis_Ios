import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

import ActionSheet from 'react-native-action-sheet-modal';

const App = () => {
  const [visible, setVisible] = useState(false);
  const [result, setResult] = useState('');
  const list = [
    {
      name: 'Choose from camera',
      value: 'Choose from camera',
      extraData: {type: 'video'},
    },
    {
      name: 'Choose from gallery',
      value: 'Choose from gallery',
      extraData: {type: 'video'},
    },
  ];

  function onChange(value, extraData) {
    setResult(value);
    onClose();
  }

  function onClose() {
    setVisible(false);
  }

  function modalShow() {
    alert('hello');
  }

  return (
    <>
      <ActionSheet
        options={list}
        isVisible={visible}
        onClose={() => onClose()}
        onChange={onChange}
        hideCancel={false}
        cancelText="close"
        cancelTextStyle={{fontSize: 15}}
        cancelContainerStyle={{backgroundColor: 'white'}}
        optionsTextStyle={{fontSize: 15}}
        optionsContainerStyle={{backgroundColor: 'white'}}
        modalProps={{animationInTiming: 800, onModalShow: () => modalShow()}}
      />
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => setVisible(true)}
          style={styles.button}>
          <Text>Open</Text>
        </TouchableOpacity>
        <Text>{result}</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  button: {
    paddingHorizontal: 20,
    marginVertical: 20,
    paddingVertical: 10,
    backgroundColor: 'cyan',
    borderRadius: 10,
  },
});

export default App;
