import React from 'react';
// import {StyleSheet, View, Alert} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Login from './src/screens/auth/login/Login.js';
import CreatePin from './src/screens/auth/create_pin/CreatePin.js';
import PinSuccess from './src/screens/auth/create_pin/PinSuccess.js';
import ConfirmOtp from './src/screens/auth/confirm_otp/ConfirmOtp';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer onReady={() => RNBootSplash.hide({fade: true})}>
      <Stack.Navigator
        headerMode={'none'}
        screenOptions={{
          cardStyle: {backgroundColor: '#FAFCFF'},
        }}>
        <>
          <Stack.Screen name="CreatePin" component={CreatePin} />
          <Stack.Screen name="PinSuccess" component={PinSuccess} />
          <Stack.Screen name="ConfirmOtp" component={ConfirmOtp} />
          <Stack.Screen name="Login" component={Login} />
        </>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
