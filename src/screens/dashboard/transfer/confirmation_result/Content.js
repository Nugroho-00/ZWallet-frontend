import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import moment from 'moment';
import {useSelector} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';
import {connect} from 'react-redux';


import { useSocket } from '../../../../services/contexts/SocketProvider';

const Content = props => {
  const [result, setResult] = useState(null);
  const [idTransaction, setIdTransaction] = useState()

  const userReducer = useSelector(state => state.userReducers);
  const userData = userReducer.user;
  const loginReducers = useSelector(state => state.loginReducers);

  const data = props.dataReceiver;
  console.log(data.amountValue,'thiss');

  
  const socket = useSocket()
  const token = loginReducers.user.token;

  console.log(data.username);

  console.log(data);
  const storeNotification=(id)=>{
    let config = {
      method: 'POST',
      url: `${API_URL}/notification`,
      data: {content: `${id}#out#Transfer to ${data.username}#${data.amountValue}`},
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    axios(config)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  const transferHandler = () => {
    let config = {
      method: 'POST',
      url: `${API_URL}/transaction/transfer`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      data: {
        receiverPhone: data.phone,
        amount: data.amountValue,
        note: data.note,
      },
    };
    return axios(config)
      .then(res => {
        console.log(res.data.result);
        
        const body = {
          id:id,
          sender: userData.username,
          amount: data.amountValue
        }
        socket.emit('transfer',body, data.id,({status})=>{
          if(status){
            console.log(`${userData.username} joined room ${data.id}`);
        return setResult(true)

          }
        })
        setIdTransaction(res.data.result.id)
      })
      .catch(err => {
        console.log("SetREsult", {err});
        return setResult(false);
      });
  };

  if (result){
    storeNotification(idTransaction)

  }

  const navigateHome = () => {
    return props.navigation.navigate('HomeScreen');
  };

  useEffect(() => {
    transferHandler();
  }, []);

  const separator = x => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.resultWrapper}>
        <View
          style={{
            ...styles.iconResult,
            display: result === null ? 'none' : 'flex',
          }}>
          <Icon
            name={result === true ? 'checkmark-circle' : 'close-circle'}
            size={70}
            color={result === true ? '#1EC15F' : '#FF5B37'}
          />
        </View>
        <Text style={styles.textResult}>
          {result === true ? 'Transfer Success' : 'Transfer Failed'}
        </Text>
        <Text
          style={{
            ...styles.textResultDescription,
            display: result === true ? 'none' : 'flex',
          }}>
          We can’t transfer your money at the moment, we recommend you to check
          your internet connection and try again.
        </Text>
      </View>

      <View style={styles.balanceWrapper}>
        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Amount</Text>
          <Text style={styles.infoText}>{`Rp${separator(data.amountValue)}`}</Text>
        </View>

        <View style={{width: 20}} />

        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Balance Left</Text>
          <Text style={styles.infoText}>{`Rp${separator(
            userData.balances - data.amountValue,
          )}`}</Text>
        </View>
      </View>

      <View style={styles.balanceWrapper}>
        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Date</Text>
          <Text style={styles.infoText}>{moment().format('ll')}</Text>
        </View>

        <View style={{width: 20}} />

        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Time</Text>
          <Text style={styles.infoText}>{moment().format('LT')}</Text>
        </View>
      </View>

      <View style={styles.noteWrapper}>
        <Text style={styles.infoTitle}>Notes</Text>
        <Text style={styles.infoText}>{data.note}</Text>
      </View>

      <View style={styles.relationsWrapper}>
        <Text style={styles.labelRelations}>From</Text>
        <View style={styles.infoRelationsWrapper}>
          <Icon name="person-outline" size={56} />
          <View style={styles.infoUserWrapper}>
            <Text style={styles.textUsername}>{userData.username}</Text>
            <Text style={styles.textPhone}>+62 {userData.phone.replace(/\B(?=(\d{4})+(?!\d))/g, '-')}</Text>
          </View>
        </View>

        <Text style={styles.labelRelations}>To</Text>
        <View style={styles.infoRelationsWrapper}>
          <Icon name="person-outline" size={56} />
          <View style={styles.infoUserWrapper}>
            <Text style={styles.textUsername}>{data.username}</Text>
            <Text style={styles.textPhone}>+62 {data.phone.replace(/\B(?=(\d{4})+(?!\d))/g, '-')}</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.btnContinue}
        onPress={result === true ? navigateHome : transferHandler}>
        <Text style={styles.textContinue}>
          {result === true ? 'Back to Home' : 'Try Again'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,
  };
};

const connectedConfirmResult = connect(mapStatetoProps)(Content);

export default connectedConfirmResult;
