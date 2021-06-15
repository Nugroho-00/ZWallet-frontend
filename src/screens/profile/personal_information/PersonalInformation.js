import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import classes from './Styles';
import Header from '../../../components/header/Header';
import {getUser} from '../../../services/redux/actions/Users';
import {connect} from 'react-redux';
import {Toast} from 'native-base';
import {API_URL} from '@env';
import CustomModal from '../../../components/modal/CustomModal';
import {
  usernameValidation,
  emailValidation,
} from '../../../services/validation/Validation';
import axios from 'axios';

const PersonalInformation = props => {
  const {navigation} = props;
  const [confirmModal, setConfirmModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const data = props.userReducers.user?.data;
  // const coba = data.username.split(' ');
  const [profile, setProfile] = useState({
    firstname: data?.username?.split(' ')[0],
    lastname: data?.username?.split(' ')[1],
    email: data?.email,
    phone: data?.phone,
  });
  const [warning, setWarning] = useState({
    firstnamewarning: '',
    lastnamewarning: '',
    emailwarning: '',
  });
  const [editable, setEdit] = useState({
    firstname: false,
    lastname: false,
    email: false,
    phone: false,
  });

  const [btnstate, setBtnState] = useState(false);
  // console.log('data', data);

  const saveHandler = () => {
    setIsLoading(true);

    if (
      warning.firstnamewarning ||
      warning.lastnamewarning ||
      warning.emailwarning
    ) {
      Toast.show({
        text:
          warning.firstnamewarning ||
          warning.lastnamewarning ||
          warning.emailwarning,
        type: 'warning',
        textStyle: {textAlign: 'center'},
        duration: 3000,
      });
    }
    const updatedata = new FormData();
    if (editable.firstname && editable.lastname) {
      const fullname = profile.firstname + ' ' + profile.lastname;
      // console.log(fullname);
      updatedata.append('username', fullname);
    }
    if (editable.email) {
      updatedata.append('email', profile.email);
    }
    console.log(updatedata);
    let config = {
      method: 'PATCH',
      url: `${API_URL}/profile/edit`,
      headers: {
        authorization: `Bearer ${props.loginReducers.user?.token}`,
      },
      data: updatedata,
    };
    axios(config)
      .then(res => {
        console.log(res.data.results.username.split(' ')[0]);
        if (editable.firstname) {
          setProfile({
            ...profile,
            firstname: res.data.results.username.split(' ')[0],
          });
        }
        if (editable.lastname) {
          setProfile({
            ...profile,
            lastname: res.data.results.username.split(' ')[1],
          });
        }
        if (editable.email) {
          setProfile({...profile, email: res.data.results.email});
        }

        return props.getUserHandler(props.loginReducers.user.token);
      })
      .catch(err => console.log({err}))
      .finally(() => {
        setIsLoading(false);
        setConfirmModal(false);
        if(data?.email!==profile.email){
          navigation.navigate('ConfirmOtp', {
            id: props.userReducers.user?.data.id,
            type: 'update',
            email:profile.email
          });
        }
      });
  };

  useEffect(()=>{
    if (
      warning.firstnamewarning ||
      warning.lastnamewarning ||
      warning.emailwarning){
        setBtnState(false)
      } else{
        setBtnState(true)
      }
  },[warning])

  return (
    <>
      <Header
        isBack={true}
        title="Personal Information"
        navigation={navigation}
      />
      <ScrollView>
        <View style={classes.maincontainer}>
          {isLoading ? (
            <View
              style={{
                justifyContent: 'center',
                flex: 1,
                position: 'absolute',
                backgroundColor: 'white',
                opacity: 0.6,
                zIndex: 10,
                width: '100%',
                height: '100%',
              }}>
              <ActivityIndicator size={64} color="#5784BA" />
            </View>
          ) : null}
          <View style={classes.uppercontent}>
            <Text style={classes.headertext}>
              We got your personal information from the sign up proccess. If you
              want to make changes on your information, long press to edit them.
            </Text>
          </View>
          <View style={classes.bottomcontent}>
            <View style={classes.inputgroup}>
              <TouchableOpacity
                style={classes.input}
                delayLongPress={2000}
                onLongPress={() => {
                  Toast.show({
                    text: 'Name edit enabled',
                    type: 'success',
                    textStyle: {textAlign: 'center'},
                    duration: 2000,
                  });
                  setEdit({...editable, firstname: true, lastname: true});
                  setBtnState(true);
                }}>
                <Text style={classes.inputlabel}>First Name</Text>
                <TextInput
                  style={classes.inputbox}
                  editable={editable.firstname}
                  placeholder="First Name"
                  placeholderTextColor="rgba(169, 169, 169, 0.8)"
                  value={profile.firstname}
                  onChangeText={value => {
                    setWarning({...warning, firstnamewarning: ''});
                    setProfile({...profile, firstname: value});
                    setWarning({
                      ...warning,
                      firstnamewarning: usernameValidation(value),
                    });
                  }}
                />
              </TouchableOpacity>
            </View>
            {warning.firstnamewarning ? (
              <Text
                style={{
                  ...classes.inputwarning,
                  color: 'rgba(255, 91, 55, 1)',
                }}>
                {warning.firstnamewarning}
              </Text>
            ) : (
              <View style={{marginBottom: '5%'}} />
            )}
            <View style={classes.inputgroup}>
              <TouchableOpacity
                style={classes.input}
                delayLongPress={2000}
                onLongPress={() => {
                  Toast.show({
                    text: 'Name edit enabled',
                    type: 'success',
                    textStyle: {textAlign: 'center'},
                    duration: 2000,
                  });
                  setEdit({...editable, firstname: true, lastname: true});
                  btnstate ? null : setBtnState(true);
                }}>
                <Text style={classes.inputlabel}>Last Name</Text>
                <TextInput
                  style={classes.inputbox}
                  placeholder="Last Name"
                  editable={editable.lastname}
                  placeholderTextColor="rgba(169, 169, 169, 0.8)"
                  value={profile.lastname}
                  onChangeText={value => {
                    setWarning({...warning, lastnamewarning: ''});
                    setProfile({...profile, lastname: value});
                    setWarning({
                      ...warning,
                      lastnamewarning: usernameValidation(value),
                    });
                  }}
                />
              </TouchableOpacity>
            </View>
            {warning.lastnamewarning ? (
              <Text
                style={{
                  ...classes.inputwarning,
                  color: 'rgba(255, 91, 55, 1)',
                }}>
                {warning.lastnamewarning}
              </Text>
            ) : (
              <View style={{marginBottom: '5%'}} />
            )}
            <View style={classes.inputgroup}>
              <TouchableOpacity
                style={classes.input}
                delayLongPress={2000}
                onLongPress={() => {
                  Toast.show({
                    text: 'Email edit enabled',
                    type: 'success',
                    textStyle: {textAlign: 'center'},
                    duration: 2000,
                  });
                  setEdit({...editable, email: true});
                  btnstate ? null : setBtnState(true);
                }}>
                <Text style={classes.inputlabel}>Verified E-mail</Text>
                <TextInput
                  style={classes.inputbox}
                  placeholder="Email"
                  editable={editable.email}
                  placeholderTextColor="rgba(169, 169, 169, 0.8)"
                  value={profile.email}
                  onChangeText={value => {
                    setWarning({...warning, emailwarning: ''});
                    setProfile({...profile, email: value});
                    setWarning({
                      ...warning,
                      emailwarning: emailValidation(value),
                    });
                  }}
                />
              </TouchableOpacity>
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
              <View style={{marginBottom: '5%'}} />
            )}
            <View style={classes.inputgroup}>
              <View style={classes.input2}>
                <View style={classes.inputphone}>
                  <Text style={classes.inputlabel}>Phone Number</Text>
                  <Text style={classes.phone}>+62 {profile.phone.replace(/\B(?=(\d{4})+(?!\d))/g, '-')}</Text>
                </View>
                <TouchableOpacity
                  style={classes.managebtn}
                  onPress={() => props.navigation.navigate('ManagePhone')}>
                  <Text style={classes.managebtntext}>Manage</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={classes.btncontainer}>
              <TouchableOpacity
                disabled={!btnstate}
                onPress={() => setConfirmModal(true)}
                style={
                  btnstate
                    ? {
                        ...classes.editbtn,
                        backgroundColor: 'rgba(99, 121, 244, 1)',
                      }
                    : {
                        ...classes.editbtn,
                        backgroundColor: 'rgba(218, 218, 218, 1)',
                      }
                }>
                <Text
                  style={
                    btnstate
                      ? {...classes.editbtntext, color: 'white'}
                      : {
                          ...classes.editbtntext,
                          color: 'rgba(136, 136, 143, 1)',
                        }
                  }>
                  Save
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
      {confirmModal ? (
        <CustomModal
          modalVisible={confirmModal}
          title="Update Profile"
          msg="Are you sure want to save this change?"
          btnLabel3="Cancel"
          onAction3={() => {
            setConfirmModal(false);
          }}
          btnLabel4="Yes I'm sure"
          onAction4={saveHandler}
        />
      ) : null}
    </>
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
const connectedPersonalInformation = connect(
  mapStatetoProps,
  mapDispatchToProps,
)(PersonalInformation);

export default connectedPersonalInformation;
