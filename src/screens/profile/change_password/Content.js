import React, {useState} from 'react';
import {View, TextInput, TouchableOpacity, Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import axios from 'axios';
import {passwordValidation} from '../../../services/validation/Validation';
import {Toast} from 'native-base';
import {API_URL} from '@env';
import {useSelector} from 'react-redux';

const Content = props => {
  const token = useSelector(state => state.loginReducers.user?.token);

  const [data, setData] = useState({
    currentPassword: '',
    newPassword: '',
    repeatPassword: '',
  });
  const [secureText, setSecure] = useState({
    current: true,
    new: true,
    repeat: true,
  });

  const [warning, setWarning] = useState({
    currentwarning: '',
    newwarning: '',
    repeatwarning: '',
  });

  const submitHandler = () => {
    if (!data.currentPassword || !data.newPassword || !data.repeatPassword) {
      return Toast.show({
        text: 'Fill in your details!',
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    if (warning.currentwarning || warning.newwarning || warning.repeatwarning) {
      return Toast.show({
        text:
          warning.currentwarning || warning.newwarning || warning.repeatwarning,
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    let config = {
      method: 'PATCH',
      url: `${API_URL}/profile/edit-password`,
      headers: {
        authorization: `Bearer ${token}`,
      },
      data: data,
    };
    axios(config)
      .then(res => {
        console.log(res);
        if (res.data.message === 'Success update password') {
          Toast.show({
            text: 'Password changed successfully',
            type: 'success',
            textStyle: {textAlign: 'center'},
            duration: 3000,
          });
          setData({
            ...data,
            currentPassword: '',
            newPassword: '',
            repeatPassword: '',
          });
          return props.navigation.goBack();
        }
      })
      .catch(err => {
        console.log({err});
        if (err.response.message === 'Current password wrong!!') {
          return Toast.show({
            text: 'Your current password is incorrect',
            type: 'danger',
            textStyle: {textAlign: 'center'},
            duration: 3000,
          });
        }
      });
  };

  console.log(token);
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.textDescriptionWrapper}>
        <Text style={styles.textDescription}>
          You must enter your current password and then type your new password
          twice.
        </Text>
      </View>

      <View>
        <View style={styles.input}>
          <View style={styles.lefticon}>
            <Ionicons name="lock-closed-outline" size={24} color="#A9A9A9" />
          </View>
          <TextInput
            style={styles.inputbox}
            placeholder="Current Password"
            placeholderTextColor="rgba(169, 169, 169, 0.8)"
            secureTextEntry={secureText.current}
            value={data.currentPassword}
            onChangeText={value => {
              setData({...data, currentPassword: value});
              setWarning({
                ...warning,
                currentwarning: passwordValidation(value),
              });
            }}
          />
          <TouchableOpacity
            style={styles.righticon}
            onPress={() => {
              setSecure({...secureText, current: !secureText.current});
            }}>
            <Ionicons
              name={secureText.current ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="#A9A9A9"
            />
          </TouchableOpacity>
        </View>
        {warning.currentwarning ? (
          <Text
            style={{
              ...styles.inputwarning,
              color: 'rgba(255, 91, 55, 1)',
            }}>
            {warning.currentwarning}
          </Text>
        ) : (
          <View style={{marginBottom: '13%'}} />
        )}
        <View style={styles.input}>
          <View style={styles.lefticon}>
            <Ionicons name="lock-closed-outline" size={24} color="#A9A9A9" />
          </View>
          <TextInput
            style={styles.inputbox}
            placeholder="New Password"
            placeholderTextColor="rgba(169, 169, 169, 0.8)"
            secureTextEntry={secureText.new}
            value={data.newPassword}
            onChangeText={value => {
              setData({...data, newPassword: value});
              setWarning({
                ...warning,
                newwarning: passwordValidation(value),
              });
            }}
          />
          <TouchableOpacity
            style={styles.righticon}
            onPress={() => {
              setSecure({...secureText, new: !secureText.new});
            }}>
            <Ionicons
              name={secureText.new ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="#A9A9A9"
            />
          </TouchableOpacity>
        </View>
        {warning.newwarning ? (
          <Text
            style={{
              ...styles.inputwarning,
              color: 'rgba(255, 91, 55, 1)',
            }}>
            {warning.newwarning}
          </Text>
        ) : (
          <View style={{marginBottom: '13%'}} />
        )}
        <View style={styles.input}>
          <View style={styles.lefticon}>
            <Ionicons name="lock-closed-outline" size={24} color="#A9A9A9" />
          </View>
          <TextInput
            style={styles.inputbox}
            placeholder="Repeat Password"
            placeholderTextColor="rgba(169, 169, 169, 0.8)"
            secureTextEntry={secureText.repeat}
            value={data.repeatPassword}
            onChangeText={value => {
              setData({...data, repeatPassword: value});
              setWarning({
                ...warning,
                repeatwarning: passwordValidation(value),
              });
            }}
          />
          <TouchableOpacity
            style={styles.righticon}
            onPress={() => {
              setSecure({...secureText, repeat: !secureText.repeat});
            }}>
            <Ionicons
              name={secureText.repeat ? 'eye-off-outline' : 'eye-outline'}
              size={24}
              color="#A9A9A9"
            />
          </TouchableOpacity>
        </View>
        {warning.repeatwarning ? (
          <Text
            style={{
              ...styles.inputwarning,
              color: 'rgba(255, 91, 55, 1)',
            }}>
            {warning.repeatwarning}
          </Text>
        ) : (
          <View style={{marginBottom: '13%'}} />
        )}
        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.btnContinue}
            onPress={() => {
              submitHandler();
            }}>
            <Text style={styles.textContinue}>Change Password</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Content;
