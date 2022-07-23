import moment from 'moment';
import React, {useState} from 'react';
import {Text, View, StyleSheet, TextInput, Pressable} from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

export default function DateTime() {
  const [isDateVisible, setDateVisibility] = useState(false);
  const [date, setDate] = useState('');

  const showDatePicker = () => {
    setDateVisibility(true);
  };

  const hideDatePicker = () => {
    setDateVisibility(false);
  };

  const handleConfirm = date => {
    // console.warn('   -:A Date has been picked:-  ');
    console.log('Date', date);
    setDate(moment(date).format('L'));
    hideDatePicker();
  };

  const [isTimeVisible, setTimeVisibility] = useState(false);
  const [time, setTime] = useState('');

  const showTimePicker = () => {
    setTimeVisibility(true);
  };

  const hideTimePicker = () => {
    setTimeVisibility(false);
  };

  const handleTimeConfirm = Time => {
    // console.warn('   -:A Time has been picked:-  ');
    console.log('Time', Time);
    setTime(moment(Time).format('LTS'));
    hideTimePicker();
  };

  return (
    <View>
      <Text style={styles.title}> Current Time </Text>

      <Text style={styles.text}>Date</Text>
      <Pressable onPress={showDatePicker}>
        <TextInput
          style={styles.textinput}
          placeholder="DD/MM/YYYY"
          placeholderTextColor={'#000000'}
          editable={false}>
          {date + ''}
        </TextInput>
      </Pressable>

      {/* <TouchableOpacity style={styles.btn} onPress={showDatePicker}> */}
      {/* <Text style={styles.btntext}>Date</Text> */}
      <DateTimePickerModal
        isVisible={isDateVisible}
        mode="date"
        display="spinner"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        // maximumDate={new Date(2023, 12, 30)}
        // minimumDate={new Date(2021, 1, 1)}
      />
      {/* </TouchableOpacity> */}

      <Text style={styles.text}>Time</Text>
      <Pressable onPress={showTimePicker}>
        <TextInput
          style={styles.textinput}
          placeholder="HH:MM:SS   AM/PM"
          placeholderTextColor={'#000000'}
          keyboardType="number-pad"
          editable={false}>
          {time + ''}
        </TextInput>
      </Pressable>

      {/* <TouchableOpacity style={styles.btn} onPress={showTimePicker}>
        <Text style={styles.btntext}>Time</Text> */}
      <DateTimePickerModal
        isVisible={isTimeVisible}
        mode="time"
        display="spinner"
        onConfirm={handleTimeConfirm}
        onCancel={hideTimePicker}
        // is24Hour={true}
        minuteInterval={15}
        // timeZoneOffsetInMinutes={10}
        neutralButtonLabel="clear"
      />
      {/* </TouchableOpacity> */}
    </View>
  );
}

const styles = StyleSheet.create({
  btn: {
    padding: 13,
    backgroundColor: '#18A3FF',
    margin: 10,
    borderRadius: 50,
  },
  btntext: {
    color: '#FFFFFF',
    justifyContent: 'center',
    textAlign: 'center',
  },
  textinput: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 10,
    marginVertical: 15,
    color: '#000000',
    margin: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 80,
    margin: 10,
    color: '#000000',
  },
  text: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: '#000000',
    margin: 15,
  },
});
