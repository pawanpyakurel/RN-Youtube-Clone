import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, ScrollView} from 'react-native';

import { Colors} from "../../config/Theme";
import { Entypo} from '@expo/vector-icons'

const MiniCard = (props) =>{
    return(
        <View style = {styles.MiniCard}>
            <Image
                source = {
                    {uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}
                }
                style = {styles.MiniCardBackground}
            />
            <View style = {styles.MiniCardTopWrapper}>
                <Text 
                    style = {styles.MiniCardTopText}
                    ellipsizeMode ="tail"
                    numberOfLines={3}
                >
                   {props.title}
                </Text>
                <Text 
                    style = {styles.MiniCardBottomText}
                    ellipsizeMode ="tail"
                    numberOfLines={1}
                >
                   {props.channel}
                </Text>
            </View>
            <View style = {styles.MiniCardDot}>
            <Entypo  
                name="dots-three-vertical" 
                size={18} 
                color={Colors.BrightBlack}
                />
            </View>
        </View>
    )
}

export default MiniCard;

const styles = StyleSheet.create({
    MiniCard:{
        flexDirection:"row",
        margin: 5,
    },

    MiniCardBackground: {
        width: "45%",
        height: 100,
    },

    MiniCardTopWrapper:{
        padding: 7,
    },

    MiniCardTopText:{
        fontSize : 17,
        width: (Dimensions.get("screen").width)/ 2.3,
    },

    MiniCardBottomText:{
        fontSize: 13,
    },

    MiniCardDot:{
        display: "flex",
        justifyContent: "center",
        // alignContent: "center",
        alignItems: "center",
        height: 80,
    },

    MiniCardDotText:{
        fontSize: 20,
    }
  });
  