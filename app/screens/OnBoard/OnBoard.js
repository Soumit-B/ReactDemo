/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';
// import {Actions} from 'react-native-router-flux';
import FCM, {NotificationActionType} from "react-native-fcm";

import Background from '../../components/layout/Background/Background';
import Button from '../../components/layout/Button/Button';
import Link from '../../components/layout/Link/Link';

import { PushNotificationComponent } from "../../components/PushNotifications";

export default class OnBoard extends Component {

  _navigateToLogin(){
      // Actions.login();
      this.props.navigator.push({
        screen: 'rci.Login',
        title: 'Login',
        navigatorStyle: {
          navBarHidden: true,
        }, 
        animationType: 'slide-horizontal'
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <PushNotificationComponent />
        <Background source={require('./img/background.png')}>
          <View style={[styles.blnkContainer, styles.bgborder]}>
          </View>
          <View style={[styles.btnContainer, styles.bgborder]}>
            <Button title="sign in" onPress={this._navigateToLogin.bind(this)} />

            <View style={[styles.linkContainer, styles.bgborder]}>
              <Link title="Not having an account? Register Now!" />
              <Link title="Continue as guest" />
            </View>   
          </View>
        </Background>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  blnkContainer: {
      flex:2,
  },
  btnContainer: {
    flex:1,
    padding:15
  },
  linkContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  bgborder: {
    borderWidth: 0,
    borderColor: "red"
  }
});
