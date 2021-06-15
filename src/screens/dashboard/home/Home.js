import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Image,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';
import {userLogout} from '../../../services/redux/actions/Auth';
import {addBalance, getUser} from '../../../services/redux/actions/Users';

import {useIsFocused} from '@react-navigation/native';
import {connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';

import {useSocket} from '../../../services/contexts/SocketProvider';
import PushNotification from 'react-native-push-notification';

import DefaultAvatar from '../../../assets/images/default_avatar.png';

const Home = props => {
  const [userData, setUserData] = useState({});
  const [balance, setBalance] = useState(props.userReducers.user?.data[0].balances)
  const [historyData, setHistoryData] = useState([]);
  const isFocused = useIsFocused();

  const socket = useSocket();

  const channel = 'notif';
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'notif',
        channelName: 'My Notification Channel',
      },
      created => console.log(`student createChannel returned '${created}'`),
    );
  }, []);

  useEffect(() => {
    PushNotification.getChannels(channel_ids => {
      console.log(channel_ids);
    });
  }, []);

  useEffect(() => {
    const token = props.loginReducers.user.token;

    if (socket === undefined) {
      return;
    }
    socket.on('connect', () =>
      console.log(`connected from home page  ${socket.id}`),
    );

    socket.on('get-notif', body => {
      const {id, sender, amount} = body;
      setBalance(Number(balance)+Number(amount))

      PushNotification.localNotification({
        channelId: channel,
        title: 'Inbound transfer',
        message: `${sender} just sent you Rp. ${amount}`,
      });

      let config = {
        method: 'POST',
        url: `${API_URL}/notification`,
        data: {content: `${id}#in#Transfer from ${sender}#${amount}`},
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };
      axios(config)
        .then(res => {
      console.log('balance',balance, 'amount',amount);
          // console.log(res.data.result);
        })
        .catch(err => {
          console.log(err);
        });
    });

    return () => {
      socket.off('connect');
      socket.off('get-notif');
    };
  }, [socket]);

  const getDataUser = () => {
    const token = props.loginReducers.user.token;
    props.getUserHandler(token);
    // props.setBalance(props.userReducers.user?.data[0].balances)
  };

  useEffect(() => {
    getDataUser();
  }, [isFocused]);

  const updateUserData = () => {
    setUserData(props.userReducers?.user?.data[0]);
    setBalance(props.userReducers.user?.data[0].balances)
  };

  useEffect(() => {
    updateUserData();
    const {id, username} = props.userReducers.user.data[0];
    socket.emit('my-room', id, ({status}) => {
      if (status) {
        console.log(`${username} joined room ${id}`);
      }
    });
  }, [props.userReducers, isFocused]);

  const getHistoryData = () => {
    const token = props.loginReducers.user.token;
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    return axios
      .get(`${API_URL}/transaction/?sort=date-ZA`, config)
      .then(res => {
        // console.log(res);
        return setHistoryData(res.data.result);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getHistoryData();
  }, []);
  useEffect(() => {
    getHistoryData();
  }, [isFocused]);

  const separator = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  console.log();

  const capitalizeFirstLetter = string => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  // console.log(props.userReducers.user.data[0]);

  useEffect(() => {
    if (props.userReducers.user?.data[0].status === 'not-verified') {
      props.navigation.navigate('ConfirmOtp', {
        id: props.userReducers.user?.data[0].id,
        type: 'not-verified',
      });
    }
  }, [props.userReducers]);

  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#6379F4"
      />
      <View style={styles.headerWrapper}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Profile')}
          style={{flex: 2}}>
          {userData.avatar === null ? (
            <Image source={DefaultAvatar} style={styles.avatar} />
          ) : (
            <Image
              source={{uri: `${API_URL}${userData.avatar}`}}
              style={styles.avatar}
            />
          )}
        </TouchableOpacity>
        <View style={{flex: 6}}>
          <TouchableOpacity>
            <Text style={{...styles.balanceTitle, ...styles.font}}>
              Balance
            </Text>
            <Text style={{...styles.balanceCount, ...styles.font}}>
              {userData.balances
                ? `Rp${separator(balance)}`
                : `Rp0`}
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
          {historyData.length < 1 ? (
            <View style={{alignItems: 'center', marginTop: 200}}>
              <Text
                style={{
                  fontFamily: 'NunitoSans-Regular',
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#7C7895',
                }}>
                No transactions yet
              </Text>
            </View>
          ) : (
            historyData.map((history, index) => (
              <View key={index} style={styles.historyListWrapper}>
                <View style={{flex: 2}}>
                  {history.avatar === null ? (
                    <Image source={DefaultAvatar} style={styles.avatar} />
                  ) : (
                    <Image
                      source={{uri: `${API_URL}${history.image}`}}
                      style={styles.avatar}
                    />
                  )}
                </View>
                <View style={{flex: 4}}>
                  <Text style={{fontSize: 16, marginBottom: 9}}>
                    {history.type === 'debit'
                      ? history.sender
                      : history.receiver}
                  </Text>
                  <Text style={{color: '#7A7886'}}>
                    {capitalizeFirstLetter(
                      history.type === 'credit'
                        ? 'Transfer'
                        : history.type === 'debit'
                        ? 'Transfer'
                        : history.type,
                    )}
                  </Text>
                </View>
                <View style={{flex: 3}}>
                  <Text
                    style={{
                      fontSize: 18,
                      color:
                        history.type === 'topup'
                          ? '#1EC15F'
                          : history.type === 'debit'
                          ? '#1EC15F'
                          : '#FF5B37',
                    }}>
                    {history.type === 'topup'
                      ? `+Rp${separator(history.nominal)}`
                      : history.type === 'debit'
                      ? `+Rp${separator(history.nominal)}`
                      : `-Rp${separator(history.nominal)}`}
                  </Text>
                </View>
              </View>
            ))
          )}
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
  setBalance: num=>{
    dispatch(addBalance(num))
  }
});
const connectedHome = connect(mapStatetoProps, mapDispatchToProps)(Home);
export default connectedHome;
