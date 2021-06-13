import React, {useState, useEffect} from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import {useSelector} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';

const Header = props => {
  const [historyData, setHistoryData] = useState([]);
  const user = useSelector(state => state.loginReducers);

  const filterIncome = historyData.filter(item => {
    return item.type === 'topup' || item.type === 'debit';
  });

  let income = 0;
  for (let i = 0; i < filterIncome.length; i++) {
    income += filterIncome[i].nominal;
  }

  const filterOutcome = historyData.filter(item => {
    return item.type === 'subscription' || item.type === 'credit';
  });

  let outcome = 0;
  for (let i = 0; i < filterOutcome.length; i++) {
    outcome += filterOutcome[i].nominal;
  }

  const getHistoryData = () => {
    const token = user.user.token;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return axios
      .get(`${API_URL}/transaction/?sort=amount-ZA`, config)
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

  return (
    <View>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#6379F4"
      />
      <View style={styles.headerWrapper}>
        <View style={styles.titleWrapper}>
          <TouchableOpacity
            style={styles.backBtn}
            onPress={() => props.navigation.goBack()}>
            <Icon name="arrow-back" size={28} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.titleText}>Transaction</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.reportWrapper}>
            <View style={{marginRight: 10}}>
              <Icon name="arrow-down" size={28} color="#4CEDB3" />
            </View>
            <View>
              <Text style={styles.reportTitle}>Income</Text>
              <Text style={styles.reportAmount}>{`Rp${separator(
                income,
              )}`}</Text>
            </View>
          </View>

          <View style={styles.reportWrapper}>
            <View style={{marginRight: 10}}>
              <Icon name="arrow-up" size={28} color="#FF5B37" />
            </View>
            <View>
              <Text style={styles.reportTitle}>Expense</Text>
              <Text style={styles.reportAmount}>{`Rp${separator(
                outcome,
              )}`}</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
