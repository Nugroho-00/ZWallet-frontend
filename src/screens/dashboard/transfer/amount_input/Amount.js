import React from 'react';
import {View, ScrollView} from 'react-native';

import Header from './Header';
import Content from './Content';

import styles from './styles';

const Amount = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Content />
      </ScrollView>
    </View>
  );
};

export default Amount;
