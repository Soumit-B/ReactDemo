
import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  WebView
} from 'react-native';
import { connect } from "react-redux";
import Background from '../../../components/layout/Background/Background';

export default class OffersTab extends Component {
  render() {
    return (
      <View style={styles.container}>
          <WebView source={{uri: 'https://github.com/facebook/react-native'}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});