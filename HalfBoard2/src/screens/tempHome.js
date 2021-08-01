import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class TempHome extends Component {
  render () {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center', // 가로 정렬
            justifyContent: 'center', // 세로 정렬
            paddingVertical: 100
        }}>
            <Button
                style={styles.buttonStyle}
                title="매칭방 만들기"
                onPress={()=>{
                    this.props.navigation.navigate('MakeMatching')
                }}
            />
            <Button
                style={styles.buttonStyle}
                title="매칭 요청중 - Host"
                onPress={()=>{
                    this.props.navigation.navigate('FindPartners')
                }}
            />
            <Button
                style={styles.buttonStyle}
                title="매칭 요청하기 - Client"
                onPress={()=>{
                    this.props.navigation.navigate('AskMatching')
                }}
            />
            <Button
                style={styles.buttonStyle}
                title="매칭 성공"
                onPress={()=>{
                    this.props.navigation.navigate('MatchingSuccess')
                }}
            />
            <Button
                style={styles.buttonStyle}
                title="매칭 실패"
                onPress={()=>{
                    this.props.navigation.navigate('MatchingFailed')
                }}
            />
            <Button
                style={styles.buttonStyle}
                title="공지사항"
                onPress={()=>{
                    this.props.navigation.navigate('InfoBoard')
                }}
            />
            <Button
                style={styles.buttonStyle}
                title="약관 및 정책"
                onPress={()=>{
                    this.props.navigation.navigate('PoliciesBoard')
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

export default TempHome;