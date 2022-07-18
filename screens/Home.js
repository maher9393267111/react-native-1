import React from 'react';
import tw from "../lib/tailwind.js";
import { View, Text,SafeAreaView,StyleSheet,ScrollView } from 'react-native';
import {Button, Icon} from '@rneui/base';
//import { NavigationContainer } from '@react-navigation/native';
const Home = () => {
    return (
        <ScrollView
        
        style={tw`mt-12`}
        >
        <SafeAreaView style={styles.container}>
        <View  style={styles.container}>

          
<Button

containerStyle={styles.button}
//{tw`bg-green-600`}
title={'Home'} ></Button>
 
  
    </View>
    </SafeAreaView>
    </ScrollView>



           


    );
}



export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor:'black',
    // marginTop:'27px',
   //   alignItems: 'center',
    //  justifyContent: 'center',
    },

    btnclass: {
        flex: 1,
        backgroundColor:'black',
        color:'white',
   
      },
  });
