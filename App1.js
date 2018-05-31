/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import { Scene, Router, Stack } from 'react-native-router-flux';
import {Navigation} from 'react-native-navigation';
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import {registerScreens, registerScreenVisibilityListener} from './app/screens';
const store = configureStore();


/*export default class App extends Component {
  
  render() {
    
    return (
      // <Router>
      //   <Stack key="root" >
      //     <Scene key="onboard" component={OnBoard} title="OnBoard" hideNavBar initial/>
      //     <Scene key="login" component={Login} title="Login" hideNavBar  />
      //     <Scene key="test" component={Test} title="Test" hideNavBar  />
      //   </Stack>
      // </Router>
    );
  }
}*/

registerScreens(store, Provider);
registerScreenVisibilityListener();

Navigation.startSingleScreenApp({
  screen: {
    screen: 'rci.OnBoard', // unique ID registered with Navigation.registerScreen
    title: 'Welcome', // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {
      navBarHidden: true,
      screenBackgroundImageName: 'bg',  //iOS only
    },
  },
  animationType: 'slide-down'
});

