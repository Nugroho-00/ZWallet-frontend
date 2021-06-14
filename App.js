import React from 'react';
// import {StyleSheet, View, Alert} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {connect} from 'react-redux';

// AUTH SCREEN
import Login from './src/screens/auth/login/Login';
import Signup from './src/screens/auth/signup/Signup';
import SendEmail from './src/screens/auth/reset/send_email/SendEmail';
import ResetPassword from './src/screens/auth/reset/reset/ResetPassword';
import CreatePin from './src/screens/auth/create_pin/CreatePin';
import PinSuccess from './src/screens/auth/create_pin/PinSuccess';
import ConfirmOtp from './src/screens/auth/confirm_otp/ConfirmOtp';

// MAIN SCREEN
import Home from './src/screens/dashboard/home/Home';
import Notification from './src/screens/notif/Notification';
import TransactionDetail from './src/screens/dashboard/transaction_detail/TransactionDetail';
import TransactionHistory from './src/screens/dashboard/transaction_history/TransactionHistory';

import SearchReceiver from './src/screens/dashboard/transfer/search_reciever/SearchReciever';
import AmountInput from './src/screens/dashboard/transfer/amount_input/Amount';

import TopUp from './src/screens/dashboard/top_up/TopUp';
import Confirmation from './src/screens/dashboard/transfer/confirmation/Confirmation';
import PinConfirmation from './src/screens/dashboard/pin_confirmation/PinConfirmation';
import ConfirmationResult from './src/screens/dashboard/transfer/confirmation_result/ConfirmationResult';

import Profile from './src/screens/profile/Profile';
import PersonalInformation from './src/screens/profile/personal_information/PersonalInformation';
import ChangePassword from './src/screens/profile/change_password/ChangePassword';
import OldPin from './src/screens/profile/change_pin/OldPin';
import NewPin from './src/screens/profile/change_pin/NewPin';
import AddPhone from './src/screens/profile/add_phone/AddPhone';
import ManagePhone from './src/screens/profile/manage_phone/ManagePhone';

const Stack = createStackNavigator();

function TransferNavigation() {
  return (
    <Stack.Navigator
      headerMode={'none'}
      initialRouteName="SearchReceiver"
      screenOptions={{
        cardStyle: {backgroundColor: '#FAFCFF'},
      }}>
      <Stack.Screen name="SearchReceiver" component={SearchReceiver} />
      <Stack.Screen name="AmountInput" component={AmountInput} />
      <Stack.Screen name="Confirmation" component={Confirmation} />
      <Stack.Screen name="PinConfirmation" component={PinConfirmation} />
      <Stack.Screen name="ConfirmationResult" component={ConfirmationResult} />
    </Stack.Navigator>
  );
}

function HomeNavigation() {
  return (
    <Stack.Navigator
      headerMode={'none'}
      screenOptions={{
        cardStyle: {backgroundColor: '#FAFCFF'},
      }}
      initialRouteName="Home">
      <Stack.Screen name="HomeScreen" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Notification" component={Notification} />
      <Stack.Screen name="Transfer" component={TransferNavigation} />
      <Stack.Screen name="TopUp" component={TopUp} />
      <Stack.Screen name="TransactionDetail" component={TransactionDetail} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
      <Stack.Screen
        name="PersonalInformation"
        component={PersonalInformation}
      />
      <Stack.Screen name="ChangePassword" component={ChangePassword} />
      <Stack.Screen name="OldPin" component={OldPin} />
      <Stack.Screen name="NewPin" component={NewPin} />
      <Stack.Screen name="ManagePhone" component={ManagePhone} />
      <Stack.Screen name="AddPhone" component={AddPhone} />
    </Stack.Navigator>
  );
}

const App = props => {
  // console.log(props);
  console.log('ets', props.loginReducers.user.status);

  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <Stack.Navigator
        headerMode={'none'}
        screenOptions={{
          cardStyle: {backgroundColor: '#FAFCFF'},
        }}
        initialRouteName="AmountInput">
        {!props.loginReducers.isLogin ? (
          <>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={Signup} />
            <Stack.Screen name="SendEmail" component={SendEmail} />
            <Stack.Screen name="ResetPassword" component={ResetPassword} />
          </>
        ) : (
          <Stack.Screen name="Home" component={HomeNavigation} />
        )}
        <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
        <Stack.Screen name="CreatePin" component={CreatePin} />
        <Stack.Screen name="PinSuccess" component={PinSuccess} />
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
