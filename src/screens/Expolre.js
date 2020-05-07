import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//comp
// import Constant from 'expo-constants';
import Header from '../components/Header';

const Explore = () =>{
    return(
        <View style = {styles.Explore}>
            <Header />
            <Text> Explore Screen </Text>
        </View>
    )
}

export default Explore;

const styles = StyleSheet.create({
    Explore: {
      flex: 1,
    //   marginTop : Constant.statusBarHeight,
    },
});