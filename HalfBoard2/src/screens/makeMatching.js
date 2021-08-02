import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Pressable, TouchableOpacityBase, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

class MakeMatching extends Component {
  render () {
      state = {
        category: 'unselected',
        store: 'unselected',
      }

      return (
        <View style={{
            flex: 1,
            alignItems: 'center', // 가로 정렬
            // justifyContent: 'center', // 세로 정렬
            // paddingVertical: 100
        }}>
            <View style={styles.top1o4}>
                <Text style={styles.headerText}>음식 카테고리 선택</Text>
                <Button
                    color='#003399'
                    title="한식"
                    onPress={()=>{ // 버튼 누르면 category 할당.
                        this.setState({
                            category: '한식'
                        })
                    }}
                />
             </View>
            
            <Text style={styles.headerText}>음식점 선택</Text>
            <Button
                title="한그릇"
                onPress={()=>
                    this.setState({ // 버튼 누르면 store 할당.
                        store: '한그릇'
                    })
                }
            />
            <View style={styles.bot1o4}>
                <TouchableHighlight 
                    style={styles.touchableStyle} 
                    underlayColor='red'
                    onPress={()=>
                        // alert('여기에 state 가 와야돼..')
                    this.props.navigation.navigate('AskMatchingHost', {
                    })
                  }
                > 
                    <Text style={styles.text}>매칭방 만들기</Text>
                </TouchableHighlight>
            </View>
            
        </View>
    )
  } 
}

const styles = StyleSheet.create({
    headerText: {
        fontSize: 20,
    },
    bot1o4: {
        width: '100%',
        height: '25%',
        marginTop: 200,
        padding: 10,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
    },
    top1o4: {
        width: '100%',
        height: '25%',
        marginTop: 10,
        padding: 10,
        backgroundColor: 'lightgrey'
    },
    touchableStyle: {
        backgroundColor:'#003399',
        width: '80%',
      },
    text: {
        color:'pink',
        textAlign: 'center',
        fontSize:50,
    }
});

export default MakeMatching;