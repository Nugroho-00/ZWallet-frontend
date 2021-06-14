import React from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from 'native-base';
import Backdrop from '../../../components/backdrop/Backdrop';
import styles from './Styles';

import {connect} from 'react-redux';

const PinSuccess = (props) => {
  const {navigation}=props
  const {isLogin}=props.route.params
  console.log(isLogin);
  return (
    <>
      <Backdrop />
      <View style={styles.container}>
        <View style={styles.successIcon}>
          <Icon name="checkmark" style={styles.checkmark} />
        </View>
        <Text style={styles.title}>PIN Successfully Created</Text>
        <Text style={styles.content}>
          Your PIN was successfully created and you can now access all the
          features in Zwallet. Login to your new account and start exploring!
        </Text>

        {/* CONFIRM BUTTON */}
        <Button style={styles.buttonOn}>
          <Text
            style={styles.textOn}
            onPress={() => isLogin?navigation.navigate('Home'):navigation.navigate('Login')}>
            {isLogin?'Go to Dashboard':"Login Now"}
          </Text>
        </Button>
      </View>
    </>
  );
};


const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,

  };
};

const connectedPinSuccess = connect(mapStatetoProps)(PinSuccess);
export default connectedPinSuccess;

