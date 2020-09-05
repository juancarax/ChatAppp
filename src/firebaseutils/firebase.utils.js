import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCnftQv7LajP7yt_08U4GulrenYuXljyTM",
  authDomain: "chat-app-cc895.firebaseapp.com",
  databaseURL: "https://chat-app-cc895.firebaseio.com",
  projectId: "chat-app-cc895",
  storageBucket: "chat-app-cc895.appspot.com",
  messagingSenderId: "221583081578",
  appId: "1:221583081578:web:adedfe854cccd22ec90a13",
  measurementId: "G-2L0G3H1L1W",
});

const db = firebaseApp.firestore();

export default db;
