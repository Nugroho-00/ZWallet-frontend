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
    };
  });
  console.log('History Data', historyData);
  let sumTransaction = [];

  // filter today

  const filterToday = historyData.filter(item => {
    return item.date === moment().subtract(0, 'days').format('YYYY-MM-DD');
  });

  const debitToday = filterToday.filter(item => {
    return item.type === 'debit' || item.type === 'topup';
  });

  const creditToday = filterToday.filter(item => {
    return item.type === 'credit' || item.type === 'subscription';
  });

  let debitTodayNominal = debitToday.map(item => {
    return item.nominal;
  });

  let creditTodayNominal = creditToday.map(item => {
    return item.nominal;
  });

  if (debitTodayNominal.length > 1 && creditTodayNominal.length > 1) {
    sumTransaction.push({
      day: moment().subtract(0, 'days').format('ddd'),
      debit: debitTodayNominal.reduce((a, b) => a + b),
      credit: creditTodayNominal.reduce((a, b) => a + b),
    });
  }

  // filter lastday
  const filterLastDay = historyData.filter(item => {
    return item.date === moment().subtract(1, 'days').format('YYYY-MM-DD');
  });

  const debitLastDay = filterLastDay.filter(item => {
    return item.type === 'debit' || item.type === 'topup';
  });

  const creditLastDay = filterLastDay.filter(item => {
    return item.type === 'credit' || item.type === 'subscription';
  });

  let debitLastDayNominal = debitLastDay.map(item => {
    return item.nominal;
  });

  let creditLastDayNominal = creditLastDay.map(item => {
    return item.nominal;
  });

  if (debitLastDayNominal.length > 1 && creditLastDayNominal.length > 1) {
    sumTransaction.push({
      day: moment().subtract(1, 'days').format('ddd'),
      debit: debitLastDayNominal.reduce((a, b) => a + b),
      credit: creditLastDayNominal.reduce((a, b) => a + b),
    });
  }

  // filter last two days
  const filterLastTwoDay = historyData.filter(item => {
    return item.date === moment().subtract(2, 'days').format('YYYY-MM-DD');
  });

  const debitLastTwoDay = filterLastTwoDay.filter(item => {
    return item.type === 'debit' || item.type === 'topup';
  });

  const creditLastTwoDay = filterLastTwoDay.filter(item => {
    return item.type === 'credit' || item.type === 'subscription';
  });

  let debitLastTwoDayNominal = debitLastTwoDay.map(item => {
    return item.nominal;
  });

  let creditLastTwoDayNominal = creditLastTwoDay.map(item => {
    return item.nominal;
  });

  if (debitLastTwoDayNominal.length > 1 && creditLastTwoDayNominal.length > 1) {
    sumTransaction.push({
      day: moment().subtract(2, 'days').format('ddd'),
      debit: debitLastTwoDayNominal.reduce((a, b) => a + b),
      credit: creditLastTwoDayNominal.reduce((a, b) => a + b),
    });
  }

  // filter last three days
  const filterLastThreeDay = historyData.filter(item => {
    return item.date === moment().subtract(3, 'days').format('YYYY-MM-DD');
  });

  const debitLastThreeDay = filterLastThreeDay.filter(item => {
    return item.type === 'debit' || item.type === 'topup';
  });

  const creditLastThreeDay = filterLastThreeDay.filter(item => {
    return item.type === 'credit' || item.type === 'subscription';
  });

  let debitLastThreeDayNominal = debitLastThreeDay.map(item => {
    return item.nominal;
  });

  let creditLastThreeDayNominal = creditLastThreeDay.map(item => {
    return item.nominal;
  });

  if (
    debitLastThreeDayNominal.length > 1 &&
    creditLastThreeDayNominal.length > 1
  ) {
    sumTransaction.push({
      day: moment().subtract(3, 'days').format('ddd'),
      debit: debitLastThreeDayNominal.reduce((a, b) => a + b),
      credit: debitLastThreeDayNominal.reduce((a, b) => a + b),
    });
  }

  // filter last four days
  const filterLastFourDay = historyData.filter(item => {
    return item.date === moment().subtract(4, 'days').format('YYYY-MM-DD');
  });

  const debitLastFourDay = filterLastFourDay.filter(item => {
    return item.type === 'debit' || item.type === 'topup';
  });

  const creditLastFourDay = filterLastFourDay.filter(item => {
    return item.type === 'credit' || item.type === 'subscription';
  });

  let debitLastFourDayNominal = debitLastFourDay.map(item => {
    return item.nominal;
  });

  let creditLastFourDayNominal = creditLastFourDay.map(item => {
    return item.nominal;
  });

  if (
    debitLastFourDayNominal.length > 1 &&
    creditLastFourDayNominal.length > 1
  ) {
    sumTransaction.push({
      day: moment().subtract(4, 'days').format('ddd'),
      debit: debitLastFourDayNominal.reduce((a, b) => a + b),
      credit: creditLastFourDayNominal.reduce((a, b) => a + b),
    });
  }

  // filter last five days
  const filterLastFiveDay = historyData.filter(item => {
    return item.date === moment().subtract(5, 'days').format('YYYY-MM-DD');
  });

  const debitLastFiveDay = filterLastFiveDay.filter(item => {
    return item.type === 'debit' || item.type === 'topup';
  });

  const creditLastFiveday = filterLastFiveDay.filter(item => {
    return item.type === 'credit' || item.type === 'subscription';
  });

  let debitLastFiveDayNominal = debitLastFiveDay.map(item => {
    return item.nominal;
  });

  let creditLastFivedayNominal = creditLastFiveday.map(item => {
    return item.nominal;
  });

  if (
    debitLastFiveDayNominal.length > 1 &&
    creditLastFivedayNominal.length > 1
  ) {
    sumTransaction.push({
      day: moment().subtract(5, 'days').format('ddd'),
      debit: debitLastFiveDayNominal.reduce((a, b) => a + b),
      credit: creditLastFivedayNominal.reduce((a, b) => a + b),
    });
  }

  // filter last six days
  const filterLastSixDay = historyData.filter(item => {
    return item.date === moment().subtract(6, 'days').format('YYYY-MM-DD');
  });

  const debitLastSixDay = filterLastSixDay.filter(item => {
    return item.type === 'debit' || item.type === 'topup';
  });

  const creditLastSixDay = filterLastSixDay.filter(item => {
    return item.type === 'credit' || item.type === 'subscription';
  });

  let debitLastSixDayNominal = debitLastSixDay.map(item => {
    return item.nominal;
  });

  let creditLastSixDayNominal = creditLastSixDay.map(item => {
    return item.nominal;
  });

  if (debitLastSixDayNominal.length > 1 && creditLastSixDayNominal.length > 1) {
    sumTransaction.push({
      day: moment().subtract(6, 'days').format('ddd'),
      debit: debitLastSixDayNominal.reduce((a, b) => a + b),
      credit: creditLastSixDayNominal.reduce((a, b) => a + b),
    });
  }

  // filter last seven days
  const filterLastSevenDay = historyData.filter(item => {
    return item.date === moment().subtract(7, 'days').format('YYYY-MM-DD');
  });

  const debitLastSevenDay = filterLastSevenDay.filter(item => {
    return item.type === 'debit' || item.type === 'topup';
  });

  const creditLastSevenDay = filterLastSevenDay.filter(item => {
    return item.type === 'credit' || item.type === 'subscription';
  });

  let debitLastSevenDayNominal = debitLastSevenDay.map(item => {
    return item.nominal;
  });

  let creditLastSevenDayNominal = creditLastSevenDay.map(item => {
    return item.nominal;
  });

  if (
    debitLastSevenDayNominal.length > 1 &&
    creditLastSevenDayNominal.length > 1
  ) {
    sumTransaction.push({
      day: moment().subtract(7, 'days').format('ddd'),
      debit: debitLastSevenDayNominal.reduce((a, b) => a + b),
      credit: creditLastSevenDayNominal.reduce((a, b) => a + b),
    });
  }

  const filterEnd = moment().add(1, 'days').format('YYYY-MM-DD');
  const filterStart = moment().subtract(8, 'days').format('YYYY-MM-DD');

  // console.log();
  // console.log(filterEnd, filterStart);
  console.log(sumTransaction, filterLastDay);

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

  console.log('sumtrac', sumTransaction);
  // console.log('debit', debitTodayNominal);
  return (
    <View style={styles.chartWrapper}>
      <Text style={styles.chartTitle}>In This Week</Text>
      <View style={styles.chartContainer}>
        {sumTransaction.map((data, index) => (
          <View key={index}>
            <View style={styles.chartItemWrapper}>
              <View style={styles.chartItem}>
                <View
                  style={{
                    ...styles.debitChart,
                    height: (data.debit / 1000) * 0.2,
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
