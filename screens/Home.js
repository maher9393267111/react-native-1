import React from 'react';
import tw from "../lib/tailwind.js";
import { View, Text,SafeAreaView,StyleSheet } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View  style={styles.container}>

          

        
            <Text>Home Page</Text>
         
            <View >
    <Text style={tw`flex h-30% top-7%  self-center  w-24  bg-green-400`}>Hello World</Text>
  </View>



        </View>
        </SafeAreaView>
    );
}



export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
