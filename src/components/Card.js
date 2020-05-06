import React from 'react';

//styles
import { StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import { Colors} from "../../config/Theme";

//icons
import {MaterialIcons} from '@expo/vector-icons'; 

const Card = () => {
    return (
        <View style = {styles.Card}>
            <Image
                source = {
                    {uri: "https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"}
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
                        IF YOU LAUGH YOU LOSE | ULTIMATE FUNNY FAILS COMPILATION 2019 | IF YOU LAUGH YOU LOSE | ULTIMATE FUNNY FAILS COMPILATION 2019 
                    </Text>
                    <Text style = {styles.CardBottomText}>
                        This is Amazing Image
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
        height: 200,
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