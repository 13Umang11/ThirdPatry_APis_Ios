import React, {useState} from 'react';
import {View, Text, Image, KeyboardAvoidingView} from 'react-native';
import Textinput from '../Componet/Textinput';
import Btn from '../Componet/Btn';
import Link from '../Componet/Link';

const Login = () => {
  const [username, onusername] = useState();
  const [password, onpassword] = useState();

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
        Login
      </Text>
      <Textinput title="Username" value={username} onChangeText={onusername} />

      <Textinput
        title="Password"
        secureTextEntry={true}
        maxLength={10}
        value={password}
        onChangeText={onpassword}
      />
      <Link
        text="Forgot Password?"
        textalign="right"
        link={null}
        margintop={0}
      />

      <Btn btn="Login" backcolor="#007ACC" textcolor="black" onpress={null} />

      <Text style={{textAlign: 'center', color: 'black'}}>
        Or create account using social media
      </Text>

      <Btn
        btn="Facebook"
        backcolor="#5890FF"
        textcolor="black"
        onpress={null}
      />

      <View>
        <Text style={{textAlign: 'center', color: '#000000'}}>
          Don`t have an account?
        </Text>

        <Link text="Sign Up" margintop={0} textalign="center" />
      </View>
    </View>
  );
};

export default Login;
