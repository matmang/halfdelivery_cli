import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { TextInput, Button, View, Text, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MakeMatching from './src/screens/makeMatching';
import AskMatching from './src/screens/askMatching';
import FindPartners from './src/screens/findPartners';
import MatchingSuccess from './src/screens/matchingSuccess';
import MatchingFailed from './src/screens/matchingFailed';
import InfoBoard from './src/screens/infoBoard';
import PoliciesBoard from './src/screens/policiesBoard';
import TempHome from './src/screens/tempHome';


// Firebase 설정!!
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// var firebaseConfig = {
//   apiKey: "AIzaSyCpdiRHq1totaX501PRcvW_RKdb4EbE_04",
//   authDomain: "boardtest-c8980.firebaseapp.com",
//   databaseURL: "https://boardtest-c8980-default-rtdb.firebaseio.com",
//   projectId: "boardtest-c8980",
//   storageBucket: "boardtest-c8980.appspot.com",
//   messagingSenderId: "115629094583",
//   appId: "1:115629094583:web:60dba51ab914b6c22fbf32",
//   measurementId: "G-97RR6JHHBK"
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

const Stack = createStackNavigator(); // 스크린, 네비게이터 이 두개의 프로퍼티를 리턴 하는 함수임.

class App extends Component {
  render() { 
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='TempHome'>
          <Stack.Screen
            name='TempHome' 
            component={TempHome}
            options={{
              title: '(임시) 홈'
            }}
          />
          <Stack.Screen
            name='MakeMatching' 
            component={MakeMatching}
            options={{
              title: '매칭방 만들기'

            }}
          />
          <Stack.Screen 
            name='FindPartners' 
            component={FindPartners}
            options={{
              title: '매칭 요청중 - Host'

            }}
          />
          <Stack.Screen 
            name='AskMatching' 
            component={AskMatching}
            options={{
              title: '매칭 요청하기 - Client'

            }}
          />
          <Stack.Screen 
            name='MatchingSuccess' 
            component={MatchingSuccess}
            options={{
              title: '매칭 성공'

            }}
          />
          <Stack.Screen 
            name='MatchingFailed' 
            component={MatchingFailed}
            options={{
              title: '매칭 실패'

            }}
          />
         <Stack.Screen 
            name='InfoBoard' 
            component={InfoBoard}
            options={{
              title: '공지사항'

            }}
          />
          <Stack.Screen 
            name='PoliciesBoard' 
            component={PoliciesBoard}
            options={{
              title: '약관 및 정책'

            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }

  // state = {
  //   myTextInput: '', // myTextInput 선언 및 초기화.
  //   ChickenPizzaDosirak: ['치킨', '피자', '도시락']
  // }

  // // event 인자를 받고, myTextInput 를 event 로 업데이트 하는 함수를 만들자.
  // onChangeInput = (event) => {
  //   this.setState({
  //       myTextInput: event // 업데이트
  //   })
  // }

  // onAddTextInput = () => {
  //   this.setState(prevState => {
  //     return {
  //       myTextInput: '', // 버튼누르고, 재입력시 이전에 썼던 텍스트 지워주기 위해서 추가.
  //       ChickenPizzaDosirak: [...prevState.ChickenPizzaDosirak, prevState.myTextInput]
  //     }
  //   })
  // }

}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    alignItems: 'center', // 수평 정렬
    // justifyContent: 'center' // 수직 정렬
  },
  
  subView: {
    backgroundColor: 'white',
    marginBottom: 20,
    flex: 1,
    alignItems: 'center',
  },

  mainText: {
    fontSize: 20,
    fontWeight: 'normal',
    color: 'white',
    padding: 20,
    margin: 1,
    backgroundColor: 'pink'
  },

  infoText: {
    textAlign: 'center'
  },

  input: {
    width: '100%',
    backgroundColor: '#cecece',
    marginTop: 40,
    fontSize: 25,
    padding: 10,
  },


})

export default App;
