import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import Header from './Header';
import Content from './Content';

import styles from './styles';

const Confirmation = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Content />
      </ScrollView>
    </View>
  );
};

export default Confirmation;
