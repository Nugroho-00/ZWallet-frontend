import React from 'react';
// import {StyleSheet, View, Alert} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/screens/auth/login/Login';
import Signup from './src/screens/auth/signup/Signup';
import SendEmail from './src/screens/auth/reset/send_email/SendEmail';
import ResetPassword from './src/screens/auth/reset/reset/ResetPassword';
import CreatePin from './src/screens/auth/create_pin/CreatePin';
import PinSuccess from './src/screens/auth/create_pin/PinSuccess';
import ConfirmOtp from './src/screens/auth/confirm_otp/ConfirmOtp';
import ChangePin from './src/screens/change_pin/ChangePin';
import PinConfirmation from './src/screens/pin_confirmation/PinConfirmation';
import {connect} from 'react-redux';

import Home from './src/screens/dashboard/home/Home';
import TransactionDetail from './src/screens/dashboard/transaction_detail/TransactionDetail';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeNavigation() {
  return (
    <Stack.Navigator headerMode={'none'} initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
    </Stack.Navigator>
  );
}

const App = props => {
  // console.log(props);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <Stack.Navigator
        headerMode={'none'}
        screenOptions={{
          cardStyle: {backgroundColor: '#FAFCFF'},
        }}
        initialRouteName="Login">
        {!props.loginReducers.isLogin ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={Signup} />
            <Stack.Screen name="SendEmail" component={SendEmail} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
            <Stack.Screen name="CreatePin" component={CreatePin} />
            <Stack.Screen name="PinSuccess" component={PinSuccess} />
            <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
            <Stack.Screen name="PinConfirmation" component={PinConfirmation} />
            <Stack.Screen name="ChangePin" component={ChangePin} />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeNavigation} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,
  };
};

const connectedApp = connect(mapStatetoProps)(App);

export default connectedApp;
