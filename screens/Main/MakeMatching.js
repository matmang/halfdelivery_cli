import {BackgroundColor} from 'chalk';
import React, {useState, t} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useSetState} from 'react-use';
import {View, Text, Button, TouchableHighlight, Pressable} from 'react-native';
import {FlingGestureHandler} from 'react-native-gesture-handler';
import {color} from 'react-native-reanimated';
import Styles from '../../assets/Styles2';

const MakeMatching = () => {
  // state값
  let [category, setCategory] = useState(false);
  let [store, setStore] = useState(false);

  console.log(category);

  const navigation = useNavigation();

  // const TestButton = props => {
  //   const [isPress, setIsPress] = useState(false);
  //   let touchProps = {
  //     underlayColor: 'red',
  //     style: isPress ? Styles.pressed : Styles.notPressed,
  //     onPress: () => {
  //       setIsPress(isPress ? false : true), setCategory(props.title);
  //     },
  //   };
  //   return (
  //     <View>
  //       <TouchableHighlight {...touchProps}>
  //         <Text>{props.title}</Text>
  //       </TouchableHighlight>
  //     </View>
  //   );
  // };

  const CategoryButton = props => {
    return (
      <View style={{margin: 10}}>
        <Button
          title={props.name}
          onPress={() => {
            setCategory(props.name);
          }}
        />
      </View>
    );
  };

  const StoreButton = props => {
    return (
      <View style={{margin: 10}}>
        <Button
          title={props.name}
          onPress={() => {
            setStore(props.name);
          }}
        />
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
        category,
        store,
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
        <CategoryButton name="한식" />
        <CategoryButton name="일식" />
        <CategoryButton name="중식" />
      </View>
      <View style={{margin: 2}}>
        <Text style={Styles.headerText}>음식점 선택</Text>
      </View>
      <View style={Styles.h25row}>
        <StoreButton name="리틀 크레이지 피자" />
        <StoreButton name="최고당 돈까스" />
        <StoreButton name="김가네" />
        <StoreButton name="한그릇" />
        <StoreButton name="바비든든" />
      </View>
      <View style={Styles.h10row}>
        {/*//! 디자인 시안 나오기 전까진, 일단 Button 으로... */}
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
