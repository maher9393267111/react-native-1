import React from 'react';
import { View, Text,SafeAreaView,StyleSheet } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
        <View  style={styles.container}>

          

        
            <Text>Home Page</Text>
         
           
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
