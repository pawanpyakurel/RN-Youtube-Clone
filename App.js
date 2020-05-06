import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//components
import Home from "./src/screens/Home"
import SearchScreen from "./src/screens/Search";
import Constant from"expo-constants";

export default function App() {
  return (
    <View style={styles.App}>
      {/* <Home /> */}
      <SearchScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  App: {
    flex: 1,
    marginTop : Constant.statusBarHeight,
  },
});
