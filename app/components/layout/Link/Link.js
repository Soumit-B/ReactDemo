import React, { Component } from 'react';

import {
    StyleSheet,
    Text,
    Alert
  } from 'react-native';
  import {Actions} from 'react-native-router-flux';

export default class Link extends Component{
    render(){
        return (
            <Text style={[styles.txt, styles.bgborder]} onPress={() => Alert.alert('Work in progress')}>
                {this.props.title}
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    txt: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    bgborder: {
        borderWidth: 0,
        borderColor: "red"
    }
});