import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class MakeMatching extends Component {
  render () {
    return (
        <View style={{
            flex: 1,
            alignItems: 'center', // 가로 정렬
            justifyContent: 'center', // 세로 정렬
            paddingVertical: 100
        }}>
            <Text>음식 카테고리 선택</Text>
            <Button
                style={styles.buttonStyle}
                title="한식"
                onPress={()=>{
                    // 버튼을 누르면 'User' 스크린으로 이동하고,
                    // 아래 parameters 를 'User' route 에 passing 한다.
                    this.props.navigation.navigate('User', {
                        userIdx: 100,
                        userName: 'Gildong',
                        userLastName: 'Hong',
                    })
                }}
            />
            <Text>음식점 선택</Text>
            <Button
                style={styles.buttonStyle}
                title="한그릇"
                onPress={()=>
                    // 버튼을 누르면, 이 스크린의 헤더 타이틀을 Changed!!! 로 바꾼다.
                    // navigation.setOptions() 함수를 이용하였다.
                    this.props.navigation.setOptions({
                        title: 'Changed!!!',
                        headerStyle: {
                            backgroundColor: 'orange'
                        },
                        headerTintColor: 'teal'
                    })
                }
            />
            <Button
                style={styles.buttonStyle}
                title="매칭방 만들기"
                onPress={()=>
                    // 버튼을 누르면 'FindPartners' 스크린으로 이동하고,
                    // 아래 parameters 를 'User' route 에 passing 한다.
                    this.props.navigation.navigate('FindPartners', {
                        userIdx: 100,
                        userName: 'Gildong',
                        userLastName: 'Hong',
                    })
                }
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

export default MakeMatching;