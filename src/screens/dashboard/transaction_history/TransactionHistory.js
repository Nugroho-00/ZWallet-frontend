import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import Header from '../../../components/header/Header';
import classes from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import History from '../../../components/transaction/transaction_history/history/History';
import moment from 'moment';
import axios from 'axios';
import {API_URL} from '@env';
import {useSelector} from 'react-redux';

const TransactionHistory = props => {
  const token = useSelector(state => state.loginReducers?.user?.token);
  const {navigation} = props;
  const [thisWeek, setThisWeek] = useState(null);
  const [thisMonth, setThisMonth] = useState(null);
  const [filterstate, setFilter] = useState(false);
  let [modalState, setModalState] = useState(false);

  const currentdate = moment()
    .year('year')
    .month('month')
    .date('day')
    .add(1, 'd')
    .format('YYYY-MM-DD');
  const weekstartdate = moment().clone().weekday(0).format('YYYY-MM-DD');
  const dayofweek = moment().day();
  const endmonth = moment().subtract(dayofweek, 'd').format('YYYY-MM-DD');
  const startmonth = moment().subtract(1, 'M').format('YYYY-MM-DD');
  const getHistoryWeek = url => {
    let config = {
      method: 'GET',
      url: url ? url : `${API_URL}/transaction`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: {
        start: weekstartdate,
        end: currentdate,
        sort: 'date-ZA',
        limits: 10,
      },
    };
    axios(config)
      .then(res => {
        if (res.data.result.length > 0) {
          console.log('res', {res});
          setThisWeek(res.data.result);
          return;
        }
        if (res.data.result.length === 0) {
          return false;
        }
      })
      .catch(err => console.log({err}));
  };
  const getHistoryMonth = url => {
    let config = {
      method: 'GET',
      url: url ? url : `${API_URL}/transaction`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
      params: {
        start: startmonth,
        end: endmonth,
        sort: 'date-ZA',
        limits: 10,
      },
    };
    axios(config)
      .then(res => {
        if (res.data.result.length > 0) {
          console.log('res', {res});
          setThisMonth(res.data.result);
          return;
        }
        if (res.data.result.length === 0) {
          return false;
        }
      })
      .catch(err => console.log({err}));
  };

  useEffect(async () => {
    await getHistoryWeek();
    await getHistoryMonth();
  }, []);

  console.log('endmonth', endmonth);
  console.log('startmonth', startmonth);

  // const thisMonth = [
  //   {
  //     receiver: 'Netflix',
  //     type: 'subscription',
  //     transaction_nominal: 80000,
  //   },
  //   {
  //     receiver: 'Bobby',
  //     type: 'debit',
  //     transaction_nominal: 100000,
  //   },
  //   {
  //     receiver: 'Bobby',
  //     type: 'debit',
  //     transaction_nominal: 100000,
  //   },
  // ];
  return (
    <View>
      <Modal
        visible={modalState}
        transparent={true}
        animationType="fade"
        onRequestClose={() => {
          setModalState(!modalState);
        }}>
        <View style={classes.modalcontainer}>
          <StatusBar translucent transparent />
          <View style={classes.container}>
            <View style={classes.filtersection}>
              <View style={classes.bytype}>
                <View style={{...classes.bytypebtn, backgroundColor: 'white'}}>
                  <TouchableOpacity>
                    <Ionicons
                      name="caret-down-outline"
                      size={24}
                      color={'rgba(255, 91, 55, 1)'}
                    />
                  </TouchableOpacity>
                </View>
                <View style={{...classes.bytypebtn, backgroundColor: 'white'}}>
                  <TouchableOpacity>
                    <Ionicons
                      name="caret-up-outline"
                      size={24}
                      color={'rgba(30, 193, 95, 1)'}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{...classes.bytype, marginTop: '5%'}}>
                <View
                  style={{
                    ...classes.bytypebtn,
                    backgroundColor: 'white',
                    width: 120,
                  }}>
                  <TouchableOpacity>
                    <Text style={classes.bytypebtntext}>Filter by Date</Text>
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    ...classes.bytypebtn,
                    backgroundColor: 'white',
                    width: 120,
                  }}>
                  <TouchableOpacity>
                    <Text style={classes.bytypebtntext}>Filter by Date</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={classes.modalbtnconfirm}>
              <TouchableOpacity>
                <Text style={{...classes.modalbtntext, color: 'white'}}>
                  Confirm
                </Text>
              </TouchableOpacity>
            </View>
            <View style={classes.modalbtngroup}>
              <View
                style={{
                  ...classes.modalbtn,
                  backgroundColor: 'rgba(218, 218, 218, 1)',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    setModalState(!modalState);
                  }}>
                  <Text
                    style={{
                      ...classes.modalbtntext,
                      color: 'rgba(136, 136, 143, 1)',
                    }}>
                    Cancel
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={{...classes.modalbtn, backgroundColor: 'white'}}>
                <TouchableOpacity
                  onPress={() => {
                    setModalState(!modalState);
                  }}>
                  <Text
                    style={{
                      ...classes.modalbtntext,
                      color: 'rgba(255, 91, 55, 1)',
                    }}>
                    Reset
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <ScrollView>
        <Header isBack={true} title="History" navigation={navigation} />
        <View style={classes.maincontainer}>
          <History
            data={{thisWeek: thisWeek, thisMonth: thisMonth}}
            // new={defaultData.thisWeek}
          />
        </View>
      </ScrollView>
      <View style={classes.filter}>
        <TouchableOpacity
          style={classes.filterbtn}
          onPress={() => {
            setModalState(!modalState);
          }}>
          <Text style={classes.filterbtntext}>Filters</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TransactionHistory;
