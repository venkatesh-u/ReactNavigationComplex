import React, {Component} from 'react';
import {createStackNavigator, createSwitchNavigator, createAppContainer} from 'react-navigation';
import login from '../screens/unAuthoriized/login';
import signup from '../screens/unAuthoriized/signup';
import forgetPassword from '../screens/unAuthoriized/forgetPassword';
import profile from '../screens/authorized/profile';
import dashboard from '../screens/authorized/dashboard';
import authLoading from '../screens/authLoading';

const authNavigator = createStackNavigator({
    login:{screen: login},
    signup:{screen: signup},
    forgetPassword:{screen:forgetPassword}
}
,{
    initialRouteName:'login'
}

)


const appNavigator = createStackNavigator({
    dashboard:{screen:dashboard},
    profile:{screen: profile}

},{
    initialRouteName:'dashboard'
}) 


const mainNavigator = createSwitchNavigator({

    authLoading:{
        screen: authLoading,
        navigationOptions:{
            header:null
        }
    },
    auth: {
        screen: authNavigator, 
        navigationOptions:{
            header:null
        }
    },
    app: {
        screen: appNavigator, 
        navigationOptions:{
            header:null
        }
    }

}
,{
    initialRouteName:'authLoading'
})


export default createAppContainer(mainNavigator);
