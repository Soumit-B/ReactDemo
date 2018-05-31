import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Image
  } from 'react-native';

export default class Logo extends Component{
    render(){
        return (
            <Image style={styles.bgimage} source={require('./img/logo.png')} >
            </Image>
        );
    }
}

const styles = StyleSheet.create({
    bgimage: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    }
});