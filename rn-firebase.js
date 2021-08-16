import firebase from '@react-native-firebase/app';
import authService from '@react-native-firebase/authService';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

// rn-firebase 는 firebaseConfig 와 firebase.initializeApp(firebaseConfig) 가 필요하지 않습니다.
// 참고: https://rnfirebase.io/

export const authServiceService = authService();
export const dbService = firestore();
export const storageService = storage();
// ===================== Firestore Database =====================
// Firestore, Collection 데이터 전송 함수
export const sendData = data => {
  dbService
    .collection(data)
    .add({
      msg: data,
      createdAt: Date.now(),
    })
    .then(() => {
      console.log('Added!');
    });
  alert('함수 실행됨');
};
// ===================== Firestore Database =====================

export const signup = async ({email, password, phoneNumber, name, school}) => {
  const {user} = await authServiceService.createUserWithEmailAndPassword(
    email,
    password,
  );
  await user.updateProfile({displayName: name, phoneNumber, school});
  return user;
};

export const signin = async ({email, password}) => {
  const {user} = await authServiceService.signInWithEmailAndPassword(
    email,
    password,
  );
  return user;
};

// ===================== Chat =====================

// const app = !firebase.apps.length
//   ? firebase.initializeApp(config)
//   : firebase.app();

const app = firebase.app();

const uploadImage = async uri => {
  if (uri.startsWith('https')) {
    return uri;
  }

  const blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new TypeError('Network request failed'));
    };
    xhr.responseType = 'blob';
    xhr.open('GET', uri, true);
    xhr.send(null);
  });

  const user = authService.currentUser;
  const ref = app.storage().ref(`/profile/${user.uid}/photo.png`);
  const snapshot = await ref.put(blob, {contentType: 'image/png'});
  blob.close();

  return await snapshot.ref.getDownloadURL();
};

export const getCurrentUser = () => {
  const {uid, displayName, email, photoURL} = authService.currentUser;
  return {uid, name: displayName, email, photo: photoURL};
};

export const updateUserInfo = async photo => {
  const photoURL = await uploadImage(photo);
  authService.currentUser.updateProfile({photoURL});
  return photoURL;
};

export const signout = async () => {
  await authService.signOut();
  return {};
};

export const createChannel = async ({title, desc}) => {
  const newChannelRef = dbService.collection('channels').doc();
  const id = newChannelRef.id;
  const newChannel = {
    id,
    title,
    description: desc,
    createdAt: Date.now(),
  };
  await newChannelRef.set(newChannel);
  return id;
};

export const createMessage = async ({channelId, message}) => {
  return await dbService
    .collection('channels')
    .doc(channelId)
    .collection('messages')
    .doc(message._id)
    .set({
      ...message,
      createdAt: Date.now(),
    });
};
// ===================== Chat =====================
