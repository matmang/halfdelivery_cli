import React, {Component} from 'react';
import {StyleSheet, View, Text, Button} from 'react-native';

class InfoBoard extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center', // 가로 정렬
          justifyContent: 'center', // 세로 정렬
          paddingVertical: 100,
        }}>
        <Text>공지사항</Text>
        <Text>| 공지 창 |</Text>
        <Button
          style={styles.buttonStyle}
          title="홈으로 돌아가기"
          onPress={() => {
            this.props.navigation.navigate('TempHome');
          }}
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

export default InfoBoard;
