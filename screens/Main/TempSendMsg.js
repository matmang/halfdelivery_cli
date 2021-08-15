import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, Linking, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Styles from '../../assets/Styles2';
import {dbService} from '../../firebase';
// import firestore from '@react-native-firebase/firestore';

const TempSendMsg = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('empty haha');
  const [texts, setTexts] = useState('empty haha');

  const onSubmit = async () => {
    // dbService.collection('test2').doc('doc').set({
    //   msg: 'data',
    //   createdAt: Date.now(),
    // });
    await dbService.collection('test2').add({
      msg: 'data',
      //   createdAt: Date.now(),
    });

    alert('함수 실행됨');
  };

  //   const tt = () => {
  //     const docRef = dbService.collection('test').doc();
  //     docRef
  //       .set({test: new Date().toString()})
  //       .then(() =>
  //         alert(`Data inserted successfully on backend. ID: ${docRef.id}`),
  //       );

  //     alert(`Data inserted successfully locally. ID: ${docRef.id}`);
  //   };

  //   const getNweets = async () => {
  //     const dbNweets = dbService.collection('nweets').get();
  //     alert(dbNweets);
  //   };
  //   //   useEffect(() => {
  //   //     getNweets();
  //   //   });

  return (
    <View style={Styles.centerize}>
      <TextInput
        style={Styles.textInput}
        value={text}
        onChangeText={setText}
        maxLength={100}
      />
      <Button
        title="전송"
        onPress={() => {
          onSubmit();
        }}
      />
    </View>
  );
};

export default TempSendMsg;
