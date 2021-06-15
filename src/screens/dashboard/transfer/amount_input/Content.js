import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import {useSelector} from 'react-redux';

const Content = props => {
  const [amount, setAmount] = useState('');
  const [amountValue, setAmountValue] = useState('');
  const [note, setNote] = useState('');

  const userData = useSelector(state => state.userReducers);
  const balance = userData.user.balances;

  const sendData = {
    ...props.dataReceiver,
    amountValue,
    note,
  };
  console.log(amountValue);

  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, '');

  const separator = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  return (
    <View style={styles.contentContainer}>
      <View style={styles.inputAmountWrapper}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={styles.inputAmount}>Rp</Text>
          <TextInput
            value={amount}
            style={styles.inputAmount}
            placeholder="0.00"
            placeholderTextColor="#B5BDCC"
            keyboardType="numeric"
            onChangeText={e => {
              e.substring(0) !== '0' &&
                setAmount(addCommas(removeNonNumeric(e)));
              setAmountValue(parseInt(e.replace('.', '')));
            }}
          />
        </View>
        <Text style={styles.balanceText}>{`Rp${separator(
          balance,
        )} Available`}</Text>
      </View>

      <View>
        <Text style={styles.textWarning}>
          The amount cannot be less than Rp10,000 or more than the balance
        </Text>
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
        style={
          !amountValue
            ? {...styles.btnContinueDisable, marginTop: 20, width: '100%'}
            : amountValue > balance
            ? {...styles.btnContinueDisable, marginTop: 20, width: '100%'}
            : amountValue < 10000
            ? {...styles.btnContinueDisable, marginTop: 20, width: '100%'}
            : {...styles.btnContinueEnable, marginTop: 20, width: '100%'}
        }
        disabled={
          !amountValue
            ? true
            : amountValue > balance
            ? true
            : amountValue < 10000
            ? true
            : false
        }
        onPress={() =>
          props.navigation.navigate('Confirmation', {...sendData})
        }>
        <Text
          style={
            !amountValue
              ? {...styles.textContinue, color: '#88888F'}
              : amountValue > balance
              ? {...styles.textContinue, color: '#88888F'}
              : amountValue < 10000
              ? {...styles.textContinue, color: '#88888F'}
              : {...styles.textContinue}
          }>
          Continue
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Content;
