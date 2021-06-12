import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import Header from './Header';
import Content from './Content';
import styles from './styles';

const ConfirmationResult = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Content />
      </ScrollView>
    </View>
  );
};

export default ConfirmationResult;
