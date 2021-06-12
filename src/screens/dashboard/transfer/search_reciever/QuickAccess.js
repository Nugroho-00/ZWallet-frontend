import React, {useState, useEffect} from 'react';

import {View, Text, TouchableOpacity, TextInput} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import {connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';

const QuickAccess = props => {
  const [myContact, setMyContact] = useState();
  const [isAvailabel, setIsAvailabel] = useState(false);
  const [createNew, setCreateNew] = useState();
  const token = props.loginReducers.user.token;

  useEffect(() => {
    axios
      .get(`${API_URL}/profile/my-contact`, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(res => {
        if (!res.data.success) {
          return;
        } else if (res.data.result) {
          setMyContact(res.data.result);
          setIsAvailabel(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // const quickAccessData = [
  //   {
  //     user: 'Rian',
  //     amount: '-9999',
  //   },
  //   {
  //     user: 'Rian',
  //     amount: '-19293',
  //   },
  //   {
  //     user: 'Rian',
  //     amount: '-129i3',
  //   },
  // ];
  return (
    <View style={styles.quickContainer}>
      <View style={styles.createNewSection}>
        <TextInput
          style={styles.numberInput}
          placeholder="Input phone number here"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.sendIconWrapper}>
          <Icon name="send-outline" style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
      {myContact ? (
        <>
          <View style={myContact?styles.quickTitle:null}>
            <Text style={styles.quickTitleText}>Quick Access</Text>
          </View>
          <View style={styles.quickContentWrapper}>
            {myContact &&
              myContact.slice(0, 3).map((user, index) => (
                <TouchableOpacity
                  style={styles.quickListWrapper}
                  key={index}
                  onPress={() => props.navigation.navigate('AmountInput')}>
                  <Icon name="person-outline" size={56} />
                  <Text style={styles.quickName}>{user.user}</Text>
                  <Text style={styles.quickAmount}>{user.amount}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </>
      ) : null}
    </View>
  );
};

const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,
  };
};

const connectedQuickAccess = connect(mapStatetoProps)(QuickAccess);

export default connectedQuickAccess;
