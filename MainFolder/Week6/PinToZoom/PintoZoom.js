import React from 'react';
import {Animated, Dimensions, View} from 'react-native';
import {PinchGestureHandler, State} from 'react-native-gesture-handler';
import {bird, spider, rollsroyal, chair} from '../assets/index';

const screen = Dimensions.get('window');

export default function PinToZoom() {
  scale = new Animated.Value(1);

  onPinchEvent = Animated.event(
    [
      {
        nativeEvent: {scale: this.scale},
      },
    ],
    {
      useNativeDriver: true,
    },
  );
  onPinchStateChange = event => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <PinchGestureHandler
        onGestureEvent={this.onPinchEvent}
        onHandlerStateChange={this.onPinchStateChange}>
        <Animated.Image
          source={rollsroyal}
          style={{
            width: screen.width,
            height: 300,
            transform: [{scale: this.scale}],
          }}
          resizeMode="contain"
        />
      </PinchGestureHandler>
    </View>
  );
}
