import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import classes from './Styles';
import Header from '../../../components/header/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

const ManagePhone = props => {
  const userData = useSelector(state => state.userReducers.user.data[0]);
  const {navigation} = props;
  console.log(props)
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
            <Text style={classes.phonenumber}>+62 {userData.phone}</Text>
          </View>
          <View style={classes.rightside}>
            {/* sementara aja. ntar buatin navigasi untuk add phone ya */}
            <TouchableOpacity
              onPress={() => props.navigation.navigate('AddPhone')}>
              <Ionicons
                name="pencil"
                size={25}
                color="rgba(187, 187, 190, 1)"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ManagePhone;
