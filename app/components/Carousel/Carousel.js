import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  ImageBackground
} from 'react-native';


export default class Carousel extends Component {
    render(){
        // console.log(this.props)
        const {title, tiles} = this.props;
        return (
            <View style={[styles.container]}>
                <View style={[styles.header]}>
                    <Text style={styles.headerTitle}> {title} </Text>
                    <Text style={styles.seeall}> See All </Text>
                </View>
                <ScrollView horizontal contentContainerStyle={styles.contentContainer}>
                    {tiles.map((prop, key) => {
                        return (
                            <View style={{padding:7}} key={key}>
                                <ImageBackground style={[styles.carouselImg]} source={require('../../screens/Home/img/image3.png')}>
                                    <Text style={[styles.imageName]}>{prop.name}</Text>
                                </ImageBackground>
                            </View>
                        )
                    })}
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 5,
        backgroundColor: '#FFF',
        marginVertical: 4
    },
    header: {
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingVertical: 5,
        paddingHorizontal: 2
    },
    headerTitle: {
        fontSize: 18,
        color: '#002d36'
    },
    seeall:{
        fontSize: 18,
        color: '#00b2d8'
    },
    contentContainer: {
        // padding: 5,
    },
    carouselImg:{
        width: 160, 
        height: 110,
        justifyContent: 'flex-end',
        padding: 7
    },
    imageName: {
        fontSize: 18, 
        color: '#FFF'
    },
    bgborder: {
        borderWidth: 1,
        borderColor: "red"
    }
});