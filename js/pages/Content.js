//内容页
import React, {Component} from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
} from 'react-native'
import {NavigationActions} from 'react-navigation'

export default class Content extends Component {
    static navigationOptions = ({navigation}) => ({
        title: `内容页${navigation.state.params}`,
        tabBarVisible: false,
    });

    _next = () => {
        const {navigate} = this.props.navigation
        const { params } = this.props.navigation.state
        let curPage = params
        navigate('Content', ++curPage)
    }
    
    render() {
        const { params } = this.props.navigation.state
        return (
            <View style = {styles.root}>
                <Text>这是第：{`${params}`}个内容页</Text>
                <TouchableOpacity onPress={this._next}>
                    <Text>点击进入下一个内容页</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})