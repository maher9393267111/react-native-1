// import React, { useState, createContext, useContext, useEffect } from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import 'react-native-gesture-handler';
// //import {NavigationContainer,DefaultTheme} from '@react-navigation/native';
// //  import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import { View, ActivityIndicator } from 'react-native';
// import { onAuthStateChanged } from 'firebase/auth';
// import { auth } from './firebase';
// import Login from './screens/Login';
// import Signup from './screens/Signup';
// import Chat from './screens/Chat';
// import Home from './screens/Home';

// const Stack = createStackNavigator();
// //const Stack = createNativeStackNavigator();
// const AuthenticatedUserContext = createContext({});

// const AuthenticatedUserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
// return (
//     <AuthenticatedUserContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthenticatedUserContext.Provider>
//   );
// };

// function ChatStack() {
//   return (
//     <Stack.Navigator defaultScreenOptions={Home}>
//       <Stack.Screen name='Home' component={Home} />
//       <Stack.Screen name='Chat' component={Chat} />
//     </Stack.Navigator>
//   );
// }


// function AuthStack() {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }}>
//       <Stack.Screen name='Login' component={Login} />
//       <Stack.Screen name='Signup' component={Signup} />
//     </Stack.Navigator>
//   );
// }

// function RootNavigator() {
//   const { user, setUser } = useContext(AuthenticatedUserContext);
//   const [isLoading, setIsLoading] = useState(true);
// useEffect(() => {
//     // onAuthStateChanged returns an unsubscriber
//     const unsubscribeAuth = onAuthStateChanged(
//       auth,
//       async authenticatedUser => {
//         authenticatedUser ? setUser(authenticatedUser) : setUser(null);
//         setIsLoading(false);
//       }
//     );
// // unsubscribe auth listener on unmount
//     return unsubscribeAuth;
//   }, [user]);
// if (isLoading) {
//     return (
//       <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size='large' />
//       </View>
//     );
//   }

// return (
//     <NavigationContainer>
//       {user ? <ChatStack /> : <AuthStack />}
//     </NavigationContainer>
//   );
// }

// export default function App() {
//   return (
//     <AuthenticatedUserProvider>
//       <RootNavigator />
//     </AuthenticatedUserProvider>
//   );
// }










import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import About from './screens/Login';
import Signup from './screens/Signup';
import Chat from './screens/Chat';
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
      {/* <Stack.Screen name="Login" component={About} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} /> */}
     
    </Stack.Navigator>
  </NavigationContainer>
  </Context>
  );
}









