import React, { Component } from 'react';

import {
    StyleSheet,
    ImageBackground
  } from 'react-native';

export default class Background extends Component{
    render(){
        return (
            <ImageBackground style={styles.bgimage} {...this.props} >
                {this.props.children}
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    bgimage: {
        flex: 1
    }
});