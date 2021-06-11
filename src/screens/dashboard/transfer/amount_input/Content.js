import React from 'react';
import {View, Text, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Content = () => {
  return (
    <View style={styles.contentContainer}>
      <View style={styles.inputAmountWrapper}>
        <TextInput
          style={styles.inputAmount}
          placeholder="0.00"
          placeholderTextColor="#B5BDCC"
          keyboardType="numeric"
        />
        <Text style={styles.balanceText}>Rp120.000 Available</Text>
      </View>
      <View style={styles.noteWrapper}>
        <Icon name="pencil" size={24} color="rgba(169, 169, 169, 0.6)" />
        <TextInput style={styles.noteInput} placeholder="Add some notes" />
      </View>
    </View>
  );
};

export default Content;
