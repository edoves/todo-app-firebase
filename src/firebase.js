import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB8Vr8Y2xIrVoePJwu6sgqrAmFNYHGTHno",
  authDomain: "todo-app-react-4150f.firebaseapp.com",
  projectId: "todo-app-react-4150f",
  storageBucket: "todo-app-react-4150f.appspot.com",
  messagingSenderId: "103739925075",
  appId: "1:103739925075:web:f31f58b303918fafa79ca6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
