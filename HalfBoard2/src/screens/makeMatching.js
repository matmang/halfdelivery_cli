import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, Pressable, TouchableOpacityBase, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';
import { color, set } from 'react-native-reanimated';

class MakeMatching extends Component {
    // state값을 초기화 하는 과정입니다.
    constructor(props) { // render함수보다 먼저 실행이 되면서 그 컴포넌트를 초기화 해주고싶은 코드를 constructor 안에 작성합니다.
        super(props); 
        this.state = {
            category: undefined,
            store: undefined,
            buttonPressed: false,
            buttonPressed2: false,
          }
    }

    // MatchingRequestHost 스크린으로 넘어갈 수 있는지, 검증하기 위한 함수.
    toMatHost = () => {
        if (this.state === null) {
            alert('오류: state 가 null 입니다.')
        } else {
            if (this.state.category === undefined && this.state.store === undefined) {
                alert('카테고리와 음식점을 골라주세요')
            } else if (this.state.category === undefined && this.state.store !== undefined) {
                alert('카테고리을 골라주세요')
            } else if (this.state.store === undefined && this.state.category !== undefined) {
                alert('음식점을 골라주세요')
            } else if (this.state.category !== undefined && this.state.store !== undefined) {                
                this.props.navigation.navigate('MatchingRequestHost', {
                    category: this.state.category,
                    store: this.state.store,
                })
            }
        }
    }

    // 버튼 클릭 여부 (state 연습)
    ButtonPressed = () => {
        (this.state.buttonPressed === false) 
        ? this.setState({buttonPressed: true})
        : this.setState({buttonPressed: false})
    }
    
    // // 함수 만들기 연습.
    // ButtonPressedTarget = (target) => {
    //     (this.state.(target) === false) 
    //     ? this.setState({(target): true})
    //     : this.setState({(target): false})
    // }




  render () {
    //   state = {
    //     category: 'amoogeona',
    //     store: 'amoogeona',
    //     buttonPressed: false,
    //   }

      return (
        <View style={{
            flex: 1,
            alignItems: 'center', // 가로 정렬
            // justifyContent: 'center', // 세로 정렬
            // paddingVertical: 100
        }}>
            <View>
                <Text style={styles.headerText}>음식 카테고리 선택</Text>
            </View>
            <View style={styles.h25}>
                <TouchableHighlight 
                    style={this.state.buttonPressed ? styles.pressed : styles.notPressed} 
                    underlayColor='red'
                    onPress={()=>{ // 버튼 누르면 category 할당.
                        this.setState({
                            category: '한식'
                        })
                        this.ButtonPressed()
                    }}
                > 
                    <Text style={styles.textPressed}>
                        한식
                    </Text>
                </TouchableHighlight>
             </View>
            <View>
                <Text style={styles.headerText}>
                    음식점 선택
                </Text>
            </View>
            <View style={styles.h25}>
                <TouchableHighlight 
                    style={this.state.buttonPressed2 ? styles.pressed : styles.notPressed} 
                    // disabled='true'
                    underlayColor='red'
                    onPress={()=>{ // 버튼 누르면 category 할당.
                        this.setState({
                            store: '한그릇'
                        })
                        this.ButtonPressedTarget(buttonPressed2)
                    }}
                    // onPressIn={

                    // }
                    > 
                        <Text style={styles.textPressed}>
                            한그릇
                        </Text>
                    </TouchableHighlight>
            </View>
            
            <View style={styles.h10}>
                <TouchableHighlight 
                    style={this.state.buttonPressed ? styles.pressed : styles.notPressed} 
                    underlayColor='red'
                    onPress={()=> this.toMatHost()}
                > 
                    <Text style={styles.textPressed}>
                        매칭방 만들기
                    </Text>
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
    h25: {
        width: '95%',
        borderRadius: 10,
        height: '25%',
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'orange',
        alignItems: 'center',
    },
    h10: {
        width: '95%',
        borderRadius: 10,
        height: '10%',
        marginVertical: 10,
        padding: 10,
        backgroundColor: 'pink',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    
    pressed: {
        backgroundColor:'#003399',
        width: '80%',
        borderRadius: 10,
    },
    notPressed: {
        backgroundColor:'lightgrey',
        width: '80%',
        borderRadius: 10,
      },
    textPressed: {
        color:'pink',
        textAlign: 'center',
        fontSize:50,
    },
    textNotPressed: {
        color:'white',
        textAlign: 'center',
        fontSize:50,
    }
});

export default MakeMatching;