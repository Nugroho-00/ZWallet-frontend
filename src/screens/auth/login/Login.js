import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Toast} from 'native-base';
import classes from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Material from 'react-native-vector-icons/MaterialIcons';

const Login = () => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [eye, setEye] = useState(true);

  const validation = () => {
    let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
    if (login.email && !reg.test(login.email)) {
      return (
        <View>
          <Text
            style={{...classes.inputwarning, color: 'rgba(255, 91, 55, 1)'}}>
            Incorrect Email
          </Text>
        </View>
      );
    }
    if (login.password && login.password.length < 8) {
      return (
        <View>
          <Text
            style={{...classes.inputwarning, color: 'rgba(255, 91, 55, 1)'}}>
            Password minimum length is 8 character
          </Text>
        </View>
      );
    } else {
      null;
    }
  };

  const loginHandler = () => {
    if (!login.email || !login.password) {
      return Toast.show({
        text: 'Fill in your details!',
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
  };
  console.log(login);
  return (
    <ScrollView contentContainerStyle={classes.maincontainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />
      <View style={classes.uppercontent}>
        <Text style={classes.headertext}>Zwallet</Text>
      </View>
      <View style={classes.bottomcontent}>
        <Text style={classes.loginheader}>Login</Text>
        <Text style={classes.logindesc}>
          Login to your existing account to access all the features in Zwallet.
        </Text>
        <View style={classes.inputgroup}>
          <View style={classes.input}>
            <View style={classes.lefticon}>
              <Ionicons name="mail-outline" size={24} color="#A9A9A9" />
            </View>
            <TextInput
              style={classes.inputbox}
              placeholder="Enter your e-mail"
              placeholderTextColor="rgba(169, 169, 169, 0.8)"
              onChangeText={value => {
                setLogin({...login, email: value});
              }}
            />
          </View>
          <View style={classes.input}>
            <View style={classes.lefticon}>
              <Ionicons name="lock-closed-outline" size={24} color="#A9A9A9" />
            </View>
            <TextInput
              style={classes.inputbox}
              placeholder="Enter your password"
              placeholderTextColor="rgba(169, 169, 169, 0.8)"
              secureTextEntry={eye}
              onChangeText={value => {
                setLogin({...login, password: value});
              }}
            />
            <TouchableOpacity
              style={classes.righticon}
              onPress={() => {
                setEye(!eye);
              }}>
              <Ionicons
                name={eye ? 'eye-off-outline' : 'eye-outline'}
                size={24}
                color="#A9A9A9"
              />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={classes.forgotpassword}>
          <Text style={classes.forgottext}>Forgot Password?</Text>
        </TouchableOpacity>
        {validation()}
        <TouchableOpacity
          style={classes.loginbtn}
          onPress={() => {
            loginHandler();
          }}>
          <Text style={classes.loginbtntext}>Login</Text>
        </TouchableOpacity>
        <View style={classes.signup}>
          <Text style={classes.signupdesc}>Don’t have an account? Let’s</Text>
          <TouchableOpacity style={classes.signupbtn}>
            <Text style={classes.signupbtntext}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
