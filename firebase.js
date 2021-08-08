import firebase from 'firebase/app';
require('firebase/auth');
require('firebase/firestore');
require('firebase/storage');

const firebaseConfig = {
  apiKey: 'AIzaSyAknDiBmdh0MHd1WKQq4L3uYZFA700pfCE',
  authDomain: 'halfdelivery.firebaseapp.com',
  projectId: 'halfdelivery',
  storageBucket: 'halfdelivery.appspot.com',
  messagingSenderId: '271269689660',
  appId: '1:271269689660:web:824d3f5729524c2d7dc639',
  measurementId: 'G-2RENKVPGSM',
};

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();

export const dbService = firebase.firestore();

export const storageService = firebase.storage();
