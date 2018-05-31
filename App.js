import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { Provider } from "react-redux";
import { configureStore } from "./app/store/configureStore";
import {registerScreens, registerScreenVisibilityListener} from './app/screens';
import { pageConstants } from "./app/constants";
import { appInitialized } from "./app/screens/root.action";
const store = configureStore();

registerScreens(store, Provider);
registerScreenVisibilityListener();

const tabs = [
  {
    label: 'Home',
    screen: 'rci.Home.HomeTab',
    icon: require('./app/screens/Home/img/home.png'),
    navigatorStyle: {
      navBarHidden: true,
    },
    navigatorButtons: {}
  },
  {
    label: 'Offers',
    screen: 'rci.Home.OffersTab',
    icon: require('./app/screens/Home/img/offer.png'),
    navigatorStyle: {
      navBarHidden: true,
    },
  },
  {
    label: 'Search',
    screen: 'rci.Home.SearchTab',
    icon: require('./app/screens/Home/img/search.png'),
    navigatorStyle: {
      navBarHidden: true,
    },
  },
  {
    label: 'Vacations',
    screen: 'rci.Home.VacationsTab',
    icon: require('./app/screens/Home/img/vacation.png'),
    navigatorStyle: {
      navBarHidden: true,
    },
  },
  {
    label: 'Profile',
    screen: 'rci.Home.ProfileTab',
    icon: require('./app/screens/Home/img/profile.png'),
    navigatorStyle: {
      navBarHidden: true,
    },
  }
];

export default class App extends Component {
  
  constructor(props){
    super(props);
    store.subscribe(this.onStoreUpdate.bind(this));
    store.dispatch(appInitialized());
  }

  onStoreUpdate(){
      let {root} = store.getState().rootReducer;

      if(this.currentRoot != root){
          this.currentRoot = root;
          this.startApp(root);
      }
  }

  startApp(root){
      switch(root){
          case pageConstants.LOGIN:
              Navigation.startSingleScreenApp({
                screen: {
                  screen: 'rci.OnBoard',
                  navigatorStyle: {
                    navBarHidden: true,
                    screenBackgroundImageName: 'bg',  //iOS only
                  },
                },
                animationType: 'slide-down'
              });
              return;

          case pageConstants.AFTER_LOGIN:
              Navigation.startTabBasedApp({
                tabs,
                appStyle: {
                  orientation: 'portrait', 
                  forceTitlesDisplay: true,
                  navBarButtonColor: '#ffffff',
                  navBarTextColor: '#ffffff',
                  navigationBarColor: '#003a66',
                  navBarBackgroundColor: '#003a66',
                  tabBarBackgroundColor: '#feffff',
                  tabBarButtonColor: '#b0b1b2',
                  tabBarHideShadow: true,
                  tabBarSelectedButtonColor: '#008296',
                  tabBarTranslucent: false,
                  tabFontSize: 10,
                  selectedTabFontSize: 12,
                },                
                passProps: {}, // simple serializable object that will pass as props to all top screens (optional)
                animationType: 'slide-down' // optional, add transition animation to root change: 'none', 'slide-down', 'fade'
              });

              return;
          
          default:
              console.log("Root is Invalid");
      }
  }
}


