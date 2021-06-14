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
import {API_URL} from '@env';
import axios from 'axios';
import {emailValidation} from '../../../../services/validation/Validation';
import {FormStyle} from '../../../../services/formhandler/FormStyle';

const SendEmail = props => {
  const [email, setEmail] = useState();
  const [warning, setWarning] = useState();

  const confirmHandler = () => {
    if (!email) {
      return Toast.show({
        text: 'Fill in your details!',
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    let config = {
      method: 'POST',
      url: `${API_URL}/auth/send-otp`,
      data: {email: email},
    };
    axios(config)
      .then(res => {
        console.log(res);
        props.navigation.navigate('ConfirmOtp', {id: res.data.userId});
      })
      .catch(err => {
        console.log({err});
        if (err.response.data?.message === 'Email not found !!!') {
          return Toast.show({
            text: 'User is not registered, go to signup page to get started',
            type: 'danger',
            textStyle: {textAlign: 'center'},
            duration: 3000,
          });
        }
      });
  };
  // console.log(email);
  return (
    <ScrollView contentContainerStyle={classes.maincontainer}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={classes.uppercontent}>
        <Text style={classes.headertext}>Zwallet</Text>
      </View>
      <View style={classes.bottomcontent}>
        <Text style={classes.header}>Reset Password</Text>
        <Text style={classes.desc}>
          Enter your Zwallet e-mail so we can send you a password reset link.
        </Text>
        <View style={classes.inputgroup}>
          <View style={classes.input}>
            <View style={classes.lefticon}>
              <Ionicons
                name="mail-outline"
                size={24}
                color={FormStyle('icon', warning, email)}
              />
            </View>
            <TextInput
              style={FormStyle('form', warning, email)}
              placeholder="Enter your email"
              placeholderTextColor="rgba(169, 169, 169, 0.8)"
              onChangeText={value => {
                setWarning('');
                setEmail(value);
                setWarning(emailValidation(value));
              }}
            />
          </View>
          {warning ? (
            <Text
              style={{
                ...classes.inputwarning,
                color: 'rgba(255, 91, 55, 1)',
              }}>
              {warning}
            </Text>
          ) : (
            <View style={{marginBottom: '7%'}} />
          )}
        </View>

        <TouchableOpacity
          style={classes.btn}
          onPress={() => {
            confirmHandler();
          }}>
          <Text style={classes.btntext}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SendEmail;
