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

const AddPhone = props => {
  const {navigation} = props;
  const [profile, setProfile] = useState({
    firstname: 'Robert',
    lastname: 'Kjelberg',
    email: 'pewpewpew@gmail.com',
    phone: '88877776666',
  });

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
                setSignup({...signup, phone: value});
              }}
            />
          </View>
        </View>
        <View
          style={{
            ...classes.submitbtn,
            backgroundColor: 'rgba(99, 121, 244, 1)',
          }}>
          <TouchableOpacity disabled={false} onPress={() => {}}>
            <Text style={{...classes.submitbtntext, color: 'white'}}>
              Submit
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default AddPhone;
