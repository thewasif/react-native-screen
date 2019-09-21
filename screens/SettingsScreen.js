import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { ExpoConfigView } from '@expo/samples';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>Hello World</Text>
      <Text style={{ textAlign: 'center' }}>Once Again :)</Text>
    </View>
  );
}

SettingsScreen.navigationOptions = {
  title: 'Screen 2',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});

