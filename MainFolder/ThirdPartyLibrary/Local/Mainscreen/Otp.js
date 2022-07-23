import React, {useState} from 'react';
import {View, Text, Image, KeyboardAvoidingView} from 'react-native';
import Textinput from '../Componet/Textinput';
import Btn from '../Componet/Btn';
import Link from '../Componet/Link';

const Otp = () => {
  const [Otp, onOtp] = useState();
  const [password, setpassword] = useState();

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
        title="Code"
        value={password}
        onChangeText={setpassword}
        keyboardType="email-address"
      />

      <Textinput
        title="Password"
        value={Otp}
        onChangeText={onOtp}
        keyboardType="numeric"
      />

      <Btn btn="Login" backcolor="#007ACC" textcolor="black" onpress={null} />

      <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
        <Link text="Resend Code" link={null} />
        <Link text="Back to login Screen" link={null} />
      </View>
    </View>
  );
};

export default Otp;
