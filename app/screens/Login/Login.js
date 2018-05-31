import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Image,
  KeyboardAvoidingView
} from 'react-native';

import { connect } from "react-redux";

import Background from '../../components/layout/Background/Background';
import Logo from '../../components/layout/Logo/Logo';
import Inputbox from '../../components/layout/Inputbox/Inputbox';
import Button from '../../components/layout/Button/Button';
import Link from '../../components/layout/Link/Link';

// import { login } from "./login.action";
import { login } from "../root.action";

class Login extends Component {

  constructor(props) {
    super(props);
    this.state = { username: '' , password: ''};
  }

  render() {

    const {people, isFetching} = this.props;

    

    return (
      <View style={styles.container} >
        <Background source={require('./img/bg.png')}>
            <View style={[styles.logoContainer, styles.bgborder]}>
                <Logo />
            </View>
            <View style={[styles.formContainer, styles.bgborder]}>
                <View style={[styles.inputContainer, styles.bgborder]}>
                  <Inputbox label="User Name" source={require('./img/username.png')}
                        secureTextEntry={false}
                        onChangeText={(username) => this.setState({username})}
                        value={this.state.username} />
                  <Inputbox label="Password" source={require('./img/password.png')}
                    secureTextEntry={true}
                    onShowImg={require('./img/password-show.png')} onHideImg={require('./img/password-hide.png')}
                    onChangeText={(password) => this.setState({password})}
                    value={this.state.password} />
                </View>
                <View style={[styles.btnContainer, styles.bgborder]}>
                    <Button title="sign in" onPress={this.props.login} />
                </View>
                <View style={[styles.linkContainer, styles.bgborder]}>
                    <View style={styles.forgotLnks}>
                      <Link title="Forgot Username?" />
                      <Image source={require('./img/line.png')} style={styles.hrline} ></Image>
                      <Link title="Forgot Password?" />
                    </View>
                    <View>
                      <Link title="Back to Previous" />
                    </View>
                </View>
            </View>
            
        </Background>
      </View>
    );
  }
}

function mapStateToProps(state, props){
    return {
        people: state.loginReducer
    }
}

function mapDispatchToProps(dispatch){
    return {
        login: () => {
            dispatch(login());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        flex:1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    formContainer: {
        flex:2,
        padding: 15,
    },
    inputContainer:{
        flex: 3,
        justifyContent: 'space-around'
    },
    btnContainer:{
        flex: 1,
        marginVertical:10
    },
    linkContainer: {
        flex: 3,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    forgotLnks:{
        flexDirection: 'row',
    },
    hrline:{
        height: 20,
        marginHorizontal: 10
    },
    bgborder: {
        borderWidth: 0,
        borderColor: "red"
    }
  });
  
