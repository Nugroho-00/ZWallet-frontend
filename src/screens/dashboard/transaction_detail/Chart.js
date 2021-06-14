import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

import {useSelector} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';
import moment from 'moment';

const Chart = () => {
  const [transactionData, setTransactionData] = useState([]);
  const loginReducers = useSelector(state => state.loginReducers);

  const historyData = transactionData.map(item => {
    return {
      ...item,
      date: moment(item.created_at).format('YYYY-MM-DD'),
      day: moment(item.created_at).format('ddd'),
    };
  });

  const filterToday = historyData.filter(item => {
    return item.date === moment().subtract(0, 'days').format('YYYY-MM-DD');
  });

  const debitToday = filterToday.filter(item => {
    return item.type === 'debit' || item.type === 'topup';
  });

  const debitTodayNominal = debitToday.map(item => {
    return item.nominal;
  });

  // if (transactionData) {
  //   debit;
  // }

  // console.log(debitTodayNominal);

  const filterEnd = moment().add(1, 'days').format('YYYY-MM-DD');
  const filterStart = moment().subtract(8, 'days').format('YYYY-MM-DD');

  // console.log();
  // console.log(filterEnd, filterStart);

  const getTransactionData = () => {
    const token = loginReducers.user.token;
    let config = {
      method: 'GET',
      url: `${API_URL}/transaction/?start=${filterStart}&end=${filterEnd}&sort=date-ZA&limits=100`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return axios(config)
      .then(res => {
        // console.log(res);
        return setTransactionData(res.data.result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getTransactionData();
  }, []);

  const dataTransaction = [
    {
      day: 'Sat',
      debit: 200000,
      credit: 70000,
    },
    {
      day: 'Sun',
      debit: 50000,
      credit: 50000,
    },
    {
      day: 'Mon',
      debit: 120000,
      credit: 30000,
    },
    {
      day: 'Tue',
      debit: 90000,
      credit: 60000,
    },
    {
      day: 'Wed',
      debit: 170000,
      credit: 210000,
    },
    {
      day: 'Thu',
      debit: 76000,
      credit: 62000,
    },
    {
      day: 'Fri',
      debit: 140000,
      credit: 120000,
    },
  ];
  return (
    <View style={styles.chartWrapper}>
      <Text style={styles.chartTitle}>In This Week</Text>
      <View style={styles.chartContainer}>
        {dataTransaction.map((data, index) => (
          <View key={index}>
            <View style={styles.chartItemWrapper}>
              <View style={styles.chartItem}>
                <View
                  style={{
                    ...styles.debitChart,
                    height: (data.debit / 1000) * 1,
                  }}
                />
                <View
                  style={{
                    ...styles.creditChart,
                    height: (data.credit / 1000) * 1,
                  }}
                />
              </View>
              <Text style={styles.textDay}>{data.day}</Text>
            </View>
          </View>
        ))}
      </View>

      <View style={styles.chartDescriptionWrapper}>
        <View style={styles.chartDescriptionItem}>
          <View style={{...styles.chartIcon, backgroundColor: '#6379F4'}} />
          <Text style={styles.chartDescriptionText}>Debit</Text>
        </View>
        <View style={styles.chartDescriptionItem}>
          <View style={{...styles.chartIcon, backgroundColor: '#9DA6B5'}} />
          <Text style={styles.chartDescriptionText}>Credit</Text>
        </View>
      </View>
    </View>
  );
};

export default Chart;
