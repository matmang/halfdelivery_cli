import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class PoliciesBoard extends Component {
  render () {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center', // 가로 정렬
            justifyContent: 'center', // 세로 정렬
            paddingVertical: 100
        }}>
            <View style={{padding: 20, }}>
                <Text textAlign='left'>
                    If I had wings I would fly to you
                    Even if it doesn't make sense at all
                    If I lose my tongue then I'll be dancing for you
                    Even when I cannot find a place to do
                    Yeah, I fell in love
                    Come kiss me, wake me up
                    I hope you wish me luck even when I'm down on my knees
                    Yeah, I fell in love
                    Come kiss me, wake me up
                    I hope you wish me luck even when I'm down on my knees
                    Yeah, I fell in love
                    Come kiss me, wake me up
                    Only you
                    Only you can wake me up
                    Yeah, I fell in love
                    Come kiss me, wake me up
                    Only you
                    Only you can wake me up
                </Text>
            </View>
            
            <Button
                style={styles.buttonStyle}
                title="약관 전문 보기"
                onPress={()=>{
                    this.props.navigation.navigate('')
                }}
            />
            <Button
                style={styles.buttonStyle}
                title="홈으로 돌아가기"
                onPress={()=>{
                    this.props.navigation.navigate('TempHome')
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

export default PoliciesBoard;