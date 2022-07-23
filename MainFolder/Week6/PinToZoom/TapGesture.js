import React, {useRef, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {TapGestureHandler, State} from 'react-native-gesture-handler';

export default function TapGesture() {
  const [likeColour, setLikeColour] = useState('#28b5b5');
  const doubleTapRef = useRef(null);

  const onSingleTapEvent = event => {
    if (event.nativeEvent.state === State.ACTIVE) {
      alert('Single Tap');
    }
  };

  const onDoubleTapEvent = event => {
    console.log(event.nativeEvent.state);
    if (event.nativeEvent.state === State.ACTIVE) {
      likeColour === '#28b5b5'
        ? setLikeColour('red')
        : setLikeColour('#28b5b5');
      alert('Double Tap');
    }
  };

  const styles = StyleSheet.create({
    square: {
      alignSelf: 'center',
      width: 150,
      height: 150,
      backgroundColor: likeColour,
      marginTop: 22,
      marginBottom: 22,
      borderRadius: 100,
    },
  });

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <TapGestureHandler
        onHandlerStateChange={onSingleTapEvent}
        waitFor={doubleTapRef}>
        <TapGestureHandler
          ref={doubleTapRef}
          onHandlerStateChange={onDoubleTapEvent}
          numberOfTaps={2}>
          <View style={styles.square} />
        </TapGestureHandler>
      </TapGestureHandler>
    </View>
  );
}
