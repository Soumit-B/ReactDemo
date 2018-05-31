/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Clipboard,
  Platform,
  ScrollView
} from 'react-native';

import { StackNavigator } from 'react-navigation';

import FCM, {NotificationActionType} from "react-native-fcm";

import {registerKilledListener, registerAppListener} from "./Listeners";
import firebaseClient from  "./FirebaseClient";

registerKilledListener();

export class PushNotificationComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: "",
      tokenCopyFeedback: ""
    }
  }

  async componentDidMount(){
    registerAppListener(this.props.navigation);
    FCM.getInitialNotification().then(notif => {
      this.setState({
        initNotif: notif
      })
      if(notif && notif.targetScreen === 'detail'){
        setTimeout(()=>{
          this.props.navigation.navigate('Detail')
        }, 500)
      }
    });

    try{
      let result = await FCM.requestPermissions({badge: false, sound: true, alert: true});
    } catch(e){
      console.error(e);
    }

    FCM.getFCMToken().then(token => {
      console.log("TOKEN (getFCMToken)", token);
      this.setState({token: token || ""})
    });

    if(Platform.OS === 'ios'){
      FCM.getAPNSToken().then(token => {
        console.log("APNS TOKEN (getFCMToken)", token);
      });
    }
  } 

  render() { 
      return false;
  }
}
