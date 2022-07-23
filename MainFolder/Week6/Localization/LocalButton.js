import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  NativeModules,
  Platform,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';

export default function LocalButton({navigation}) {
  const [status, setstatus] = useState('English');
  const [lang, setlang] = useState({
    Language: 'Language',
    set: 'set',
  });

  useEffect(() => {
    Lang();
  }, []);

  const Lang = async () => {
    var templang = RNLocalize.getLocales();
    var langarray = templang[0];
    if (langarray.languageCode === 'en') {
      console.log('en');
      setLang();
    } else if (langarray.languageCode === 'hi') {
      console.log('hi');
      setLang();
    } else if (langarray.languageCode === 'gu') {
      console.log('gu');
      setLang();
    } else {
      alert('This Language not suppoted by this application');
    }
  };

  const setLang = async () => {
    try {
      const value = await AsyncStorage.getItem('Language').then(lang => {
        if (lang !== null) {
          setstatus(lang);
          console.log('value', value);
          console.log('ગુજરાતી', value);
        }
        if (lang === 'English') {
          // setLang();
          console.log('English', 'English');
          setstatus('English');
          setlang({
            Language: 'Language',
            set: 'set',
          });
        } else if (lang === 'हिन्दी') {
          // setLang();   langarray.languageCode === 'gu' ||
          console.log('हिन्दी', 'Hindi');
          setstatus('हिन्दी');
          setlang({
            Language: 'भाषा',
            set: 'सेट',
          });
        } else if (lang === 'ગુજરાતી') {
          // setLang();
          console.log('ગુજરાતી', 'guj');
          setstatus('ગુજરાતી');
          setlang({
            Language: 'ભાષા',
            set: 'સેટ',
          });
        }
      });
    } catch (e) {
      // error reading value
      alert(e);
    }
  };

  // const setLang = () => {
  //   switch (status) {
  //     case 'English':
  //       console.log('English', 'English');
  //       setstatus('English');
  //       setlang({
  //         Language: 'Language',
  //         set: 'set',
  //       });
  //       break;
  //     case 'हिन्दी':
  //       console.log('English', 'English');
  //       setstatus('हिन्दी');
  //       setlang({
  //         Language: 'भाषा',
  //         set: 'सेट',
  //       });
  //       break;
  //     case 'ગુજરાતી':
  //       console.log('English', 'English');
  //       setstatus('ગુજરાતી');
  //       setlang({
  //         Language: 'ભાષા',
  //         set: 'સેટ',
  //       });
  //       break;

  //     default:
  //       break;
  //   }
  // };

  const setEnglish = async () => {
    setstatus('English');
    setlang({
      Language: 'Language',
      set: 'set',
    });
    navigation.navigate('Localization', {language: 'English'});
    try {
      await AsyncStorage.setItem('Language', 'English');
    } catch (e) {
      alert('Please select Language');
    }
  };
  const setHindi = async () => {
    setstatus('हिन्दी');

    setlang({
      Language: 'भाषा',
      set: 'सेट',
    });
    navigation.navigate('Localization', {language: 'हिन्दी'});
    try {
      await AsyncStorage.setItem('Language', 'हिन्दी');
    } catch (e) {
      alert('Please select Language');
    }
  };
  const setGujarati = async () => {
    setstatus('ગુજરાતી');
    setlang({
      Language: 'ભાષા',
      set: 'સેટ',
    });
    navigation.navigate('Localization', {language: 'ગુજરાતી'});
    try {
      await AsyncStorage.setItem('Language', 'ગુજરાતી');
    } catch (e) {
      alert('Please select Language');
    }
  };
  // console.log('strings.en.Language', strings.gu.Language);
  // console.log(RNLocalize.getLocales());
  // console.log(RNLocalize.getCurrencies());
  // console.log(RNLocalize.getNumberFormatSettings());
  // console.log(RNLocalize.getCountry());
  // console.log(RNLocalize.getCalendar());
  // console.log(RNLocalize.getTemperatureUnit());
  // console.log(RNLocalize.getTimeZone());
  // console.log(RNLocalize.uses24HourClock());
  // console.log(RNLocalize.usesAutoDateAndTime());
  // console.log(RNLocalize.usesAutoTimeZone());

  // const deviceLanguage =
  //   Platform.OS === 'ios'
  //     ? NativeModules.SettingsManager.settings.AppleLocale ||
  //       NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
  //     : NativeModules.I18nManager.localeIdentifier;

  // console.log(deviceLanguage); other solution fro finding an lang

  return (
    <View style={{justifyContent: 'center', flex: 1}}>
      <Text style={styles.title}>
        {lang.Language}: {status}
      </Text>
      <TouchableOpacity onPress={setEnglish} style={styles.btn}>
        <Text style={styles.btntext}>{lang.set} English</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setGujarati} style={styles.btn}>
        <Text style={styles.btntext}>{lang.set} ગુજરાતી</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={setHindi} style={styles.btn}>
        <Text style={styles.btntext}>{lang.set} हिन्दी</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: '400',
    textAlign: 'center',
    margin: 20,

    color: '#23a17d',
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
    backgroundColor: '#23a17d',
    borderRadius: 50,
    justifyContent: 'center',
    elevation: 5,
  },
});
