import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import classes from './Styles';
import Header from '../../../components/header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

const ManagePhone = props => {
  const data = props.userReducers.user;
  const {navigation} = props;

  return (
    <ScrollView>
      <Header
        isBack={true}
        title="Manage Phone Number"
        navigation={navigation}
      />
      <View style={classes.maincontainer}>
        <View style={classes.uppercontent}>
          <Text style={classes.headertext}>
            You can only delete the phone number and then you must add another
            phone number.
          </Text>
        </View>
        <View style={classes.bottomcontent}>
          <View style={classes.leftside}>
            <Text style={classes.phonetype}>Primary</Text>
            <Text style={classes.phonenumber}>
              +62 {data?.phone.replace(/\B(?=(\d{4})+(?!\d))/g, '-')}
            </Text>
          </View>
          <View style={classes.rightside}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('AddPhone')}>
              <Ionicons
                name="create-outline"
                size={32}
                color="rgba(187, 187, 190, 1)"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,
    userReducers: state.userReducers,
  };
};

const connectedManagePhone = connect(mapStatetoProps)(ManagePhone);

export default connectedManagePhone;
