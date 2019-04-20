import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationActions } from 'react-navigation';

export default class dashboard extends Component {
  
    static navigationOptions={
        title:'Dashboard'
    }

    signout=()=>{
        AsyncStorage.removeItem('isLoggedIn');
        const navigateAction = NavigationActions.navigate({
         routeName: 'auth',
         params: {},
         action: NavigationActions.navigate({ routeName: 'signup' }),
       });

       this.props.navigation.dispatch(navigateAction);
//this.props.navigation.goback(null);
    }
  
    render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Dashboard Screen</Text>
        <TouchableOpacity onPress={this.signout} style={{backgroundColor:'powderblue'}}>
            <Text style={styles.welcome}>{'Sign Out'}</Text>
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
