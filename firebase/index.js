
import { initializeApp,getApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, uploadBytes } from "firebase/storage";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getAnalytics, logEvent } from "firebase/analytics"
import { getMessaging, onMessage } from "firebase/messaging";
//import firebase from "firebase/app";
const firebaseConfig =  initializeApp({
   

  apiKey: "AIzaSyA1aPqjHTrPxoFlVxF-lLiAI3cy2i3SR5k",
  authDomain: "maher-vue.firebaseapp.com",
  databaseURL: "https://maher-vue-default-rtdb.firebaseio.com",
  projectId: "maher-vue",
  storageBucket: "maher-vue.appspot.com",
  messagingSenderId: "694861415607",
  appId: "1:694861415607:web:b00faf53f77cfc4d5c7932"





});


let firebaseApp;
try {
    firebaseApp = getApp();
    console.log(
        'firebaseApp',
    )
} catch (e) {
  firebaseApp = initializeApp(firebaseConfig);
  console.log('firebaseApp', firebaseApp);
}



// Initialize Firebase
//export const app = initializeApp(firebaseConfig);
export const app = firebaseApp
export const storage = getStorage(app);
export const db = getFirestore();
export const auth = getAuth();



export const analytics = () => {
  if (typeof window !== "undefined") {
   //  return firebase.analytics()
    return getAnalytics(app)
  } else {
     return null
  }
}



 //export  const analytics = getAnalytics(app);


export {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytes,
}



// const messaging = getMessaging();
// onMessage(messaging, (payload) => {
//   console.log("Message received. ", payload);
//   // ...
// });