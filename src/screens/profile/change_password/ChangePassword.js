import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import Header from './Header';
import Content from './Content';

const ChangePassword = (props) => {
  return (
    <View style={{flex: 1}}>
      <Header navigation={props.navigation} />
      <ScrollView>
        <Content />
      </ScrollView>
    </View>
  );
};

export default ChangePassword;
