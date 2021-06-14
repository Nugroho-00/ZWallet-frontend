import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import {useSelector} from 'react-redux';

const Content = props => {
  const [amount, setAmount] = useState(null);
  const [note, setNote] = useState('');

  const userData = useSelector(state => state.userReducers);
  const balance = userData.user.data[0].balances;

  const sendData = {
    ...props.dataReceiver,
    amount,
    note,
  };

  const separator = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <View style={styles.contentContainer}>
      <View style={styles.inputAmountWrapper}>
        <TextInput
          style={styles.inputAmount}
          placeholder="0.00"
          placeholderTextColor="#B5BDCC"
          keyboardType="numeric"
          onChangeText={e => setAmount(e)}
        />
        <Text style={styles.balanceText}>{`Rp${separator(
          balance,
        )} Available`}</Text>
      </View>
      <View style={styles.noteWrapper}>
        <Icon name="pencil" size={24} color="rgba(169, 169, 169, 0.6)" />
        <TextInput
          style={styles.noteInput}
          placeholder="Add some notes"
          onChangeText={e => setNote(e)}
        />
      </View>

      <TouchableOpacity
        style={{...styles.btnContinue, marginTop: 20, width: '100%'}}
        disabled={amount > balance ? true : amount < 10000 ? true : false}
        onPress={() =>
          props.navigation.navigate('Confirmation', {...sendData})
        }>
        <Text style={styles.textContinue}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Content;
