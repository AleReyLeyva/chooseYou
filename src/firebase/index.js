import firebase from 'firebase/compat/app';

import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDRWkaka6VlLpOdhWW45RuKEGNxdXkx3oA',
  authDomain: 'chooseyou-1cbc7.firebaseapp.com',
  projectId: 'chooseyou-1cbc7',
  storageBucket: 'chooseyou-1cbc7.appspot.com',
  messagingSenderId: '263230001941',
  appId: '1:263230001941:web:1402dd8c0c196b07dd0f1c',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
