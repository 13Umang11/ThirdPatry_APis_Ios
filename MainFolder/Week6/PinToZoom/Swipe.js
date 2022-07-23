import React, {useState} from 'react';
import {View, Text, Dimensions, Image} from 'react-native';
import FastImage from 'react-native-fast-image';
import {
  bird,
  spider,
  rollsroyal,
  chair,
  Taj,
  bouble,
  track,
  tree,
} from '../assets/index';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-detect';

export default function Swipe() {
  const [swipeImage, setswipeImage] = useState(rollsroyal);
  const [gestureName, setgestureName] = useState('none');
  const [color, setcolor] = useState('#fff');

  const swipeLeft = gestureState => {
    if (swipeImage == bird) {
      setswipeImage(tree);
    } else {
      setswipeImage(bird);
    }
  };
  const swipeRight = gestureState => {
    if (swipeImage == spider) {
      setswipeImage(Taj);
    } else {
      setswipeImage(spider);
    }
  };
  const swipeUp = gestureState => {
    if (swipeImage == rollsroyal) {
      setswipeImage(track);
    } else {
      setswipeImage(rollsroyal);
    }
  };
  const swipeDown = gestureState => {
    if (swipeImage == chair) {
      setswipeImage(bouble);
    } else {
      setswipeImage(chair);
    }
  };
  const onSwipe = (gestureName, gestureState) => {
    const {SWIPE_UP, SWIPE_DOWN, SWIPE_LEFT, SWIPE_RIGHT} = swipeDirections;
    setgestureName(gestureName);
    switch (gestureName) {
      case SWIPE_UP:
        setcolor('red');
        break;
      case SWIPE_DOWN:
        setcolor('green');
        break;
      case SWIPE_LEFT:
        setcolor('blue');

        break;
      case SWIPE_RIGHT:
        setcolor('yellow');
        break;
    }
  };

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80,
  };

  return (
    <View style={{flex: 1}}>
      <GestureRecognizer
        onSwipe={(direction, state) => onSwipe(direction, state)}
        onSwipeUp={state => swipeUp(state)}
        onSwipeDown={state => swipeDown(state)}
        onSwipeLeft={state => swipeLeft(state)}
        onSwipeRight={state => swipeRight(state)}
        config={config}
        style={{
          flex: 1,
          backgroundColor: 'gray',
        }}>
        <View style={{justifyContent: 'center', flex: 1}}>
          <Image
            source={swipeImage}
            style={{
              height: 200,
              width: Dimensions.get('screen').width,
              justifyContent: 'center',
            }}
          />
        </View>
      </GestureRecognizer>
    </View>
  );
}
