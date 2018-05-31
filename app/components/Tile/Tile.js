import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';


export default class Tile extends Component {
    render(){
        return (
            <View style={[styles.container]}>
                <Text style={[styles.lbl]}> {this.props.label} </Text>
                <Text style={[styles.txtValue]}> {this.props.value} </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 11,
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        // borderRightWidth: 1,
        // borderColor: "#c1c1c1"
    },
    lbl: {
        fontSize: 14,
        textAlign: 'center',
        color: '#b0b1b2'
    },
    txtValue: {
        fontSize: 17,
        textAlign: 'center', 
        fontWeight: 'bold',
        color: '#00b2a6'
    },
    bgborder: {
        borderWidth: 1,
        borderColor: "red"
    }
});