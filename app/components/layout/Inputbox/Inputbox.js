import React, { Component } from 'react';

import {
    StyleSheet,
    View,
    Text,
    TextInput,
    Image,
    Animated,
    TouchableOpacity
  } from 'react-native';

export default class Inputbox extends Component{
    constructor(props){
        super(props);
        this.state = {isFocused: false, showPassword: false};
    }

    componentWillMount(){
        this._animatedIsFocused = new Animated.Value(this.props.value === ''? 0 : 1);
    }

    handleFocus = () => this.setState({isFocused: true});
    handleBlur = () => this.setState({isFocused: false});

    componentDidUpdate(){
        Animated.timing(this._animatedIsFocused,{
            toValue: (this.state.isFocused || this.props.value !== '' )? 1 : 0,
            duration: 200
        }).start();
    }

    render(){
        const {isFocused} = this.state;
        const lblStyle = {
            position: 'absolute',
            left: 0,
            color: "#FFFFFF",
            marginLeft: 50,
            bottom: this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [15, 45]
            }),
            fontSize:this._animatedIsFocused.interpolate({
                inputRange: [0, 1],
                outputRange: [20, 15]
            })
            
        };

        let imgIcon = this.state.showPassword? this.props.onShowImg : this.props.onHideImg;
        let shw = (this.props.secureTextEntry && !this.state.showPassword) ? true: false;

        return (
            <View style={[styles.mainContainer]}>
                <Animated.Text style={lblStyle}>{this.props.label}</Animated.Text>
                <View style={[styles.container]}>
                    <Image source={this.props.source} style={[styles.iconimg]} ></Image>                    
                    <TextInput {...this.props}
                        secureTextEntry={(this.props.secureTextEntry && !this.state.showPassword)}
                        style={[styles.inputTxt]}
                        underlineColorAndroid='rgba(0,0,0,0)'
                        onFocus={this.handleFocus}
                        onBlur={this.handleBlur}
                    />
                    <TouchableOpacity activeOpacity = {1} onPress={() => this.setState({showPassword: !this.state.showPassword})}>
                        <Image source={imgIcon} style={[styles.iconimg]} ></Image>
                    </TouchableOpacity>
                </View>
                <Image source={require('./img/hor_line.png')} style={[styles.btmline]} ></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer:{
        alignItems:'center'
    },
    container: {
        flexDirection: 'row'
    },
    btmline:{
        width: '100%'
    },
    iconimg:{
        height: 35,
        width: 35,
        marginVertical: 5,
        resizeMode: 'contain'
    },
    inputTxt: {
        flex:1,
        fontSize: 24,
        color: "#FFFFFF",
        padding: 10
    },
    bgborder: {
        borderWidth: 0,
        borderColor: "red"
    }
});