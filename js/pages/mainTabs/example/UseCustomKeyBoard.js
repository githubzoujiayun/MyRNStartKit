//首页
import React, { Component } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TouchableWithoutFeedback,
    StyleSheet,
    TextInput,
    findNodeHandle,

} from 'react-native'

import '../../../components/keyBoards/RNKeyboard'
import { CustomTextInput } from '../../../components/keyBoards/customKeyboard';

export default class UseCustomKeyBoard extends Component {

    static navigationOptions = {
        title: '使用自定义键盘',
        tabBarVisible: false
    };

    constructor(props) {
        super(props)
        this.state = { showKeyboard: false, text: 'text text' };
    }

    onChangeText = (text) => {
        this.setState({ text: text })
    }

    _onChange = ({nativeEvent}) => {
        let s = nativeEvent.text
        if(s.length) {
            console.log(`code = ${s.charCodeAt(s.length-1)}`)
        }
    }

    render() {
        return (
            <View style={styles.root}>
                <CustomTextInput ref={this.onRef} style={styles.textInput} customKeyboardType="hello" value={this.state.text} onChangeText={this.onChangeText} />
                <TextInput style={styles.textInput} defaultValue={'default 1 value'} onChange={this._onChange}/>
                <TextInput style={styles.textInput} defaultValue={'default 2 value'} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
    },
    textInput: {
        height: 50,
    }
})