import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';

const ModalAnimation = () => {
  const [show, setshow] = useState(false);
  const Show = () => {
    setshow(!show);
  };
  return (
    <View>
      <View>
        <Modal
          isVisible={show}
          style={{
            backgroundColor: 'white',
            width: '90%',
            maxHeight: 60,
            marginVertical: 180,
          }}
          animationIn="zoomInUp"
          animationOut="zoomOutDown"
          animationInTiming={1000}
          animationOutTiming={500}
          backdropTransitionInTiming={500}
          backdropTransitionOutTiming={500}
          // avoidKeyboard={true} // move with keboard appernace
          // coverScreen={true} //coverfullscreen
          hasBackdrop={true}
          backdropColor="purple"
          backdropOpacity={0.3}
          // customBackdrop= // i don't know how to use
          // children
          onBackButtonPress={Show}
          onBackdropPress={Show}
          //
          useNativeDriver={true}
          scrollOffset={20}
          scrollHorizontal={true}
          scrollOffsetMax={30}
          swipeDirection={['up', 'down']}
          onSwipeComplete={() => alert('hiii')}
          onSwipeCancel={() => alert('cancal')}
          onSwipeMove={() => alert('heloo')}
          panResponderThreshold={30}>
          <Text
            style={{
              textAlign: 'center',
            }}
            onPress={Show}>
            rtjtjtjstjjt
          </Text>
        </Modal>
      </View>
      <View>
        <Text style={{color: 'black'}} onPress={Show}>
          I am the modal content!
        </Text>
      </View>
    </View>
  );
};
export default ModalAnimation;

const styles = StyleSheet.create({});
