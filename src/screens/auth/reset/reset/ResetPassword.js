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

const ResetPassword = props => {
  const [reset, setReset] = useState({
    password: '',
    repeat: '',
  });
  const [eye, setEye] = useState(true);

  const validation = () => {
    if (
      (reset.password && reset.password.length < 8) ||
      (reset.repeat && reset.repeat.length < 8)
    ) {
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

  const resetHandler = () => {
    if (!reset.password || !reset.repeat) {
      return Toast.show({
        text: 'Fill in your details!',
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    props.navigation.navigate('Login');
  };
  console.log(reset);
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
          Create and confirm your new password so you can login to Zwallet.
        </Text>
        <View>
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
                setReset({...reset, password: value});
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
                setReset({...reset, repeat: value});
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
          style={classes.btn}
          onPress={() => {
            resetHandler();
          }}>
          <Text style={classes.btntext}>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
