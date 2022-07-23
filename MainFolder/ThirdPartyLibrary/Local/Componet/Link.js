import React from 'react';
import {Pressable, View, Text} from 'react-native';

const Link = ({link, text, margintop, textalign}) => {
  return (
    <View>
      <Pressable
        onPress={link}
        pressRetentionOffset={{bottom: 30, left: 20, right: 20, top: 20}}>
        <Text
          style={{
            marginTop: margintop,
            textAlign: textalign,
            color: '#007ACC',
            fontSize: 15,
            margin: 10,
          }}>
          {text}
        </Text>
      </Pressable>
    </View>
  );
};
export default Link;
