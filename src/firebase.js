import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const app = firebase.initializeApp({
  apiKey: "AIzaSyB7128qmmrqLc1P_VzIr_CvVu2-CnNCG6M",
  authDomain: "chit-chat-bde7c.firebaseapp.com",
  databaseURL: "https://chit-chat-bde7c-default-rtdb.firebaseio.com",
  projectId: "chit-chat-bde7c",
  storageBucket: "chit-chat-bde7c.appspot.com",
  messagingSenderId: "304106880258",
  appId: "1:304106880258:web:09447bdeb8ded3f995961b",
});

export const auth = app.auth();
export const db = app.firestore();
export default app;
