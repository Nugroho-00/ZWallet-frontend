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

const SendEmail = props => {
  const [email, setEmail] = useState();

  const validation = () => {
    let reg = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w\w+)+$/;
    if (email && !reg.test(email)) {
      return (
        <View>
          <Text
            style={{...classes.inputwarning, color: 'rgba(255, 91, 55, 1)'}}>
            Incorrect Email
          </Text>
        </View>
      );
    } else {
      null;
    }
  };

  const confirmHandler = () => {
    if (!email) {
      return Toast.show({
        text: 'Fill in your details!',
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    props.navigation.navigate('ConfirmOtp');
  };
  console.log(email);
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
        <Text style={classes.header}>Reset Password</Text>
        <Text style={classes.desc}>
          Enter your Zwallet e-mail so we can send you a password reset link.
        </Text>
        <View style={classes.inputgroup}>
          <View style={classes.input}>
            <View style={classes.lefticon}>
              <Ionicons name="mail-outline" size={24} color="#A9A9A9" />
            </View>
            <TextInput
              style={classes.inputbox}
              placeholder="Enter your email"
              placeholderTextColor="rgba(169, 169, 169, 0.8)"
              onChangeText={value => {
                setEmail(value);
              }}
            />
          </View>
        </View>
        {validation()}
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
