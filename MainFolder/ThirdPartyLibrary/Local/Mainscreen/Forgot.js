import React, {useState} from 'react';
import {View, Text, Image, KeyboardAvoidingView} from 'react-native';
import Textinput from '../Componet/Textinput';
import Btn from '../Componet/Btn';

const Forgot = () => {
  const [forgot, onforgot] = useState();

  return (
    <View style={{flex: 1, marginTop: 40}}>
      <Text
        style={{
          fontSize: 18,
          color: 'black',
          textAlign: 'center',
          fontWeight: 'bold',
          marginTop: 50,
        }}>
        Forgot Password
      </Text>

      <Textinput
        title="Email Id"
        value={forgot}
        onChangeText={onforgot}
        keyboardType="email-address"
      />

      <Btn btn="Send" backcolor="#007ACC" textcolor="black" onpress={null} />
    </View>
  );
};

export default Forgot;
