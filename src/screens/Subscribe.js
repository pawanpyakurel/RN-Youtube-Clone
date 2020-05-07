import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//comp
// import Constant from 'expo-constants';
import Header from '../components/Header';

const Subscribe = () =>{
    return (
        <View style = {styles.Subscribe}>
            <Header />
            <Text> Subscribe Video </Text>
        </View>
    )
}

export default Subscribe;

const styles = StyleSheet.create({
    Subscribe: {
      flex: 1,
    //   marginTop : Constant.statusBarHeight,
    },
});