import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    TouchableOpacity
  } from 'react-native';
import {Navigation} from 'react-native-navigation';

import  Button from "./Button";

export default class CloseButton extends Component{

    constructor(props){
        super(props);
    }

    closeModal(){
        Navigation.dismissModal({
            animationType: 'slide-down'
        });
    }

    render(){
        return (
            <TouchableOpacity style={styles.buttonStyle} onPress={this.closeModal.bind(this)}>
              <Text style={styles.btnTxt}> Close </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    buttonStyle: {
        // backgroundColor: '#FFFFFF',
    },
    btnTxt: {
        fontSize: 16,
        color: "#FFFFFF"
    }
});