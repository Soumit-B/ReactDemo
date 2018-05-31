import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
import { connect } from "react-redux";
import Background from '../../../components/layout/Background/Background';

export default class ProfileTab extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is Profile</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
  });