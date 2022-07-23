import React, {useRef, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Popover from 'react-native-popover-view';

const PopOver = () => {
  const touchable = useRef();
  const [showPopover, setShowPopover] = useState(false);

  return (
    <View>
      <Popover
        isVisible={showPopover}
        from={
          <TouchableOpacity onPress={() => setShowPopover(true)}>
            <Text>Press here to open popover!</Text>
          </TouchableOpacity>
        }>
        <>
          <Text>This is the contents of the popover</Text>
          <TouchableOpacity onPress={() => setShowPopover(false)}>
            <Text>Dismiss</Text>
          </TouchableOpacity>
        </>
      </Popover>
    </View>
  );
};

export default PopOver;
