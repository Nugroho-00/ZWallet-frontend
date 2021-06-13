import React, {useState, useEffect} from 'react';
import {
  View,
  ScrollView,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
  Keyboard,
  BackHandler,
  Modal,
  Alert,
} from 'react-native';
import {Toast} from 'native-base';
import classes from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {API_URL} from '@env';
import {passwordValidation} from '../../../../services/valid/InputValidate';
import {FormStyle} from '../../../../services/formhandler/FormStyle';
import axios from 'axios';

const ResetPassword = props => {
  const [reset, setReset] = useState({
    password: '',
    repeat: '',
  });
  const [eye, setEye] = useState({
    eyepass: true,
    eyerepeat: true,
  });
  const [warning, setWarning] = useState({
    warningpassword: '',
    warningrepeat: '',
  });
  const [modalVisible, setModal] = useState(false);

  const resetHandler = () => {
    console.log(warning);
    if (!reset.password || !reset.repeat) {
      return Toast.show({
        text: 'Fill in your details!',
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    if (warning.warningpassword || warning.warningrepeat) {
      return Toast.show({
        text: warning.passwordwarning || warning.warningrepeat,
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    if (reset.password !== reset.repeat) {
      return Toast.show({
        text: "Password didn't match",
        type: 'danger',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    let config = {
      method: 'PATCH',
      url: `${API_URL}/auth/reset-password`,
      headers: {authorization: `Bearer ${props.route.params?.token}`},
      data: {newPassword: reset.password},
    };
    axios(config)
      .then(res => {
        console.log(res);
        if (res.data?.message === 'Success to reset password!') {
          setReset({...reset, password: '', repeat: ''});
          return setModal(!modalVisible);
        }
      })
      .catch(err => {
        if (err.message === 'invalid signature') {
          return Toast.show({
            text: 'Invalid signature, Repeat the reset password process',
            type: 'danger',
            textStyle: {textAlign: 'center'},
            duration: 3000,
          });
        }
        if (err.message === 'Network Error') {
          return Toast.show({
            text: 'Network Error',
            type: 'danger',
            textStyle: {textAlign: 'center'},
            duration: 3000,
          });
        } else if (err) {
          console.log({err});
          return Toast.show({
            text: 'An Error Occured',
            type: 'danger',
            textStyle: {textAlign: 'center'},
            duration: 3000,
          });
        }
      });
  };

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        // setIsEdit(true); // or some other action
      },
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        // setIsEdit(false); // or some other action
      },
    );

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'All progress will be lost', [
        {
          text: 'OK',
          onPress: () => props.navigation.navigate('Login'),
        },
        {
          text: 'CANCEL',
          onPress: () => {
            setReset({...reset, repeat: ''});
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [props.navigation]);

  console.log(reset);
  return (
    <ScrollView>
      <View style={classes.maincontainer}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />
        <Modal
          visible={modalVisible}
          animationType="fade"
          transparent={true}
          onRequestClose={() => {
            return;
          }}>
          <View style={classes.modalcontainer}>
            <Text style={classes.headertext}>Password Changed!</Text>
            <Ionicons
              name="checkmark-circle-outline"
              size={150}
              color="#6379F4"
            />
            <TouchableOpacity
              onPress={() => {
                props.navigation.replace('Login');
              }}>
              <Text style={classes.modalbtntext}>Login to your account</Text>
            </TouchableOpacity>
          </View>
        </Modal>
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
              <View style={classes.upperinput}>
                <View style={classes.lefticon}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={24}
                    color={FormStyle(
                      'icon',
                      warning.warningpassword,
                      reset.password,
                    )}
                  />
                </View>
                <TextInput
                  style={FormStyle(
                    'form',
                    warning.warningpassword,
                    reset.password,
                  )}
                  placeholder="Enter your password"
                  placeholderTextColor="rgba(169, 169, 169, 0.8)"
                  secureTextEntry={eye.eyepass}
                  value={reset.password}
                  onChangeText={value => {
                    setWarning({...warning, password: ''});
                    setReset({...reset, password: value});
                    setWarning({
                      ...warning,
                      warningpassword: passwordValidation(value),
                    });
                  }}
                />
                <TouchableOpacity
                  style={classes.righticon}
                  onPress={() => {
                    setEye({...eye, eyepass: !eye.eyepass});
                  }}>
                  <Ionicons
                    name={eye.eyepass ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="#A9A9A9"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {warning.warningpassword ? (
              <Text
                style={{
                  ...classes.inputwarning,
                  color: 'rgba(255, 91, 55, 1)',
                }}>
                {warning.warningpassword}
              </Text>
            ) : (
              <View style={{marginBottom: '7%'}} />
            )}
            <View style={classes.input}>
              <View style={classes.upperinput}>
                <View style={classes.lefticon}>
                  <Ionicons
                    name="lock-closed-outline"
                    size={24}
                    color={FormStyle(
                      'icon',
                      warning.warningrepeat,
                      reset.repeat,
                    )}
                  />
                </View>
                <TextInput
                  style={FormStyle('form', warning.warningrepeat, reset.repeat)}
                  placeholder="Enter your password"
                  placeholderTextColor="rgba(169, 169, 169, 0.8)"
                  secureTextEntry={eye.eyerepeat}
                  value={reset.repeat}
                  onChangeText={value => {
                    setWarning({...warning, repeat: ''});
                    setReset({...reset, repeat: value});
                    setWarning({
                      ...warning,
                      warningrepeat: passwordValidation(value, reset.password),
                    });
                  }}
                />
                <TouchableOpacity
                  style={classes.righticon}
                  onPress={() => {
                    setEye({...eye, eyerepeat: !eye.eyerepeat});
                  }}>
                  <Ionicons
                    name={eye ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="#A9A9A9"
                  />
                </TouchableOpacity>
              </View>
            </View>
            {warning.warningrepeat ? (
              <Text
                style={{
                  ...classes.inputwarning,
                  color: 'rgba(255, 91, 55, 1)',
                }}>
                {warning.warningrepeat}
              </Text>
            ) : (
              <View style={{marginBottom: '7%'}} />
            )}
          </View>
          <TouchableOpacity
            style={classes.btn}
            onPress={() => {
              resetHandler();
            }}>
            <Text style={classes.btntext}>Reset Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default ResetPassword;
