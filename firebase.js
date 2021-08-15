// --- Firestore Database ---

// --- Firestore Database ---
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
// --- Firestore Database ---
export const onSubmit = data => {
  dbService
    .collection('nweets')
    .add({
      msg: data,
      createdAt: Date.now(),
    })
    .then(() => {
      console.log('Added!');
    });
  alert('함수 실행됨');
};
// --- Firestore Database ---
export const signup = async ({email, password, phoneNumber, name, school}) => {
  const {user} = await authService.createUserWithEmailAndPassword(
    email,
    password,
  );
  await user.updateProfile({displayName: name, phoneNumber, school});
  return user;
};

export const signin = async ({email, password}) => {
  const {user} = await authService.signInWithEmailAndPassword(email, password);
  return user;
};
