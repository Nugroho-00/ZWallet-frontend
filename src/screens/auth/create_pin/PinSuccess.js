import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from 'native-base';
import Backdrop from '../../../components/backdrop/Backdrop';
import styles from './Styles';

import {connect} from 'react-redux';
import {getUser} from '../../../services/redux/actions/Users';

const PinSuccess = props => {
  const {navigation} = props;
  const {isLogin, mode} = props.route.params;
  // console.log(isLogin);

  useEffect(() => {
    const token = props.loginReducers.user.token;
    return props.getUserHandler(token);
  }, []);

  const nextHandler = () => {
    if (isLogin) {
      navigation.navigate('HomeScreen', {goBack: false});
    } else {
      navigation.navigate('Login');
    }
  };
  return (
    <>
      <Backdrop />
      <View style={styles.container}>
        <View style={styles.successIcon}>
          <Icon name="checkmark" style={styles.checkmark} />
        </View>
        <Text style={styles.title}>{mode==='create'?'PIN Successfully Created':'PIN Successfully Changed'}</Text>
        <Text style={styles.content}>{mode==='create'?
          'Your PIN was successfully created and you can now access all the features in Zwallet. Login to your new account and start exploring!':'Your PIN was successfully changed. There are so many features in Zwallet. Start exploring!'}
        </Text>

        {/* CONFIRM BUTTON */}
        <Button style={styles.buttonOn}  onPress={nextHandler}>
          <Text style={styles.textOn}>
            {isLogin ? 'Go to Dashboard' : 'Login Now'}
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

const mapDispatchToProps = dispatch => ({
  getUserHandler: token => {
    dispatch(getUser(token));
  },
});

const connectedPinSuccess = connect(
  mapStatetoProps,
  mapDispatchToProps,
)(PinSuccess);
export default connectedPinSuccess;
