import React from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView} from 'react-native';

//comp
// import Constant from 'expo-constants';
import Header from '../components/Header';
import Card from "../components/Card";

//redux
import { useSelector} from 'react-redux'

const littleCard = (name) =>{
    return(
        <View style = {styles.LittleCardWrapper}>
            <Text style= {styles.LittleCardText}> {name} </Text>
        </View>
    )

}
const Explore = () =>{
    const cardData = useSelector(state =>{
        return state;
    })

    return(
        <View style = {styles.Explore}>
            <Header />
            <ScrollView vertical>
                <View style = {styles.ExploreCardWrapper}>
                    {littleCard("Gaming")}
                    {littleCard("Trending")}
                    {littleCard("Music")}
                    {littleCard("News")}
                    {littleCard("Movies")}
                    {littleCard("Fashion")}
                </View>
                <Text style = {styles.ExploreCardTextWrapper}>
                    Trending Videos
                </Text>
                <SafeAreaView>
                <FlatList
                    vertical
                    data ={cardData}
                    renderItem ={({item}) =>{
                    return(
                        <Card 
                        videoId ={item.id.videoId}
                        title ={item.snippet.title}
                        channel ={item.snippet.channelTitle}
                        />
                    )
                    }}
                    keyExtractor={item => item.id.videoId}
                />
                </SafeAreaView>
            </ScrollView>
        </View>
    )
}

export default Explore;

const styles = StyleSheet.create({
    Explore: {
      flex: 1,
    //   marginTop : Constant.statusBarHeight,
    },

    LittleCardWrapper:{
        backgroundColor :"red",
        width: 170,
        borderRadius: 4,
        height: 50,
        marginTop: 10
    },

    LittleCardText:{
        textAlign: "center",
        color: "white",
        fontSize: 22,
        marginTop: 5,
    },
    
    ExploreCardWrapper:{
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-around",
    },

    ExploreCardTextWrapper:{
        margin: 8,
        fontSize: 22,
        borderBottomWidth: 1,
    },
    
});