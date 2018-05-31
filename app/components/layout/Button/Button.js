import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity
  } from 'react-native';

export default class Button extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <TouchableOpacity style={styles.buttonStyle} {...this.props} >
              <Text style={styles.btnTxt}> {this.props.title.toUpperCase()} </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        borderRadius: 25,
        padding: 10
    },
    btnTxt: {
        fontSize: 24,
        color: "#31906C"
    }
});