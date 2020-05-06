import React from 'react';

//styles
import { StyleSheet, Text, View } from 'react-native';
import { Colors} from "../../config/Theme"

//icons
import { AntDesign, Ionicons, MaterialIcons} from '@expo/vector-icons'; 

import Constant from 'expo-constants';

const Header =()=>{
  return (
    <View style={styles.Header}>
      <View style = {styles.HeaderTopLeft}>
        <AntDesign 
            style = {styles.HeaderTopLeftIcon} 
            name="youtube" 
            size={32} 
            color= {Colors.YoutubeIcon} 
        />
        <Text style = {styles.HeaderTopLeftText}> 
            YouTube 
        </Text>
      </View>

      <View style = {styles.HeaderTopRight}>
        <Ionicons  
        // style = {styles.HeaderTopLeftIcon} 
            name="md-videocam" 
            size={32} 
            color={Colors.BrightBlack}
        />
        <Ionicons  
        // style = {styles.HeaderTopLeftIcon} 
            name="md-search" 
            size={32} 
            color={Colors.BrightBlack}
        />
        <MaterialIcons  
        // style = {styles.HeaderTopLeftIcon} 
            name="account-circle" 
            size={32} 
            color= {Colors.BrightBlack}
        />
      </View>
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({
  Header: {
    height: 45,
    marginTop: Constant.statusBarHeight,
    backgroundColor: "white",
    alignItems: 'center',
    flexDirection: "row",
    justifyContent: "space-between",
    elevation: 5,           //shadow for android

    shadowColor: "black",   //box-shadow ios
    shadowOffset: {
        width: 2,
        height: 2,
    },
    shadowOpacity: 1.0,


  },
  HeaderTopLeft:{
    flexDirection : "row",
    margin: 5,
  },
  HeaderTopLeftText:{
    fontSize: 22,
    marginLeft: 5,
    fontWeight: "bold",
    color: `${Colors.BrightBlack}`

  },
  HeaderTopLeftIcon:{
    marginLeft: 10,
  },

  HeaderTopRight:{
    flexDirection: "row",
    width: 140,
    justifyContent:"space-around"
  },
});
