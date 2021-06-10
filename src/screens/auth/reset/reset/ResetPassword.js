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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Toast} from 'native-base';
import classes from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const ResetPassword = props => {
  const [reset, setReset] = useState({
    password: '',
    repeat: '',
  });
  const [eye, setEye] = useState(true);
  const [modalVisible, setModal] = useState(false);

  const passwordValidation = () => {
    if (reset.password && reset.password.length < 8) {
      return (
        <View style={classes.inputwarning}>
          <Text
            style={{
              ...classes.inputwarningtext,
              color: 'rgba(255, 91, 55, 1)',
            }}>
            Password minimum length is 8 characters
          </Text>
        </View>
      );
    } else {
      null;
    }
  };
  const repeatValidation = () => {
    if (reset.repeat && reset.repeat.length < 8) {
      return (
        <View style={classes.inputwarning}>
          <Text
            style={{
              ...classes.inputwarningtext,
              color: 'rgba(255, 91, 55, 1)',
            }}>
            Password minimum length is 8 characters
          </Text>
        </View>
      );
    }
    if (reset.password && reset.repeat && reset.password !== reset.repeat) {
      return (
        <View style={classes.inputwarning}>
          <Ionicons
            name="close-outline"
            size={14}
            color="rgba(255, 91, 55, 1)"
          />
          <Text
            style={{
              ...classes.inputwarningtext,
              color: 'rgba(255, 91, 55, 1)',
            }}>
            Password didn't match
          </Text>
        </View>
      );
    }
    if (reset.password && reset.repeat && reset.password === reset.repeat) {
      return (
        <View style={classes.inputwarning}>
          <Ionicons
            name="checkmark-outline"
            size={14}
            color="rgba(30, 193, 95, 1)"
          />
          <Text
            style={{
              ...classes.inputwarningtext,
              color: 'rgbargba(30, 193, 95, 1)',
            }}>
            Password match
          </Text>
        </View>
      );
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
    let config = {
      method: 'PATCH',
      url: `${API_URL}/auth/reset-password`,
      headers: {authorization: `Bearer ${props.route.params.token}`},
      data: {newPassword: reset.password},
    };
    axios(config)
      .then(res => {
        console.log(res);
        if (res.data?.message === 'success to reset password') {
          setModal(!modal);
        }
      })
      .catch(err => {
        if (err.message === 'Network Error') {
          Toast.show({
            text: 'Network Error',
            type: 'danger',
            textStyle: {textAlign: 'center'},
            duration: 3000,
          });
        } else if (err) {
          Toast.show({
            text: 'An Error Occured',
            type: 'danger',
            textStyle: {textAlign: 'center'},
            duration: 3000,
          });
        }
      });
    props.navigation.navigate('Login');
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
          text: 'CANCEL',
          onPress: () => {
            setPassword('');
            setRepeat('');
          },
        },
        {
          text: 'OK',
          onPress: () => props.navigation.navigate('Login'),
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
                    color="#A9A9A9"
                  />
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
              {passwordValidation()}
            </View>
            <View style={classes.input}>
              <View style={classes.upperinput}>
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
              {repeatValidation()}
            </View>
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
