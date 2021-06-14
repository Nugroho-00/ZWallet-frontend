import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import classes from './Styles';
import Header from '../../../components/header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Toast} from 'native-base';
import {connect} from 'react-redux';
import {API_URL} from '@env';
import axios from 'axios';
import {phoneValidation} from '../../../services/validation/Validation';

const AddPhone = props => {
  const {navigation} = props;
  const UpdateData = props.userReducers.user?.data[0];
  const [phone, setPhone] = useState();

  const FormData = require('form-data');
  const data = new FormData();
  const config = {
    method: 'PATCH',
    url: `${API_URL}/profile/edit`,
    headers: {
      authorization: `Bearer ${props.loginReducers.user?.token}`,
    },
    data: data,
  };

  function submitHandler() {
    data.append('phone', phone);

    axios(config)
      .then(res => {
        console.log(res);
        if (res.data.message === 'Data Updated') {
          Toast.show({
            text: 'Success',
            type: 'success',
            textStyle: {textAlign: 'center'},
            duration: 2000,
          });
        }
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <ScrollView>
      <Header isBack={true} title="Add Phone Number" navigation={navigation} />
      <View style={classes.maincontainer}>
        <View style={classes.uppercontent}>
          <Text style={classes.headertext}>
            Add at least one phone number for the transfer ID so you can start
            transfering your money to another user.
          </Text>
        </View>
        <View style={classes.bottomcontent}>
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
                setPhone(value);
              }}
            />
          </View>
        </View>
        <View>
          <TouchableOpacity
            style={{
              ...classes.submitbtn,
              backgroundColor: 'rgba(99, 121, 244, 1)',
            }}
            onPress={async () => {
              await submitHandler();
            }}>
            <Text style={{...classes.submitbtntext, color: 'white'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStatetoProps = state => ({
  loginReducers: state.loginReducers,
  userReducers: state.userReducers,
});

const connectedAddPhone = connect(mapStatetoProps)(AddPhone);

export default connectedAddPhone;
