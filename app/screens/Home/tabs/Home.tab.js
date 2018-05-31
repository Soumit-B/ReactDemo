/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Image,
  Button,
  Text
} from 'react-native';
import { connect } from "react-redux";
import Background from '../../../components/layout/Background/Background';
import Tile from '../../../components/Tile/Tile';
import Carousel from '../../../components/Carousel/Carousel';

export default class HomeTab extends Component {
  render() {
    let carouselData = {
      regions: [{name: 'Carolinas & Southwest', img: '../../screens/Home/img/image1.png'},
                {name: 'Florida - Orlando Area', img: '../../screens/Home/img/image2.png'},
                {name: 'Florida - Orlando Area', img: '../../screens/Home/img/image3.png'}]
    };
    return (
      <ScrollView contentContainerStyle={styles.contentContainer}>
      
          <View style={[styles.header]}>
            <Background source={require('../img/header_bg.png')}>
              <View style={[styles.userdetails]}>
                  <View style={[styles.userbanner]}>
                    <Text style={styles.usrname}> Hi, John</Text>
                    <Text style={styles.texttag}> Discover a World of Incredible</Text>
                    <Text style={styles.texttag}> Resorts</Text>
                  </View>
                  <View style={[styles.locationbox]}>
                      <Image source={require('../img/location.png')} style={styles.locimg}></Image>
                      <Text style={styles.texttag}> USA</Text>
                  </View>
              </View>              
            </Background>
            <View style={[styles.tilesContainer]}>
              <View style={{flex: 1.8, paddingRight: 1}}>
                <Tile label="Member ID" value="1-2722632" />
              </View>
              <View style={{flex: 2.4, paddingRight: 1}}>
                <Tile label="Current Use Year Balance" value="100,000 points" />
              </View>
              <View style={{flex: 1.8}}>
                <Tile label="Current Use Year" value="2017" />
              </View>
            </View>
          </View>

          <View style={[styles.groups]}>
              <Carousel title="Regions" tiles={carouselData.regions} />
              <Carousel title="Experiences" tiles={carouselData.regions} />
              <Carousel title="Other Popular Destinations" tiles={carouselData.regions} />
          </View>

          <View style={[styles.banners]}>
              <View style={{flex: 1, paddingVertical: 3}}>
                <Background source={require('../img/promotional_add_bg.png')}>
                  <View style={[styles.imgBanner]}>
                      <View style={[styles.txtcontainer]}>
                        <Text style={[styles.texttag]}> Browse and discover </Text>
                        <Text style={[styles.texttag]}> the perfect resort for you </Text>
                      </View>
                  </View>
                </Background>
              </View>
              <View style={{flex: 1, paddingVertical: 3}}>
                {/* <Background source={require('../img/offers.png')}>
                  <View style={[styles.imgBanner]}>
                      <View style={[styles.offerTxtContainer]}>
                        <Text style={[styles.headertxt]}> Never Miss an Offer </Text>
                        <Text style={[styles.subtxt]}> 
                          Allow push Notifications to know amazing discounts instantly 
                        </Text>
                      </View>
                  </View>
                </Background> */}
                <Background source={require('../img/promotional_add_bg.png')}>
                  <View style={[styles.imgBanner]}>
                      <View style={[styles.txtcontainer]}>
                        <Text style={[styles.texttag]}> Browse and discover </Text>
                        <Text style={[styles.texttag]}> the perfect resort for you </Text>
                      </View>
                  </View>
                </Background>
              </View>
          </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  contentContainer  : {
    // paddingVertical: 20,
    backgroundColor: '#E3E3E3'
  },
  header: {
    flex: 1
  },
  userdetails:{
    padding: 20, 
    flex:1
  },
  userbanner:{
    flex:2, 
    justifyContent: 'space-around'
  },
  usrname:{
    fontSize: 36, 
    color: '#FFF'
  },
  tilesContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  locationbox: {
    paddingTop: 10,
    flex:1, 
    flexDirection: 'row',
    justifyContent:'flex-end',
    alignItems:'center'
  },
  locimg: {
    width:26, 
    height:26, 
    resizeMode: 'contain'
  },
  texttag: {
    fontSize: 22, 
    color: '#FFF'
  },
  groups: {
    flex: 2,
    marginVertical: 4
  },
  banners: {
    flex: 2,
    paddingHorizontal: 10
  },
  imgBanner:{
    flex: 1,
    alignItems: 'flex-end',
  },
  txtcontainer: {
    paddingVertical: 32,
    paddingHorizontal: 5
  },
  txtContent: {
    /*fontSize: 22,
    color: '#FFF'*/
  },
  textBanner: {
    flex:1
  },
  headertxt: {
    fontSize: 22,
    color: '#00908a'
  },
  subtxt: {
    fontSize: 16,
    color: '#818283'
  },
  offerTxtContainer: {
    paddingVertical: 35,
    paddingHorizontal: 15
  },
  bgborder: {
      borderWidth: 1,
      borderColor: "red"
  }
});