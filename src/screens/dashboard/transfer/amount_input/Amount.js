import React from 'react';
import {View, ScrollView} from 'react-native';

import Header from './Header';
import Content from './Content';

import styles from './styles';

const Amount = (props) => {
  const data =props.route.params;
  return (
    <View style={styles.container}>
      <Header navigation = {props.navigation}  dataReceiver={data}/>
      <ScrollView>
        <Content navigation={props.navigation}/>
      </ScrollView>
    </View>
  );
};

export default Amount;
