import firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyAwIQFRk3K87wJN5W-oWhjkGcxmIVmEo6s",
  authDomain: "chat-app-tutorial-c6351.firebaseapp.com",
  projectId: "chat-app-tutorial-c6351",
  storageBucket: "chat-app-tutorial-c6351.appspot.com",
  messagingSenderId: "227883860425",
  appId: "1:227883860425:web:afb985e911ebd5dc12e818",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
