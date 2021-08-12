import {BackgroundColor} from 'chalk';
import React, {
  Component,
  useState,
  useEffect,
  createContext,
  useContext,
} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSetState} from 'react-use';
import {View, Text, Button, TouchableHighlight, Pressable} from 'react-native';
import {FlingGestureHandler} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import Styles from '../../assets/styles';

const MakeMatching = () => {
  // state값
  let [category, setCategory] = useState(false); // 초기값은 다 false.
  let [store, setStore] = useState(false);

  const navigation = useNavigation();

  const TestButton = props => {
    console.log(`1 ${isPress}`);

    const [isPress, setIsPress] = useState(false);

    let touchProps = {
      underlayColor: 'red',
      style: isPress ? Styles.pressed : Styles.notPressed,
      onPress: () => {
        setCategory(props.title);
        // {(isPress ? (setIsPress(false))  : (setIsPress(true)) )}
        // setIsPress(isPress ? false : true), setCategory(props.title);

        // isPress
        //   ? (setIsPress(false), setCategory(props.title))
        //   : (setIsPress(true), setCategory(props.title));

        console.log(`2 ${isPress}`);
      },
    };
    return (
      <View>
        <TouchableHighlight {...touchProps}>
          <Text>{props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  };

  const toMatHostClient = targetScreen => {
    alert(category);
    // if (category === false && store === false) {
    //   alert('카테고리와 음식점을 골라주세요');
    // } else if (category === false && store !== false) {
    //   alert('카테고리를 골라주세요');
    // } else if (category !== false && store === false) {
    //   alert('음식점을 골라주세요');
    // } else {
    //   // 모두 다 골랐으면, 다음 스크린으로 이동.
    //   navigation.navigate(targetScreen, {
    //     category,
    //     store,
    //   });
    // }
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center', // 가로 정렬
        flexDirection: 'column',
      }}>
      <View style={{margin: 2}}>
        <Text style={Styles.headerText}>음식 카테고리 선택</Text>
      </View>
      <View style={Styles.h25row}>
        <TestButton title="한식" />
        <TestButton title="일식" />
        <TestButton title="중식" />
      </View>
      <View style={{margin: 2}}>
        <Text style={Styles.headerText}>음식점 선택</Text>
      </View>
      <View style={Styles.h25row}>
        <TestButton title="한그릇" />
        <TestButton title="크레이지 카츠" />
        <TestButton title="시엔" />
      </View>
      <View style={Styles.h10row}>
        {/*//! 디자인 시안 나오기 전까진, 일단 Button 으로... */}
        {/* <TouchableHighlight
          style={Styles.notPressed}
          underlayColor="red"
          onPress={() => {
            toMatHostClient('MatchingRequestHost');
          }}>
          <Text style={Styles.textPressed}>매칭방 만들기</Text>
        </TouchableHighlight> */}
        <Button
          title="매칭 요청하기"
          onPress={() => {
            toMatHostClient('MatchingRequestClient');
          }}
        />
        <Button
          title="매칭방 만들기"
          onPress={() => {
            toMatHostClient('MatchingRequestHost');
          }}
        />
      </View>
    </View>
  );
};

export default MakeMatching;
