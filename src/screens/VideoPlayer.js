import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//const
import Constant from 'expo-constants';

const VideoPlayer = () =>{
    return (
        <View style = {styles.VideoPlayer}>
            <Text> VideoPlayer Screen </Text>
        </View>
    )
}

export default VideoPlayer;

const styles = StyleSheet.create({
    VideoPlayer: {
      flex: 1,
      marginTop : Constant.statusBarHeight,
    },
});