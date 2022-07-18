
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import About from './screens/about';

 import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
 import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
    <NavigationContainer 
    
    theme={theme}>
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="about" component={About} />
    </Stack.Navigator>
  </NavigationContainer>
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
