import React from 'react';
import {View, ScrollView, BackHandler} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import Header from './Header';
import Content from './Content';
import styles from './styles';

const ConfirmationResult = props => {
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener('hardwareBackPress', onBackPress);

      return () =>
        BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    }, []),
  );
  const data = props.route.params;
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView>
        <Content navigation={props.navigation} dataReceiver={data} />
      </ScrollView>
    </View>
  );
};

export default ConfirmationResult;
