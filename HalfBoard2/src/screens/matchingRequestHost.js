import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class MatchingRequestHost extends Component {
  render () {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center', // 가로 정렬
            justifyContent: 'center', // 세로 정렬
            paddingVertical: 100
        }}>
            <Text>매칭 요청중</Text>
            <Text>[ 주문 내역 창 ]</Text>
            <Text>
                {this.props.route.params.category}
                 그리고 
                {this.props.route.params.store}
            </Text>
            <Button
                style={styles.buttonStyle}
                title="예치금 충전하기"
                onPress={()=>{

                }}
            />
            <Button
                style={styles.buttonStyle}
                title="매칭 취소하기"
                onPress={()=>{
                
                }}
            />
        </View>
    )
  } 
}

const styles = StyleSheet.create({
    buttonStyle: {
        marginTop: 100,
        marginBottom: 100,
        marginVertical: 10,
        paddingTop: 10,
      }
});

export default MatchingRequestHost;