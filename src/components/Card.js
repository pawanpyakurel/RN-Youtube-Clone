import React from 'react';

//styles
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { Colors} from "../../config/Theme";

//icons
import {MaterialIcons} from '@expo/vector-icons'; 

const Card = (props) => {
    return (
        <View style = {styles.Card}>
            <Image
                source = {
                    {uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg`}
                }
                style = {styles.CardBackground}
            />
            <View style = {styles.CardInfoWrapper}>
                <MaterialIcons  
                    name="account-circle" 
                    size={50} 
                    color= {Colors.BrightBlack}
                />
                <View style = {styles.CardInfoText}> 
                    <Text 
                        style = {styles.CardTopText}
                        ellipsizeMode = "tail"
                        numberOfLines = {2}
                    >
                       {props.title}
                    </Text>
                    <Text style = {styles.CardBottomText}>
                        {props.channel}
                    </Text>
                </View>
            </View>
        </View>
        
    )

}

export default Card;
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    Card: {
        marginBottom: 10,

        // elevation: 5,           //shadow for android

        // shadowColor: "black",   //box-shadow ios
        // shadowOffset: {
        //     width: 2,
        //     height: 2,
        // },
        // shadowOpacity: 1.0,

        
    },

    CardBackground:{
        width: "100%",
        height: 190,
    },

    CardInfoWrapper :{
        flexDirection: "row",
        margin: 5,
        padding: 2,
    },

    CardInfoText:{
        marginLeft: 8,
    },

    CardTopText:{
        fontSize: 19,
        width: (Dimensions.get('window').width) -60,
        paddingRight: 5,
        
    },
    CardBottomText:{

    },
});