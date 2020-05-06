import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Header from '../components/Header';
import Card from "../components/Card";

const Home = () => {
  return (
    <View style={styles.Home}>
      <Header />
      <ScrollView>
        <Card />
        <Card />
        <Card />
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  Home: {
    flex: 1,
  },
});
