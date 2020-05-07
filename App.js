import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//components
import Home from "./src/screens/Home";
import SearchScreen from "./src/screens/Search";
import Constant from"expo-constants";
import VideoPlayer from "./src/screens/VideoPlayer";
import Explore from "./src/screens/Expolre";
import Subscribe from "./src/screens/Subscribe";

//custom Components
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {MaterialIcons} from '@expo/vector-icons';

const Stack =createStackNavigator();
const Tabs =createBottomTabNavigator();

const RootHome =() =>{
  return(
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color}) => {
         let iconName;
          if (route.name === "home") {
            iconName = 'home';
          } else if (route.name === "explore") {
            iconName = 'explore';
          } else if (route.name === "subscribe") {
            iconName = 'subscriptions';
          }

          // You can return any component that you like here!
          return <MaterialIcons name= {iconName} size={30} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'gray',
      }}
    >
      <Tabs.Screen  name ="home" component ={Home}/>
      <Tabs.Screen  name ="explore" component ={Explore}/>
      <Tabs.Screen  name ="subscribe" component ={Subscribe}/>
    </Tabs.Navigator>
  )
}
const App =() => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode ="none">
        <Stack.Screen name ="rootHome" component ={RootHome}/>
        <Stack.Screen name ="search" component ={SearchScreen}/>
        <Stack.Screen name ="videoPlayer" component ={VideoPlayer}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  App: {
    flex: 1,
    marginTop : Constant.statusBarHeight,
  },
});
