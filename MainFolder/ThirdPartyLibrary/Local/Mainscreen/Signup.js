import React, {useState} from 'react';
import {View, Text, KeyboardAvoidingView} from 'react-native';

const Signup = () => {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const [email, setemail] = useState();
  const [confirm, setconfrim] = useState();

  return (
    <View style={{flex: 1, marginTop: 50}}>
      <KeyboardAvoidingView behavior="position">
        <Text
          style={{
            fontSize: 18,
            color: 'black',
            textAlign: 'center',
            fontWeight: 'bold',
            marginTop: 40,
            marginBottom: 10,
          }}>
          Sign Up
        </Text>
        <Textinput
          title="Username"
          value={username}
          onChangeText={setusername}
        />

        <Textinput
          title="Email Id"
          value={email}
          onChangeText={setemail}
          keyboardType="email-address"
        />

        <Textinput
          title="Password"
          secureTextEntry={true}
          maxLength={10}
          value={password}
          onChangeText={setpassword}
        />

        <Textinput
          title="Confirm Password"
          secureTextEntry={true}
          maxLength={10}
          value={confirm}
          onChangeText={setconfrim}
        />

        <Text style={{textAlign: 'center', color: 'black'}}>
          Here it's <Text style={{color: 'orange'}}>Privacy policy</Text> and{' '}
          <Text style={{color: 'orange', borderBottomWidth: 1}}>
            User guide
          </Text>{' '}
        </Text>

        <Btn
          btn="Sign Up"
          backcolor="#007ACC"
          textcolor="black"
          onpress={null}
        />

        <View>
          <Text style={{textAlign: 'center', color: '#000000'}}>
            If you have an already have an account
          </Text>

          <Link text="Login" margintop={0} textalign="center" />
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default Signup;
