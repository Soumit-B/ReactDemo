/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  View,
  Text,
  Button
} from 'react-native';
import { connect } from "react-redux";
import {Navigation} from 'react-native-navigation';

import Background from '../../../components/layout/Background/Background';

export default class SearchTab extends Component {
  onPressLearnMore(){
      Navigation.showModal({
        screen: 'rci.Home.OffersTab', // unique ID registered with Navigation.registerScreen
        title: 'Modal', // title of the screen as appears in the nav bar (optional)
        passProps: {}, // simple serializable object that will pass as props to the modal (optional)
        navigatorStyle: {}, // override the navigator style for the screen, see "Styling the navigator" below (optional)
        navigatorButtons: {
          rightButtons: [{ // buttons for the right side of the nav bar (optional)
            // title: 'close', // if you want a textual button
            // icon: require('../../img/navicon_edit.png'), // if you want an image button
            component: Platform.OS === 'ios' ? 'rci.CloseButton' : null, // if you want a custom button
            passProps: {}, // Object that will be passed as props to custom components (optional)
            buttonColor: 'blue', // Set color for the button (can also be used in setButtons function to set different button style programatically)
            buttonFontSize: 14, // Set font size for the button (can also be used in setButtons function to set different button style programatically)
            buttonFontWeight: '600' ,// Set font weight for the button (can also be used in setButtons function to set different button style programatically)
          }]
        }, 
        animationType: 'slide-up' // 'none' / 'slide-up' , appear animation for the modal (optional, default 'slide-up')
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={this.onPressLearnMore}
          title="Open Modal"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
  });