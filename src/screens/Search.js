import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, FlatList, ActivityIndicator} from 'react-native';

import { Colors} from "../../config/Theme";
import MiniCard from "../components/MiniCard"

//icons
import { Ionicons} from '@expo/vector-icons'; 

// request api
//GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDrtyVHd2imaaDDUh8NRRtQ-1AQF1TJkmM
//GET https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=top%20nepali%20bowlers&key=[YOUR_API_KEY]


//api key
// AIzaSyDrtyVHd2imaaDDUh8NRRtQ-1AQF1TJkmM


const SearchScreen = () =>{
    const [value,setValue] = useState("")
    const [miniCardData,setMiniCardData] = useState([])
    const [loading, setLoading] = useState(false)
    
    const fetchData = () =>{
        setLoading(true)
        fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDrtyVHd2imaaDDUh8NRRtQ-1AQF1TJkmM`)
        .then(res =>res.json())
        .then(data=>{
            setMiniCardData(data.items)
            setLoading(false)
        })
    }
    return(
        <View style = {styles.SearchScreen}>
            <View style = {styles.SearchScreenWrapper}>
                <Ionicons  
                    name="md-arrow-back" 
                    size={32} 
                    color={Colors.BrightBlack}
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
  