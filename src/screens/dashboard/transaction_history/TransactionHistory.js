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
import Card from '../../../components/transaction/card/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TransactionHistory = props => {
  const {navigation} = props;
  let [modalState, setModalState] = useState(false);

  const thisWeek = [
    {
      receiver: 'Samuel dungdung',
      type: 'credit',
      transaction_nominal: 50000,
      avatar: 'alo',
    },
    {
      receiver: 'Spotify',
      type: 'subscription',
      transaction_nominal: 49000,
    },
  ];

  const thisMonth = [
    {
      receiver: 'Netflix',
      type: 'subscription',
      transaction_nominal: 80000,
    },
    {
      receiver: 'Bobby',
      type: 'debit',
      transaction_nominal: 100000,
    },
    {
      receiver: 'Bobby',
      type: 'debit',
      transaction_nominal: 100000,
    },
  ];

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
          <View>
            <Text style={classes.sectionheader}>This Week</Text>
            {thisWeek.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </View>
          <View>
            <Text style={classes.sectionheader}>This Month</Text>
            {thisMonth.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </View>
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
