import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const QuickAccess = () => {
  const quickAccessData = [
    {
      user: 'Rian',
      amount: '-9999',
    },
    {
      user: 'Rian',
      amount: '-19293',
    },
    {
      user: 'Rian',
      amount: '-129i3',
    },
  ];
  return (
    <View style={styles.quickContainer}>
      <View style={styles.quickTitle}>
        <Text style={styles.quickTitleText}>Quick Access</Text>
      </View>
      <View style={styles.quickContentWrapper}>
        {quickAccessData.map((user, index) => (
          <TouchableOpacity style={styles.quickListWrapper} key={index}>
            <Icon name="person-outline" size={56} />
            <Text style={styles.quickName}>{user.user}</Text>
            <Text style={styles.quickAmount}>{user.amount}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickAccess;
