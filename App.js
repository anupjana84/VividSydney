import React from 'react';
import {StyleSheet, Text, StatusBar, View} from 'react-native';
import {WebView} from 'react-native-webview';
const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#3680a1" barStyle="light-content" />
      <WebView
        source={{uri: 'https://99online.website/vivid/'}}
        style={{marginTop: 0}}
      />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
