import React, {Component, useEffect, useState} from 'react';
import {StyleSheet, View, Text, Button, Linking, TextInput} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Styles from '../../assets/Styles2';
import {dbService, onSubmit} from '../../firebase';

const TempSendMsg = () => {
  const navigation = useNavigation();
  const [text, setText] = useState('empty haha');
  const [texts, setTexts] = useState('empty haha');

  const getNweets = async () => {
    const dbNweets = dbService.collection('nweets').get();
    alert(dbNweets);
  };

  useEffect(() => {
    getNweets();
  });

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
