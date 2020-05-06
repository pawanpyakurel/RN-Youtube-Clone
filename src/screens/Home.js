import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../components/Header';

export default function Home() {
  return (
    <View style={styles.Home}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  Home: {
    flex: 1,
  },
});
