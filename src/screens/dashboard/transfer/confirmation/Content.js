import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

import {useSelector} from 'react-redux';
import moment from 'moment';

const Content = props => {
  const userData = useSelector(state => state.userReducers);
  const balance = userData.user.data[0].balances;

  const data = props.dataReceiver;

  const separator = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.balanceWrapper}>
        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Amount</Text>
          <Text style={styles.infoText}>{`Rp${separator(data.amount)}`}</Text>
        </View>

        <View style={{width: 20}} />

        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Balance Left</Text>
          <Text style={styles.infoText}>{`Rp${separator(
            balance - data.amount,
          )}`}</Text>
        </View>
      </View>

      <View style={styles.balanceWrapper}>
        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Date</Text>
          <Text style={styles.infoText}>{moment().format('ll')}</Text>
        </View>

        <View style={{width: 20}} />

        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Time</Text>
          <Text style={styles.infoText}>{moment().format('LT')}</Text>
        </View>
      </View>

      <View style={styles.noteWrapper}>
        <Text style={styles.infoTitle}>Notes</Text>
        <Text style={styles.infoText}>{data.note}</Text>
      </View>

      <TouchableOpacity
        style={styles.btnContinue}
        onPress={() => props.navigation.navigate('PinConfirmation', {...data})}>
        <Text style={styles.textContinue}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Content;
