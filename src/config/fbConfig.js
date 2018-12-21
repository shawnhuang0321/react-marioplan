import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyCEAis6w5LxaHszfyPc7oozUdfOMQSRTwU",
  authDomain: "marioplan-3f0e0.firebaseapp.com",
  databaseURL: "https://marioplan-3f0e0.firebaseio.com",
  projectId: "marioplan-3f0e0",
  storageBucket: "marioplan-3f0e0.appspot.com",
  messagingSenderId: "416501833749"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;