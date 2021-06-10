import React from 'react';
import {View, Text} from 'react-native';
import {Button, Icon} from 'native-base';
import Backdrop from '../../../components/backdrop/Backdrop';
import styles from './Styles';

const PinSuccess = ({navigation}) => {
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
            onPress={() => navigation.navigate('Login')}>
            Login Now
          </Text>
        </Button>
      </View>
    </>
  );
};

export default PinSuccess;
