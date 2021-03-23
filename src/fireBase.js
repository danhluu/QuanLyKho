import firebase from 'firebase/app'
import 'firebase/firestore'

var config = {
    apiKey: "AIzaSyAHfrYAeth7iypn-t_alSIiHHG2kM3gBI8",
    authDomain: "quanlykho-8f051.firebaseapp.com",
    databaseURL: "https://quanlykho-8f051-default-rtdb.firebaseio.com",
    projectId: "quanlykho-8f051",
    storageBucket: "quanlykho-8f051.appspot.com",
    messagingSenderId: "465963554589",
    appId: "1:465963554589:web:997f84810fd8f72c2033f4",
    measurementId: "G-TRDHJR1KYH"

};

firebase.initializeApp(config);
  
export const db = firebase.firestore();
//   db.settings({timestampsInSnapshots: true});
  
  
//   export default db;