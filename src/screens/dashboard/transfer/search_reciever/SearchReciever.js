import React from 'react';
import {View, ScrollView} from 'react-native';

import Header from './Header';
import Content from './Content';
import QuickAccess from './QuickAccess';

import styles from './styles';

const SearchReciever = () => {
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <QuickAccess />
        <Content />
      </ScrollView>
    </View>
  );
};

export default SearchReciever;
