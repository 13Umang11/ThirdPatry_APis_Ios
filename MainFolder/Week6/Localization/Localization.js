import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from 'react-native';
import LocalizedStrings from 'react-localization';
import {
  OrientationLocker,
  PORTRAIT,
  LANDSCAPE,
} from 'react-native-orientation-locker';
import {mail, lock} from '../assets/index';
import * as RNLocalize from 'react-native-localize';

export default function Localization({navigation, route}) {
  const [lang, setlang] = useState({
    Login: 'Login',
    'Email Address': 'Email',
    Password: 'Password',
    'Sign Up': 'Sign Up',
    Your: 'Your',
    Forgot: 'Forgot',
  });

  // useEffect(() => {
  //   var templang = RNLocalize.getLocales();
  //   console.log(templang);
  //   var langarray = templang[0];
  //   console.log(langarray.languageCode);
  //   console.log(RNLocalize.getCurrencies());
  //   if (langarray.languageCode === 'en') {
  //     setlang({
  //       Login: 'Login',
  //       'Email Address': 'Email',
  //       Password: 'Password',
  //       'Sign Up': 'Sign Up',
  //       Your: 'Your',
  //       Forgot: 'Forgot',
  //     });
  //   } else if (langarray.languageCode === 'hi') {
  //     setlang({
  //       Login: 'लॉग इन करें',
  //       'Email Address': 'ईमेल पता',
  //       Password: 'पासवर्ड',
  //       'Sign Up': 'साइन अप करें',
  //       Your: 'आप',
  //       Forgot: 'भूल गए',
  //     });
  //   } else if (langarray.languageCode === 'gu') {
  //     setlang({
  //       Login: 'પ્રવેશ કરો',
  //       'Email Address': 'ઈ - મેઈલ સરનામું',
  //       Password: 'પાસવર્ડ',
  //       'Sign Up': 'સાઇન અપ કરો',
  //       Your: 'તમારા',
  //       Forgot: 'ભૂલી ગયા',
  //     });
  //   }
  // }, []);

  // let strings = new LocalizedStrings({
  //   // it: {
  //   //   how: 'Come vuoi il tuo uovo oggi?',
  //   //   boiledEgg: 'Uovo sodo',
  //   //   softBoiledEgg: 'Uovo alla coque',
  //   //   choice: "Come scegliere l'uovo",
  //   // },
  //   en: {
  //     Login: 'Login',
  //     'Email Address': 'Email',
  //     Password: 'Password',
  //     'Sign Up': 'Sign Up',
  //     Your: 'Your',
  //     Forgot: 'Forgot',
  //   },
  //   // hi: {
  //   //   Login: 'लॉग इन करें',
  //   //   'Email Address': 'ईमेल पता',
  //   //   Password: 'पासवर्ड',
  //   //   'Sign Up': 'साइन अप करें',
  //   //   Your: 'आप',
  //   //   Forgot: 'भूल गए',
  //   // },
  //   // gu: {
  //   //   Login: 'પ્રવેશ કરો',
  //   //   Email Address: 'ઈ - મેઈલ સરનામું',
  //   //   Password: 'પાસવર્ડ',
  //   //   'Sign Up': 'સાઇન અપ કરો',
  //   //   Your: 'તમારા',
  //   //   Forgot: 'ભૂલી ગયા',
  //   // },
  // });
  useEffect(() => {
    if (route.params.language === 'ગુજરાતી') {
      setlang({
        Login: 'પ્રવેશ કરો',
        'Email Address': 'ઈ - મેઈલ સરનામું',
        Password: 'પાસવર્ડ',
        'Sign Up': 'સાઇન અપ કરો',
        Your: 'તમારા',
        Forgot: 'ભૂલી ગયા',
      });
    } else if (route.params.language === 'हिन्दी') {
      setlang({
        Login: 'लॉग इन करें',
        'Email Address': 'ईमेल पता',
        Password: 'पासवर्ड',
        'Sign Up': 'साइन अप करें',
        Your: 'आप',
        Forgot: 'भूल गए',
      });
    }
    return () =>
      setlang({
        Login: 'Login',
        'Email Address': 'Email',
        Password: 'Password',
        'Sign Up': 'Sign Up',
        Your: 'Your',
        Forgot: 'Forgot',
      });
  }, []);

  return (
    <ScrollView>
      <View>
        <OrientationLocker orientation="UNLOCK" />
        <Text style={styles.title}>{lang.Login}</Text>
        <View style={{...styles.textinput}}>
          <Image source={mail} style={styles.image} />
          <TextInput placeholder={lang['Email Address']} />
        </View>
        <View style={{...styles.textinput}}>
          <Image
            source={lock}
            style={{...styles.image, height: 30, width: 30, top: 8, left: 8}}
          />
          <TextInput placeholder={lang.Password} />
        </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btntext}>{lang.Login}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{...styles.btn, marginTop: 10}}>
          <Text style={styles.btntext}>{lang['Sign Up']}</Text>
        </TouchableOpacity>
        <Text style={{textAlign: 'center', color: '#23a17d'}}>
          {lang.Your + ' ' + lang.Password + ' ' + lang.Forgot}?
        </Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 39,
    fontWeight: '400',
    textAlign: 'center',
    margin: 20,
    marginTop: 120,
    color: '#23a17d',
  },
  textinput: {
    borderRadius: 50,
    backgroundColor: 'white',
    paddingLeft: 40,
    marginHorizontal: 20,
    margin: 10,
    color: 'black',
    elevation: 5,
  },
  image: {
    height: 23,
    width: 23,
    position: 'absolute',
    top: 13,
    left: 12,
  },
  btntext: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    color: 'white',
    fontWeight: 'bold',
  },
  btn: {
    marginHorizontal: 20,
    margin: 10,
    marginTop: 30,
    backgroundColor: '#23a17d',
    borderRadius: 50,
    justifyContent: 'center',
    elevation: 5,
  },
});
