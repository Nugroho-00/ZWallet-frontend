import React from 'react';
<<<<<<< HEAD
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import classes from './Styles';
import Header from '../../../components/header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const ManagePhone = props => {
  const userData = useSelector(state => state.userReducers.user.data[0]);
  const {navigation} = props;
  console.log(props)
=======
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import classes from './Styles';
import Header from '../../../components/header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {connect} from 'react-redux';

const ManagePhone = props => {

  const data = props.userReducers.user?.data;
  const {navigation} = props;

>>>>>>> e6de667393c0a06abac567ca225b43574e503716
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
<<<<<<< HEAD
            <Text style={classes.phonenumber}>+62 {userData.phone}</Text>
=======
            <Text style={classes.phonenumber}>+62 {data?.phone.replace(/\B(?=(\d{4})+(?!\d))/g, '-')}</Text>
>>>>>>> e6de667393c0a06abac567ca225b43574e503716
          </View>
          <View style={classes.rightside}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('AddPhone')}>
              <Ionicons
<<<<<<< HEAD
                name="pencil"
                size={25}
=======
                name="create-outline"
                size={32}
>>>>>>> e6de667393c0a06abac567ca225b43574e503716
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