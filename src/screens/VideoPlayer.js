import React from 'react';
import { StyleSheet, Text, View, Dimensions} from 'react-native';

//const
import Constant from 'expo-constants';
import { WebView } from 'react-native-webview';

const VideoPlayer = ({route}) =>{
    const {videoId,title} = route.params
    return (
        <View style = {styles.VideoPlayer}>
            <View style = {styles.VideoPlayerWrapper}>
                <WebView 
                    source ={{uri: `https://www.youtube.com/embed/${videoId}`}}
                    javaScriptEnabled = {true}
                    domStorageEnabled = {true}
                />
            </View> 
            <Text 
                style = {styles.VideoPlayerTextWrapper}
                numberOfLines = {2}
                ellipsizeMode ="tail"
                > 
                {title} </Text>
            <View  style ={styles.VideoPlayerBottomWrapper}/>
        </View>
    )
}

export default VideoPlayer;

const styles = StyleSheet.create({
    VideoPlayer: {
      flex: 1,
      marginTop : Constant.statusBarHeight,
    },

    VideoPlayerWrapper:{
        width: "100%",
        height: 200,
    },

    VideoPlayerTextWrapper:{
        fontSize: 20,
        width: Dimensions.get("screen").width-50,
        margin: 9,
    },

    VideoPlayerBottomWrapper:{
        borderBottomWidth: 1
    }
});