import React from 'react';
import {View, StyleSheet, ToastAndroid} from 'react-native';
import {LongPressGestureHandler, State} from 'react-native-gesture-handler';

export default function LongPressGesture() {
  const onLongPress = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      ToastAndroid.show('You Press For 2 Secound', ToastAndroid.SHORT);
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignSelf: 'center'}}>
      <LongPressGestureHandler
        onHandlerStateChange={onLongPress}
        minDurationMs={2000}
        maxDist={150}
        onBegan={() => {
          ToastAndroid.show('You just Press In', ToastAndroid.SHORT);
        }}>
        <View style={styles.box} />
      </LongPressGestureHandler>
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    backgroundColor: '#28b5b5',
    marginTop: 22,
    marginBottom: 22,
  },
});
