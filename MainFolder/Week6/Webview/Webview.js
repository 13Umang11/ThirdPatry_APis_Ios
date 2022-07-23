import React, {useState} from 'react';
import {ScrollView, View, Text, ActivityIndicator} from 'react-native';
import {WebView} from 'react-native-webview';

export default function Webview() {
  const [loading, setloding] = useState(false);
  return (
    // <ScrollView>
    <WebView
      // onLoadStart={() => setloding(true)}
      // onLoad={() => setloding(false)}
      // renderLoading={() => (
      //   <View style={{flex: 1, alignSelf: 'center'}}>
      //     <ActivityIndicator size="large" animating={loading} />
      //   </View>
      // )}
      domStorageEnabled={true}
      javaScriptEnabled={true}
      bounces={true}
      scrollEnabled={true}
      startInLoadingState={true}
      onMessage={data => console.log('data')}
      source={{
        uri: 'https://reactnative.dev/',
      }}
    />
    // </ScrollView>
  );
}
