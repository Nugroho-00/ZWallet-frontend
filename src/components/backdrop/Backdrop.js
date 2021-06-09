import React from 'react';
import {StatusBar, View, Text} from 'react-native';
import styles from './Styles';

const Backdrop = () => {
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <Text style={styles.logo}>Zwallet</Text>
      </View>
    </>
  );
};

export default Backdrop;
