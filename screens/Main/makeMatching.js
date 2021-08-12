import {BackgroundColor} from 'chalk';
import React, {Component, useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSetState} from 'react-use';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Pressable,
  TouchableOpacityBase,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';
import {FlingGestureHandler} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import Styles from '../../assets/styles';

const MakeMatching = () => {
  // state값
  let [category, setCategory] = useState(false); // 초기값은 다 false.
  let [store, setStore] = useState(false);
  let [btn, setBtn] = useState(false);

  let [categoryName, setCategoryName] = useState(undefined);
  let [storeName, setStoreName] = useState(undefined);

  // 위 코드 useSetState 훅 이용해서 refactoring 중입니다. - 0810 수민.
  const [categories, setCategories] = useSetState({
    korean: false,
    japanese: false,
    chinese: false,
    western: false,
  });

  // navigation
  const navigation = useNavigation();

  const CategoryButton = props => {
    return (
      <View>
        <TouchableHighlight
          style={category ? Styles.pressed : Styles.notPressed}
          // {...props}
          underlayColor="red"
          onPress={() => {
            // 버튼 누르면 categoty 할당.
            setCategory(true);
            setCategoryName(props.title);
          }}>
          <Text style={Styles.textPressed} {...props}>
            {props.title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  };

  const StoreButton = props => {
    return (
      <View>
        <TouchableHighlight
          style={store ? Styles.pressed : Styles.notPressed}
          // {...props}
          underlayColor="red"
          onPress={() => {
            // 버튼 누르면 categoty 할당.
            setStore(true);
            setStoreName(props.title);
          }}>
          <Text style={Styles.textPressed} {...props}>
            {props.title}
          </Text>
        </TouchableHighlight>
      </View>
    );
  };

  const toMatHostClient = targetScreen => {
    if (category === false && store === false) {
      alert('카테고리와 음식점을 골라주세요');
    } else if (category === false && store !== false) {
      alert('카테고리를 골라주세요');
    } else if (category !== false && store === false) {
      alert('음식점을 골라주세요');
    } else {
      // 모두 다 골랐으면, 다음 스크린으로 이동.
      navigation.navigate(targetScreen, {
        categoryName,
        storeName,
      });
    }
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
        <CategoryButton title="한식" />
        <CategoryButton title="일식" />
        <CategoryButton title="중식" />
      </View>
      <View style={{margin: 2}}>
        <Text style={Styles.headerText}>음식점 선택</Text>
      </View>
      <View style={Styles.h25row}>
        <StoreButton title="크레이지 카츠" />
        <StoreButton title="한그릇" />
        <StoreButton title="시엔" />
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
