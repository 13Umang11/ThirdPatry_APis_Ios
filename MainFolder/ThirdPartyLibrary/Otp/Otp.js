import React, {useState, useEffect} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import OTPInputView from '@twotalltotems/react-native-otp-input';

const Otp = () => {
  const [Code, setCode] = useState('');
  const [text, settext] = useState('Enter Your Mobile Number');
  const [text1, settext1] = useState('We will send your conformation code');

  // This state used for not pressing button when otp is not filled

  const [Pin, setPin] = useState(null);

  // for mobile no dissapperance

  const [mono, setmono] = useState('+ 91 (913) 210 4356 ');

  const Pop = () => {
    if (Pin !== null) {
      alert('Your entered otp is:-  ' + Code);
      settext('Enter Code Sent to Your Mobile');
      settext1('We set it to your number  ' + mono);
      setmono(' ');
    } else {
      alert('Enter a Code first');
    }
  };

  return (
    <ImageBackground
      style={{height: '100%'}}
      source={{
        uri: 'https://media.istockphoto.com/photos/aqua-painted-background-picture-id157618601?k=20&m=157618601&s=612x612&w=0&h=pQMfRgQxWiXNPOa2illjsIK-HMWYVj6UCH6u4CqHDjQ=',
      }}>
      <View>
        <Text style={[styles.text, {marginVertical: 40, marginTop: 80}]}>
          {text}
        </Text>
        <Text
          style={{
            padding: 10,
            color: '#000000',
            fontSize: 18,
          }}>
          {text1}
        </Text>
        <Text
          style={{
            padding: 10,
            color: '#000000',
            fontSize: 16,
            fontWeight: 'bold',
          }}>
          {mono}
        </Text>
        <OTPInputView
          style={{width: '90%', height: 50, margin: 10}}
          pinCount={6}
          codeInputFieldStyle={styles.underlineStyleBase}
          placeholderCharacter="#"
          autoFocusOnLoad={false}
          // secureTextEntry={true}
          keyboardType="number-pad"
          codeInputHighlightStyle={styles.underlineStyleHighLighted}
          onCodeFilled={Pin => {
            setCode(Pin);
            setPin(Pin);
          }}
        />
        <TouchableOpacity
          style={[styles.btn, {marginTop: '30%'}]}
          onPress={Pop}
          accessibilityHint="Back to Login Screen">
          <Text style={styles.btntext}> Next </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default Otp;

const styles = StyleSheet.create({
  borderStyleBase: {
    width: 30,
    height: 45,
  },

  borderStyleHighLighted: {
    borderColor: '#4259E0',
    borderBottomWidth: 4,
  },

  underlineStyleBase: {
    width: 30,
    height: 45,
    borderBottomWidth: 2,
    borderBottomColor: '#4259E0',
    color: '#4259E0',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },

  underlineStyleHighLighted: {
    borderBottomColor: '#4259E0',
  },
  text: {
    fontWeight: 'bold',
    textShadowColor: 'grey',
    shadowRadius: 10,
    fontSize: 30,
    color: '#000000',
    padding: 10,
  },
  btn: {
    backgroundColor: '#89CFF0',
    textAlign: 'center',
    padding: 15,
    margin: 10,
    borderRadius: 50,
  },
  btntext: {
    color: 'black',
    marginLeft: '42%',
  },
});
