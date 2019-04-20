import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, ActivityIndicator, ToastAndroid } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationActions } from 'react-navigation';



export default class authLoading extends Component {

    static navigationOptions = {
        title: 'Login'
    }

    async componentDidMount() {
        const object = await AsyncStorage.getItem('isLoggedIn');
        setTimeout(() => {

            if(object!=null){
                const value = JSON.parse(object);
                console.log('isLoggedIn: '+value.success);
                // ToastAndroid.show('isLoggedIn: '+value.success, ToastAndroid.SHORT);

                if(value.success){
                    this.goToNextScreen('app');
                }else{
                  this.goToNextScreen('auth');
                }
            }else{
                this.goToNextScreen('auth');
                console.log('isLoggedIn: '+object+" false");
                // ToastAndroid.show('isLoggedIn: '+object, ToastAndroid.SHORT);
            }
               
        }, 2000)
    }

    goToNextScreen = (route) => {
             ToastAndroid.show("Route: "+route, ToastAndroid.SHORT);
//             const action = NavigationActions.navigate({
//             routeName:route,
//             params:{"route":route},
//             action:NavigationActions.navigate({routeName:'forgetPassword'})
//         })
//         this.props.navigation.dispatch(action);

        this.props.navigation.navigate('forgetPassword');
    }

    // goToDashboardScreen =()=>{
    //     this.props.navigation.navigate('app');
    // }

    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#0000ff" />
                <Text style={styles.welcome}>AuthLoading Screen</Text>
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
        padding: 10
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
