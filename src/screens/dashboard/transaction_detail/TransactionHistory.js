import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import {useSelector} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';
import DefaultAvatar from '../../../assets/images/default_avatar.png';

const TransactionHistory = props => {
  const [historyData, setHistoryData] = useState([]);
  const user = useSelector(state => state.loginReducers);

  // console.log(historyData);

  const getHistoryData = () => {
    const token = user.user.token;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return axios
      .get(`${API_URL}/transaction/?sort=date-ZA`, config)
      .then(res => {
        // console.log(res);
        return setHistoryData(res.data.result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHistoryData();
  }, []);

  const separator = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <View>
      <View style={styles.historyTitleWrapper}>
        <Text style={{...styles.font, fontSize: 18}}>Transaction History</Text>
        <TouchableOpacity>
          <Text
            style={{...styles.font, color: '#6379F4'}}
            onPress={() => props.navigation.navigate('TransactionHistory')}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        {historyData.map((history, index) => (
          <View key={index} style={styles.historyListWrapper}>
            <View style={{flex: 2}}>
            {history.image === null ? (
                    <Image source={DefaultAvatar} style={styles.avatar} />
                  ) : (
                    <Image
                      source={{uri: `${API_URL}${history.image}`}}
                      style={styles.avatar}
                    />
                  )}
            </View>
            <View style={{flex: 4}}>
              <Text style={{fontSize: 16, marginBottom: 9}}>
                {history.type === 'debit' ? history.sender : history.receiver}
              </Text>
              <Text style={{color: '#7A7886'}}>
                {capitalizeFirstLetter(
                  history.type === 'credit'
                    ? 'Transfer'
                    : history.type === 'debit'
                    ? 'Transfer'
                    : history.type,
                )}
              </Text>
            </View>
            <View style={{flex: 3}}>
              <Text
                style={{
                  fontSize: 18,
                  color:
                    history.type === 'topup'
                      ? '#1EC15F'
                      : history.type === 'debit'
                      ? '#1EC15F'
                      : '#FF5B37',
                }}>
                {history.type === 'topup'
                  ? `+Rp${separator(history.nominal)}`
                  : history.type === 'debit'
                  ? `+Rp${separator(history.nominal)}`
                  : `-Rp${separator(history.nominal)}`}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TransactionHistory;
