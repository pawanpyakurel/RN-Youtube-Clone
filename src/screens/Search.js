import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator} from 'react-native';

import { Colors} from "../../config/Theme";
import MiniCard from "../components/MiniCard"
import Constant from 'expo-constants';

//icons
import { Ionicons} from '@expo/vector-icons'; 

//redux
import {useSelector, useDispatch} from 'react-redux'

const SearchScreen = ({navigation}) =>{
    const [value,setValue] = useState("")
    // const [miniCardData,setMiniCardData] = useState([])
    const miniCardData = useSelector (state =>{
        return state
    })
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    
    const fetchData = () =>{
        const key = `AIzaSyDrtyVHd2imaaDDUh8NRRtQ-1AQF1TJkmM`,
              key1 = `AIzaSyD-zeRJrZA83oeIkCnNmtZ0x8vASF2HbYk`,
              key3 = `AIzaSyDZkkvc0NQzFv4tE3S3dBoR9h1TwkVODGA`,
              key4 = `AIzaSyD9NQkpie-cOm43gLDrbjcoSv372K-16Bc`;
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyCn6CV6kn0ebchrSKBMicCzI9fz8fMfZcY`)
        .then(res =>res.json())
        .then(data=>{
            // console.log(data)
            // setMiniCardData(data.items)
            dispatch({type: "add", payload: data.items})
            setLoading(false)
            
        })
        // console.log("Submitted")
    }
    return(
        <View style = {styles.SearchScreen}>
            <View style = {styles.SearchScreenWrapper}>
                <Ionicons  
                    name="md-arrow-back" 
                    size={32} 
                    color={Colors.BrightBlack}
                    onPress= {()=> navigation.goBack()}
                />
                <TextInput 
                    value ={value}
                    onChangeText ={(text) => setValue(text)}
                    style = {styles.SearchText}
                    onSubmitEditing ={()=>fetchData()}
                />
                <Ionicons  
                    name="md-send" 
                    size={32} 
                    color={Colors.BrightBlack}
                    onPress={()=>fetchData()}
                />
                
            </View>
            {
                loading && (
                    <ActivityIndicator 
                        style = {styles.SearchScreenLoder}
                        size = "large" 
                        color ="red"
                    />
                )
            }
            <FlatList
                data={miniCardData}
                renderItem ={({item})=>{
                    return <MiniCard 
                        videoId ={item.id.videoId}
                        title ={item.snippet.title}
                        channel ={item.snippet.channelTitle}
                    />
                }}
                keyExtractor={item => item.id.videoId}
            />
        </View>
    )
}

export default SearchScreen;

const styles = StyleSheet.create({
    SearchScreen: {
      flex: 1,
      marginTop: Constant.statusBarHeight,
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
    },

    SearchScreenLoder:{
        marginTop: 10,
    }
  });
  