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

const PersonalInformation = props => {
  const {navigation} = props;
  const [profile, setProfile] = useState({
    firstname: 'Robert',
    lastname: 'Kjelberg',
    email: 'pewpewpew@gmail.com',
    phone: '88877776666',
  });

  return (
    <ScrollView>
      <Header
        isBack={true}
        title="Personal Information"
        navigation={navigation}
      />
      <View style={classes.maincontainer}>
        <View style={classes.uppercontent}>
          <Text style={classes.headertext}>
            We got your personal information from the sign up proccess. If you
            want to make changes on your information, contact our support.
          </Text>
        </View>
        <View style={classes.bottomcontent}>
          <View style={classes.inputgroup}>
            <View style={classes.input}>
              <Text style={classes.inputlabel}>First Name</Text>
              <TextInput
                style={classes.inputbox}
                placeholder="First Name"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                value={profile.firstname}
                onChangeText={value => {
                  setProfile({...profile, firstname: value});
                }}
              />
            </View>
          </View>
          <View style={classes.inputgroup}>
            <View style={classes.input}>
              <Text style={classes.inputlabel}>Last Name</Text>
              <TextInput
                style={classes.inputbox}
                placeholder="Last Name"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                value={profile.lastname}
                onChangeText={value => {
                  setProfile({...profile, lastname: value});
                }}
              />
            </View>
          </View>
          <View style={classes.inputgroup}>
            <View style={classes.input}>
              <Text style={classes.inputlabel}>Verified E-mail</Text>
              <TextInput
                style={classes.inputbox}
                placeholder="Email"
                placeholderTextColor="rgba(169, 169, 169, 0.8)"
                value={profile.email}
                onChangeText={value => {
                  setProfile({...profile, email: value});
                }}
              />
            </View>
          </View>
          <View style={classes.inputgroup}>
            <View style={classes.input2}>
              <View style={classes.inputphone}>
                <Text style={classes.inputlabel}>Phone Number</Text>
                <TextInput
                  style={classes.inputbox}
                  placeholder="Phone Number"
                  placeholderTextColor="rgba(169, 169, 169, 0.8)"
                  value={profile.phone}
                  onChangeText={value => {
                    setProfile({...profile, phone: value});
                  }}
                />
              </View>
              <TouchableOpacity style={classes.managebtn}>
                <Text style={classes.managebtntext}>Manage</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PersonalInformation;
