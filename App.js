import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//components
import Home from "./src/screens/Home"

export default function App() {
  return (
    <View style={styles.HomeWrapper}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  HomeWrapper: {
    flex: 1,
  },
});
