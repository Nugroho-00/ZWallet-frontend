import React from 'react';
import {View, ScrollView, Text} from 'react-native';

import Header from './Header';
import Content from './Content';

import styles from './styles';

const Confirmation = (props) => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation}/>
      <ScrollView>
        <Content navigation={props.navigation} />
      </ScrollView>
    </View>
  );
};

export default Confirmation;
