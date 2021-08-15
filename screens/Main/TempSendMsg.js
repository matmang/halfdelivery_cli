import React, {Component, useState} from 'react';
import {StyleSheet, View, Text, Button, Linking, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Styles from '../../assets/Styles2';
import {dbService, onSubmit} from '../../firebase';

const TempSendMsg = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('hhh');
  //   const onSubmit = () => {
  //     dbService
  //       .collection('test')
  //       .add({
  //         msg: 'adasdsad',
  //         createdAt: Date.now(),
  //       })
  //       .then(() => {
  //         console.log('added!');
  //       });
  //     alert('함수 실행됨');
  //   };

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
          onSubmit('제발좀 가라');
        }}
      />
    </View>
  );
};

export default TempSendMsg;
