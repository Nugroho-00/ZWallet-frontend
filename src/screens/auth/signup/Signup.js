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
import axios from 'axios';
import {API_URL} from '@env';

const Signup = props => {
  const [signup, setSignup] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });
  const [isValid, setValid] = useState(false);
  const [eye, setEye] = useState(true);

  const validation = () => {
    if (signup.username && signup.username.length < 4) {
      return (
        <View>
          <Text
            style={{...classes.inputwarning, color: 'rgba(255, 91, 55, 1)'}}>
            User name must be at least 4 character
          </Text>
        </View>
      );
    }
    let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
    if (signup.email && !reg.test(signup.email)) {
      return (
        <View>
          <Text
            style={{...classes.inputwarning, color: 'rgba(255, 91, 55, 1)'}}>
            Incorrect Email
          </Text>
        </View>
      );
    }
    if (signup.password && signup.password.length < 8) {
      return (
        <View>
          <Text
            style={{...classes.inputwarning, color: 'rgba(255, 91, 55, 1)'}}>
            Password minimum length is 8 character
          </Text>
        </View>
      );
    } else {
      return null;
    }
  };

  const phoneValidation = () => {
    let reg = /^[0-9]*$/;
    if (signup.phone.indexOf(0) === 0) {
      return (
        <View>
          <Text
            style={{...classes.inputwarning, color: 'rgba(255, 91, 55, 1)'}}>
            Phone number should only contain numbers
          </Text>
        </View>
      );
    }
    if (!reg.test(signup.phone)) {
      return (
        <View>
          <Text
            style={{...classes.inputwarning, color: 'rgba(255, 91, 55, 1)'}}>
            Phone number should only contain numbers
          </Text>
        </View>
      );
    } else {
      return true;
    }
  };

  const signupHandler = () => {
    if (
      !signup.email ||
      !signup.password ||
      !signup.phone ||
      !signup.username
    ) {
      return Toast.show({
        text: 'Fill in your details!',
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    console.log("clicked")
    let config = {
      method: 'POST',
      url: `${API_URL}/auth/register`,
      data: signup,
    };
    axios(config)
      .then(res => {
        setSignup({});
        return Toast.show({
          text: 'Sign up success',
          type: 'success',
          textStyle: {textAlign: 'center'},
          duration: 3000,
        });
      })
      .catch(err => console.log({err}));
  };

  // console.log(phoneValidation());
  return (
    <ScrollView>
      <View style={classes.maincontainer}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <View style={classes.uppercontent}>
          <Text style={classes.headertext}>Zwallet</Text>
        </View>
        <View style={classes.bottomcontent}>
          <Text style={classes.loginheader}>Sign Up</Text>
          <Text style={classes.headerdesc}>
            Create your account to access Zwallet.
          </Text>
          <View style={classes.inputgroup}>
            <View style={classes.input}>
              <View style={classes.lefticon}>
                <Ionicons name="person-outline" size={24} color="#A9A9A9" />
              </View>
              <TextInput
                style={classes.inputbox}
                placeholder="Enter your username"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                onChangeText={value => {
                  setSignup({...signup, username: value});
                }}
              />
            </View>
            <View style={classes.input}>
              <View style={classes.lefticon}>
                <Ionicons name="mail-outline" size={24} color="#A9A9A9" />
              </View>
              <TextInput
                style={classes.inputbox}
                placeholder="Enter your e-mail"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                onChangeText={value => {
                  setSignup({...signup, email: value});
                }}
              />
            </View>
            <View style={classes.input}>
              <View style={classes.lefticon}>
                <Ionicons name="call-outline" size={24} color="#A9A9A9" />
              </View>
              <Text style={classes.phonetext}>+62</Text>
              <TextInput
                style={classes.inputboxphone}
                placeholder="Enter your phone number"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                keyboardType="phone-pad"
                onChangeText={value => {
                  setSignup({...signup, phone: value});
                }}
              />
            </View>
            <View style={classes.input}>
              <View style={classes.lefticon}>
                <Ionicons
                  name="lock-closed-outline"
                  size={24}
                  color="#A9A9A9"
                />
              </View>
              <TextInput
                style={classes.inputbox}
                placeholder="Enter your password"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                secureTextEntry={eye}
                onChangeText={value => {
                  setSignup({...signup, password: value});
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
          {validation()}
          <TouchableOpacity
            style={classes.signupbtn}
            disabled={false}
            onPress={() => {
              signupHandler();
            }}>
            <Text style={classes.signupbtntext}>Signup</Text>
          </TouchableOpacity>
          <View style={classes.login}>
            <Text style={classes.logindesc}>
              Already have an account? Let’s
            </Text>
            <TouchableOpacity
              style={classes.loginbtn}
              onPress={() => {
                props.navigation.goBack();
              }}>
              <Text style={classes.loginbtntext}> Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Signup;
