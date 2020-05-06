import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput} from 'react-native';

import { Colors} from "../../config/Theme";

//icons
import { Ionicons} from '@expo/vector-icons'; 

const SearchScreen = () =>{
    const[value, setValue] = useState("")
    return(
        <View style = {styles.SearchScreen}>
            <View style = {styles.SearchScreenWrapper}>
                <Ionicons  
                    name="md-arrow-back" 
                    size={32} 
                    color={Colors.BrightBlack}
                />
                <TextInput 
                    value ={`${value}`}
                    onChange ={(text)=> setValue(`${text}`)}
                    style = {styles.SearchText}
                />
                <Ionicons  
                    name="md-send" 
                    size={32} 
                    color={Colors.BrightBlack}
                />
            </View>

        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    SearchScreen: {
      flex: 1,
    },

    SearchScreenWrapper:{
        padding: 5,
        flexDirection: "row",
        justifyContent: "space-around",
        elevation: 5,           //shadow for android
        backgroundColor: "white"

        // shadowColor: "black",   //box-shadow ios
        // shadowOffset: {
        //     width: 2,
        //     height: 2,
        // },
        // shadowOpacity: 1.0,
    },

    SearchText:{
        width: "70%",
        backgroundColor: Colors.TextInputBackground,
    }
  });
  