import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class MatchingRequestClient extends Component {
  render(route) {
    const {data} = this.props.route;
    const category = data ? data.category : '한식';
    const store = data ? data.store : '한그릇';

    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center', // 가로 정렬
          justifyContent: 'center', // 세로 정렬
          paddingVertical: 100,
        }}>
        <Text>매칭 요청중</Text>
        <Text>| 주문 내역 창 |</Text>

        {/* <Text>{data}</Text> */}
        <Text>{JSON.stringify(category)}</Text>
        <Text>{JSON.stringify(store)}</Text>

        <Text>내가 주문할 음식은 [Picker]</Text>
        <Button
          style={styles.buttonStyle}
          title="매칭 요청하기"
          onPress={() => {}}
        />
        <Button
          style={styles.buttonStyle}
          title="다른 매칭 선택하기"
          onPress={() => {}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: 100,
    marginBottom: 100,
    marginVertical: 10,
    paddingTop: 10,
  },
});

export default MatchingRequestClient;
