import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { ExpoLinksView } from '@expo/samples';

export default function LinksScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: 'center' }}>Hello World</Text>
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Screen 1',
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