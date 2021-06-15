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
import {connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';
import CustomModal from '../../../components/modal/CustomModal';

const AddPhone = props => {
  const {navigation} = props;
  const data = props.userReducers.user;
  const [phone, setPhone] = useState(
    data?.phone.replace(/\B(?=(\d{4})+(?!\d))/g, '-'),
  );
  const [phoneValue, setPhoneValue] = useState(data?.phone);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFilled, setIsFilled] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const addCommas = num => num.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '-');
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, '');

  const handleChange = num => {
    num.substring(0) !== '0' && setPhone(addCommas(removeNonNumeric(num)));
  };

  const handleValue = num => {
    setPhoneValue(num.toString().replace('-', ''));
  };
  // console.log(phone);
  const submitHandler = () => {
    let config = {
      method: 'PATCH',
      url: `${API_URL}/profile/edit`,
      headers: {
        authorization: `Bearer ${props.loginReducers.user?.token}`,
      },
      data: {phone: phoneValue.replace('-', '')},
    };
    axios(config)
      .then(res => {
        props.navigation.navigate('Profile');
        props.getUserHandler(props.loginReducers.user.token);
        setConfirmModal(false);
        return;
      })
      .catch(err => console.log({err}));
  };

  useEffect(() => {
    console.log(phoneValue);
    if (phoneValue.length > 12) {
      setErrorMessage('Max phone number length is 12');
      setIsFilled(false);
    } else if (phoneValue.length < 9) {
      setErrorMessage('Min phone number length is 10');
      setIsFilled(false);
    } else {
      setIsFilled(true);
      setErrorMessage('');
    }
  }, [phoneValue]);

  console.log(props);
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
              value={phone}
              onPressIn={() => setErrorMessage('')}
              onChangeText={value => {
                handleChange(value);
                handleValue(value);
              }}
            />
          </View>
          {errorMessage ? (
            <Text style={classes.errorMessage}>{errorMessage}</Text>
          ) : null}
        </View>
        <View>
          <TouchableOpacity
            style={{
              ...classes.submitbtn,
              backgroundColor: isFilled
                ? 'rgba(99, 121, 244, 1)'
                : 'rgba(218, 218, 218, 1)',
            }}
            disabled={false}
            onPress={() => setConfirmModal(true)}>
            <Text
              style={{
                ...classes.submitbtntext,
                color: isFilled ? 'white' : 'rgba(136, 136, 143, 1)',
              }}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      {confirmModal ? (
        <CustomModal
          modalVisible={confirmModal}
          title="Update Phone"
          msg="Are you sure want to save this change?"
          btnLabel3="Cancel"
          onAction3={() => {
            setConfirmModal(false);
          }}
          btnLabel4="Yes I'm sure"
          onAction4={submitHandler}
        />
      ) : null}
    </ScrollView>
  );
};

const mapStatetoProps = state => ({
  loginReducers: state.loginReducers,
  userReducers: state.userReducers,
});
const mapDispatchToProps = dispatch => ({
  getUserHandler: token => {
    dispatch(getUser(token));
  },
});
const connectedAddPhone = connect(
  mapStatetoProps,
  mapDispatchToProps,
)(AddPhone);

export default connectedAddPhone;
