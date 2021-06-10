import React from 'react';
import {View, ScrollView} from 'react-native';

import Header from './Header';
import Chart from './Chart';
import History from './TransactionHistory';

const TransactionDetail = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView>
        <Chart />
        <History />
      </ScrollView>
    </View>
  );
};

export default TransactionDetail;
