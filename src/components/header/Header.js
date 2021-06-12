/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StatusBar, Text, Pressable} from 'react-native';
import {Icon} from 'native-base';
import styles from './Styles';

const Header = props => {
  const {navigation} = props;
  return (
    <>
      <StatusBar
        translucent
        backgroundColor="#6379F4"
        barStyle="light-content"
      />
      <Pressable
        style={
          props.isBack
            ? styles.container
            : {...styles.container, justifyContent: 'center'}
        }
        onPress={() => navigation.goBack()}>
        {props.isBack ? (
          <Icon name="arrow-back-outline" style={styles.back} />
        ) : null}
        <Text style={styles.title}>{props.title}</Text>
      </Pressable>
    </>
  );
};

export default Header;
