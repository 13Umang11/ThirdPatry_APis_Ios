import * as React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Top = ({state, descriptors, navigation}) => {
  return (
    <View>
      <View
        style={{
          backgroundColor: '#e09a67',
          height: 50,
          width: '100%',
          justifyContent: 'center',
        }}>
        <Text style={styles.text}>Gallery</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          borderRadius: 20,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;
          return (
            <View
              key={index}
              style={{
                backgroundColor: '#68e3c8',
                flex: 1,
                height: 50,
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.navigate(route.name)}
                style={{
                  padding: 6,
                  color: isFocused ? '#FF7F7F' : '#000000',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    color: isFocused ? '#007ACC' : 'black',
                  }}>
                  {label}
                </Text>
              </TouchableOpacity>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default Top;

const styles = StyleSheet.create({
  text: {
    alignSelf: 'center',
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
  },
});
