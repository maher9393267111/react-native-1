
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import About from './screens/Login';
import Signup from './screens/Signup';
 import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';
 import Context from './context/index'
 const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};



const Stack = createNativeStackNavigator();

//import { useFonts } from "expo-font";
export default function App() {
  return (
    <Context>
    <NavigationContainer 
    
    theme={theme}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Signup"
    >
       <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={About} />
      <Stack.Screen name="Home" component={Home} />
     
    </Stack.Navigator>
  </NavigationContainer>
  </Context>
  );
}











// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// import React from 'react';
// import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
// //import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Ionicons } from '@expo/vector-icons';



// import Home from './screens/Home';
// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>

// hello worldasssssssssssa
//       </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
