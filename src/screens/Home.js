import React from 'react';
import { StyleSheet, Text, View, ScrollView , FlatList} from 'react-native';

import Header from '../components/Header';
import Card from "../components/Card";

//redux
import { useSelector} from 'react-redux'

const Home = () => {
  const cardData = useSelector(state =>{
    return state
  })
  return (
    <View style={styles.Home}>
      <Header />
      <FlatList
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
      >
      </FlatList>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  Home: {
    flex: 1,
  },
});
