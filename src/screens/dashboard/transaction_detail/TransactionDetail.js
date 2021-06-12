import React from 'react';
import {View, ScrollView} from 'react-native';

import Header from './Header';
import Chart from './Chart';
import History from './TransactionHistory';

const TransactionDetail = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header navigation={props.navigation}/>
      <ScrollView>
        <Chart />
        <History navigation={props.navigation}/>
      </ScrollView>
    </View>
  );
};

export default TransactionDetail;
