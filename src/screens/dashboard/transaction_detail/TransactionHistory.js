import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const TransactionHistory = () => {
  const dataHistory = [
    {
      user: 'Samuel',
      type: 'Transfer',
      amount: '50.000',
    },
    {
      user: 'Spotify',
      type: 'Subcription',
      amount: '70.000',
    },
    {
      user: 'Netflix',
      type: 'Subcription',
      amount: '80.000',
    },
    {
      user: 'Bobby',
      type: 'Transfer',
      amount: '100.000',
    },
  ];
  return (
    <View>
      <View style={styles.historyTitleWrapper}>
        <Text style={{...styles.font, fontSize: 18}}>Transaction History</Text>
        <TouchableOpacity>
          <Text style={{...styles.font, color: '#6379F4'}}>See all</Text>
        </TouchableOpacity>
      </View>

      <View>
        {dataHistory.map((history, index) => (
          <View key={index} style={styles.historyListWrapper}>
            <View style={{flex: 2}}>
              <Icon name="person-outline" size={56} />
            </View>
            <View style={{flex: 4}}>
              <Text style={{fontSize: 16, marginBottom: 9}}>
                {history.user}
              </Text>
              <Text style={{color: '#7A7886'}}>{history.type}</Text>
            </View>
            <View style={{flex: 2}}>
              <Text
                style={{
                  fontSize: 18,
                  color: history.type === 'Transfer' ? '#1EC15F' : '#FF5B37',
                }}>
                {history.type === 'Transfer'
                  ? `+Rp${history.amount}`
                  : `-Rp${history.amount}`}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TransactionHistory;
