import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

export default class login extends Component {

    constructor(props){
        super(props)

    }

    static navigationOptions = {
        title: 'Login'
    }

    componentDidMount(){
        console.log("Login: "+ this.props.navigation);
    }

    goToSignupScreen =()=>{
        this.props.navigation.navigate('signup');
    }

    goToDashboardScreen =async()=>{
        await AsyncStorage.setItem("isLoggedIn", JSON.stringify({'success':true}) );
        // const action = NavigationActions.navigate({
        //     routeName:'app',
        //     actions:[NavigationActions.navigate({routeName:'profile'})]
        // })
        // this.props.navigation.dispatch(action)
        this.props.navigation.navigate('app');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Login Screen</Text>
                <TouchableOpacity onPress={this.goToSignupScreen} style={{backgroundColor:'lightgray', marginBottom:10, marginTop:10}}>
                    <Text style={styles.welcome}>Go to Signup Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToDashboardScreen} style={{backgroundColor:'powderblue'}}>
                    <Text style={styles.welcome}>{'Go to Dashboard'}</Text>
                </TouchableOpacity>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        padding:10
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
