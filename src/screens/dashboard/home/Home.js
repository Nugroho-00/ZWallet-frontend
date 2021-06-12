import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {userLogout} from '../../../services/redux/actions/Auth';
import {getUser} from '../../../services/redux/actions/Users';
import {connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';

const Home = props => {
  const [userData, setUserData] = useState({});
  const [historyData, setHistoryData] = useState([]);

  console.log(historyData);

  const getDataUser = () => {
    const token = props.loginReducers.user.token;
    return props.getUserHandler(token);
  };

  useEffect(() => {
    getDataUser();
  }, []);

  const updateUserData = () => {
    return setUserData(props.userReducers.user?.data[0]);
  };

  useEffect(() => {
    updateUserData();
  }, [props.userReducers]);

  const getHistoryData = () => {
    const token = props.loginReducers.user.token;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return axios
      .get(`${API_URL}/transaction/?sort=amount-ZA`, config)
      .then(res => {
        console.log(res);
        return setHistoryData(res.data.result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHistoryData();
  }, []);

  const separator = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#6379F4"
      />
      <View style={styles.headerWrapper}>
        <View style={{flex: 2}}>
          <Icon
            name="person"
            size={52}
            color="#FFF"
            onPress={() => props.navigation.navigate('Profile')}
          />
        </View>
        <View style={{flex: 6}}>
          <TouchableOpacity>
            <Text style={{...styles.balanceTitle, ...styles.font}}>
              Balance
            </Text>
            <Text style={{...styles.balanceCount, ...styles.font}}>
              {userData.balances
                ? `Rp.${separator(userData.balances)}`
                : `Rp.0`}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('Notification')}>
            <Icon name="notifications-outline" size={28} color="#FFF" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView>
        <View style={styles.btnTransactionWrapper}>
          <TouchableOpacity
            style={styles.btnTransaction}
            onPress={() => props.navigation.navigate('Transfer')}>
            <Icon name="arrow-up" size={28} color="#608DE2" />
            <Text style={{...styles.btnTransactionText, ...styles.font}}>
              Transfer
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.btnTransaction}
            onPress={() => props.navigation.navigate('TopUp')}>
            <Icon name="add" size={28} color="#608DE2" />
            <Text style={{...styles.btnTransactionText, ...styles.font}}>
              Top Up
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.historyTitleWrapper}>
          <Text style={{...styles.font, fontSize: 18}}>
            Transaction History
          </Text>
          <TouchableOpacity
            onPress={() => props.navigation.navigate('TransactionDetail')}>
            <Text style={{...styles.font, color: '#6379F4'}}>See all</Text>
          </TouchableOpacity>
        </View>

        <View>
          {historyData.map((history, index) => (
            <View key={index} style={styles.historyListWrapper}>
              <View style={{flex: 2}}>
                <Icon name="person-outline" size={56} />
              </View>
              <View style={{flex: 4}}>
                <Text style={{fontSize: 16, marginBottom: 9}}>
                  {history.type === 'debit' ? history.receiver : history.sender}
                </Text>
                <Text style={{color: '#7A7886'}}>
                  {capitalizeFirstLetter(history.type)}
                </Text>
              </View>
              <View style={{flex: 3}}>
                <Text
                  style={{
                    fontSize: 18,
                    color:
                      history.type === 'transfer' || 'topup'
                        ? '#1EC15F'
                        : '#FF5B37',
                  }}>
                  {history.type === 'transfer' || 'topup'
                    ? `+Rp${separator(history.nominal)}`
                    : `-Rp${separator(history.nominal)}`}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,
    userReducers: state.userReducers,
  };
};

const mapDispatchToProps = dispatch => ({
  onLogoutHandler: () => {
    dispatch(userLogout());
  },
  getUserHandler: token => {
    dispatch(getUser(token));
  },
});
const connectedHome = connect(mapStatetoProps, mapDispatchToProps)(Home);
export default connectedHome;
