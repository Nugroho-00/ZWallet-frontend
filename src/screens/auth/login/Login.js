import React, {useState, useRef, useEffect} from 'react';
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
import {userLogin} from '../../../services/redux/actions/Auth';
import {API_URL} from '@env';
import {connect} from 'react-redux';
import axios from 'axios';
import {
  emailValidation,
  passwordValidation,
} from '../../../services/valid/InputValidate';
import {FormStyle} from '../../../services/formhandler/FormStyle';

const Login = props => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
  });
  const [warning, setWarning] = useState({
    emailwarning: '',
    passwordwarning: '',
  });
  const [eye, setEye] = useState(true);

  const loginHandler = () => {
    if (!login.email || !login.password) {
      return Toast.show({
        text: 'Fill in your details!',
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    if (warning.emailwarning || warning.passwordwarning) {
      return Toast.show({
        text: warning.emailwarning || warning.passwordwarning,
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    props.onLoginHandler(login);
  };

  const ref = useRef();
  useEffect(() => {
    if (!ref.current) {
      ref.current = true;
    } else {
      if (
        props.loginReducers.err?.data?.message === 'Wrong email!!!' ||
        props.loginReducers.err?.data?.message === 'Wrong Password!!!'
      ) {
        setLogin({});
        return Toast.show({
          text: 'Incorrect email or password',
          type: 'danger',
          textStyle: {textAlign: 'center'},
          duration: 3000,
        });
      }
      console.log(props.loginReducers.err?.data?.message);
      if (props.loginReducers.err?.data?.message === 'Network Error') {
        return Toast.show({
          text: 'Network Error',
          type: 'danger',
          textStyle: {textAlign: 'center'},
          duration: 3000,
        });
      }
    }
  }, [props.loginReducers.err]);
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
          <Text style={classes.loginheader}>Login</Text>
          <Text style={classes.logindesc}>
            Login to your existing account to access all the features in
            Zwallet.
          </Text>
          <View style={classes.inputgroup}>
            <View style={classes.input}>
              <View style={classes.lefticon}>
                <Ionicons
                  name="mail-outline"
                  size={24}
                  color={FormStyle('icon', warning.emailwarning, login.email)}
                />
              </View>
              <TextInput
                style={FormStyle('form', warning.emailwarning, login.email)}
                placeholder="Enter your e-mail"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                onChangeText={value => {
                  setWarning({...warning, emailwarning: ''});
                  setLogin({...login, email: value});
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
                  name="lock-closed-outline"
                  size={24}
                  color={FormStyle(
                    'icon',
                    warning.passwordwarning,
                    login.password,
                  )}
                />
              </View>
              <TextInput
                style={FormStyle(
                  'form',
                  warning.passwordwarning,
                  login.password,
                )}
                placeholder="Enter your password"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                secureTextEntry={eye}
                onChangeText={value => {
                  setWarning({...warning, passwordwarning: ''});
                  setLogin({...login, password: value});
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
            style={classes.forgotpassword}
            onPress={() => {
              props.navigation.navigate('SendEmail');
            }}>
            <Text style={classes.forgottext}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={classes.loginbtn}
            onPress={() => {
              loginHandler();
            }}>
            <Text style={classes.loginbtntext}>Login</Text>
          </TouchableOpacity>
          <View style={classes.signup}>
            <Text style={classes.signupdesc}>Don’t have an account? Let’s</Text>
            <TouchableOpacity
              style={classes.signupbtn}
              onPress={() => {
                props.navigation.navigate('SignUp');
              }}>
              <Text style={classes.signupbtntext}> Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,
  };
};

const mapDispatchtoProps = dispatch => {
  return {
    onLoginHandler: data => {
      dispatch(userLogin(data));
    },
  };
};

const connectedLogin = connect(mapStatetoProps, mapDispatchtoProps)(Login);

export default connectedLogin;
