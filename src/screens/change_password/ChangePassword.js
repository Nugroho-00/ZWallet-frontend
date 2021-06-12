import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import Header from './Header';
import Content from './Content';

const ChangePassword = () => {
  return (
    <View style={{flex: 1}}>
      <Header />
      <ScrollView>
        <Content />
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
