import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from "qrcode.react";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello React Native!!　りあくとねいてぃぶ
      </Text>
      <QRCode value="http://facebook.com/" />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
