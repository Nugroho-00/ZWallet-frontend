import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Form, Toast} from 'native-base';
import classes from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import {API_URL} from '@env';
import {
  usernameValidation,
  emailValidation,
  passwordValidation,
  phoneValidation,
} from '../../../services/validation/Validation';
import {FormStyle} from '../../../services/formhandler/FormStyle';

const Signup = props => {
  const [signup, setSignup] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  });
  const [warning, setWarning] = useState({
    usernamewarning: '',
    emailwarning: '',
    phonewarning: '',
    passwordwarning: '',
  });
  const [eye, setEye] = useState(true);


  const sendOtp = ()=>{
    let config = {
      method: 'POST',
      url: `${API_URL}/auth/send-otp`,
      data: {email: signup.email},
    };
    axios(config)
      .then(res => {
        console.log(res);
        props.navigation.navigate('ConfirmOtp', {id: res.data.userId, type:'non-reset'});
      })
      .catch(err => {
        console.log({err});
        // if (err.response.data?.message === 'Email not found !!!') {
        //   return Toast.show({
        //     text: 'User is not registered, go to signup page to get started',
        //     type: 'danger',
        //     textStyle: {textAlign: 'center'},
        //     duration: 3000,
        //   });
        // }
      });
  }

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
    if (
      warning.usernamewarning ||
      warning.emailwarning ||
      warning.phonewarning ||
      warning.passwordwarning
    ) {
      return Toast.show({
        text:
          warning.usernamewarning ||
          warning.emailwarning ||
          warning.phonewarning ||
          warning.passwordwarning,
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    console.log('clicked');
    let config = {
      method: 'POST',
      url: `${API_URL}/auth/register`,
      data: signup,
    };
    axios(config)
      .then(res => {
        // console.log(res);
        if (res.data?.message === 'User succes registered!') {
          Toast.show({
            text: 'Success',
            type: 'success',
            textStyle: {textAlign: 'center'},
            duration: 3000,
          });
          sendOtp()

        }
      })
      .catch(err => {
        if (err.response.data?.message === 'Email already exists') {
          Toast.show({
            text: 'Email already registered',
            type: 'danger',
            textStyle: {textAlign: 'center'},
            duration: 3000,
          });
        }
      });
  };
  // console.log(warning);
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
                <Ionicons
                  name="person-outline"
                  size={24}
                  color={FormStyle(
                    'icon',
                    warning.usernamewarning,
                    signup.username,
                  )}
                />
              </View>
              <TextInput
                style={FormStyle(
                  'form',
                  warning.usernamewarning,
                  signup.username,
                )}
                autoCapitalize="words"
                keyboardType="name-phone-pad"
                autoCompleteType="name"
                placeholder="Enter your full name"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                onChangeText={value => {
                  setWarning({...warning, usernamewarning: ''});
                  setSignup({...signup, username: value});
                  setWarning({
                    ...warning,
                    usernamewarning: usernameValidation(value),
                  });
                }}
              />
            </View>
            {warning.usernamewarning ? (
              <Text
                style={{
                  ...classes.inputwarning,
                  color: 'rgba(255, 91, 55, 1)',
                }}>
                {warning.usernamewarning}
              </Text>
            ) : (
              <View style={{marginBottom: '7%'}} />
            )}
            <View style={classes.input}>
              <View style={classes.lefticon}>
                <Ionicons
                  name="mail-outline"
                  size={24}
                  color={FormStyle('icon', warning.emailwarning, signup.email)}
                />
              </View>
              <TextInput
                style={FormStyle('form', warning.emailwarning, signup.email)}
                autoCapitalize="none"
                keyboardType="email-address"
                autoCompleteType="email"
                placeholder="Enter your e-mail"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                onChangeText={value => {
                  setWarning({...warning, emailwarning: ''});
                  setSignup({...signup, email: value});
                  setWarning({
                    ...warning,
                    emailwarning: emailValidation(value),
                  });
                }}
              />
            </View>
            {warning.emailwarning ? (
              <Text
                style={{
                  ...classes.inputwarning,
                  color: 'rgba(255, 91, 55, 1)',
                }}>
                {warning.emailwarning}
              </Text>
            ) : (
              <View style={{marginBottom: '7%'}} />
            )}
            <View style={classes.input}>
              <View style={classes.lefticon}>
                <Ionicons
                  name="call-outline"
                  size={24}
                  color={FormStyle('icon', warning.phonewarning, signup.phone)}
                />
              </View>
              <Text style={classes.phonetext}>+62</Text>
              <TextInput
                style={FormStyle('phone', warning.phonewarning, signup.phone)}
                placeholder="Enter your phone number"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                autoCompleteType="tel"
                keyboardType="phone-pad"
                maxLength={11}
                value={signup.phone}
                onChangeText={value => {
                  setWarning({...warning, phonewarning: ''});
                  if (value.substring(0) === '0') {
                    setWarning({
                      ...warning,
                      phonewarning: phoneValidation(value),
                    });
                    return setSignup({...signup, phone: ''});
                  }
                  if (value.length > 11) {
                    setWarning({
                      ...warning,
                      phonewarning: phoneValidation(value),
                    });
                  }
                  if (value.length < 9) {
                    setWarning({
                      ...warning,
                      phonewarning: phoneValidation(value),
                    });
                  }
                  !!value.match(/^[0-9]*$/) &&
                    setSignup({...signup, phone: value}) &&
                    setWarning({
                      ...warning,
                      phonewarning: 'Phone number should only contain numbers',
                    });
                }}
              />
            </View>
            {warning.phonewarning ? (
              <Text
                style={{
                  ...classes.inputwarning,
                  color: 'rgba(255, 91, 55, 1)',
                }}>
                {warning.phonewarning}
              </Text>
            ) : (
              <View style={{marginBottom: '7%'}} />
            )}
            <View style={classes.input}>
              <View style={classes.lefticon}>
                <Ionicons
                  name="lock-closed-outline"
                  size={24}
                  color={FormStyle(
                    'icon',
                    warning.passwordwarning,
                    signup.password,
                  )}
                />
              </View>
              <TextInput
                style={FormStyle(
                  'form',
                  warning.passwordwarning,
                  signup.password,
                )}
                placeholder="Enter your password"
                autoCapitalize="none"
                autoCompleteType="password"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                secureTextEntry={eye}
                onChangeText={value => {
                  setWarning({...warning, passwordwarning: ''});
                  setSignup({...signup, password: value});
                  setWarning({
                    ...warning,
                    passwordwarning: passwordValidation(value),
                  });
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
            {warning.passwordwarning ? (
              <Text
                style={{
                  ...classes.inputwarning,
                  color: 'rgba(255, 91, 55, 1)',
                  marginBottom: '7%',
                }}>
                {warning.passwordwarning}
              </Text>
            ) : (
              <View style={{marginBottom: '7%'}} />
            )}
          </View>
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
