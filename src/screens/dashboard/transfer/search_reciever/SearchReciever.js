import React from 'react';
import {View, ScrollView} from 'react-native';

import Header from './Header';
import Content from './Content';
import QuickAccess from './QuickAccess';

import styles from './styles';

const SearchReciever = (props) => {
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation}/>
      <ScrollView>
        <QuickAccess navigation={props.navigation} />
        <Content navigation={props.navigation}/>
      </ScrollView>
    </View>
  );
};

export default SearchReciever;
