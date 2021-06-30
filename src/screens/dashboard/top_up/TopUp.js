import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
  TextInput,
} from 'react-native';
import {Icon} from 'native-base';
import classes from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
import {connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';

import CustomModal from '../../../components/modal/CustomModal';

import PushNotification from 'react-native-push-notification';

const TopUp = props => {
  const {navigation} = props;
  const [amount, setAmount] = useState('');
  const [amountValue, setAmountValue] = useState();
  const [isFilled, setIsFilled] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [animateModal, setAnimateModal] = useState(false);
  const [confirmModal, setConfirmModal] = useState(false);

  const token = props.loginReducers.user.token;
  const dataUser = props.userReducers.user;
  const channel = 'notif';
  console.log(props.userReducers.notification);
  useEffect(() => {
    PushNotification.createChannel(
      {
        channelId: 'notif',
        channelName: 'My Notification Channel',
      },
      created => console.log(`student createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
    );
  }, []);

  useEffect(() => {
    PushNotification.getChannels(channel_ids => {
      console.log(channel_ids);
    });
  }, []);

  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, '');

  const handleChange = num => {
    num.substring(0) !== '0' && setAmount(addCommas(removeNonNumeric(num)));
  };

  const numericHandler = num => {
    const currency = parseInt(num.replace(',', ''));
    setAmountValue(currency);
  };

  useEffect(() => {
    if (Number(amountValue) >= 10000) {
      setIsFilled(true);
      setErrorMessage('');
    } else if (Number(amountValue) <= 10000) {
      setIsFilled(false);
      setErrorMessage('the minimum topup amount is Rp10.000');
    }
  }, [amountValue]);

  const storeNotification = id => {
    let config = {
      method: 'POST',
      url: `${API_URL}/notification`,
      data: {content: `${id}#in#Top Up with instant method#${amount}`},
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    axios(config)
      .then(res => {
        if (props.userReducers.notification === true) {
          PushNotification.localNotification({
            channelId: channel,
            title: 'Hurray! top up was successful.',
            message: 'The balance will be added to your Zwallet account',
          });
        }
        navigation.navigate('HomeScreen');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const submitHandler = () => {
    if (!amount) {
      setErrorMessage('Please fill in this field');
    } else if (Number(amount) < 10000) {
      setErrorMessage('the minimum topup amount is Rp10.000');
    } else if (isFilled) {
      let config = {
        method: 'PATCH',
        url: `${API_URL}/transaction/topup`,
        data: {virtual_account: dataUser.virtual_account, amount: amountValue},
      };
      axios(config)
        .then(res => {
          storeNotification(res.data.result.id);
        })
        .catch(err => {
          console.log(err.response);
        });
    }
  };

  const instructionData = [
    {
      step: '1',
      instruction: 'Go to the nearest ATM or you can use E-Banking.',
    },
    {
      step: '2',
      instruction: 'Type your security number on the ATM or E-Banking.',
    },
    {
      step: '3',
      instruction: 'Select “Transfer” in the menu',
    },
    {
      step: '4',
      instruction:
        'Type the virtual account number that we provide you at the top.',
    },
    {
      step: '5',
      instruction: 'Type the amount of the money you want to top up.',
    },
    {
      step: '6',
      instruction: 'Read the summary details',
    },
    {
      step: '7',
      instruction: 'Press transfer / top up',
    },
    {
      step: '8',
      instruction: 'You can see your money in Zwallet within 3 hours.',
    },
  ];

  return (
    <>
      <View style={classes.container}>
        <StatusBar
          translucent
          backgroundColor="#6379F4"
          barStyle="dark-content"
        />
        <View style={classes.headeruppersection}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}>
              <Icon name="arrow-back-outline" style={classes.back} />
            </TouchableOpacity>
            <Text style={classes.title}>Top Up</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            {/* <Text style={classes.title}>Instant Top up</Text> */}
            <TouchableOpacity
              onPress={() => {
                setShowModal(true);
              }}>
              <Icon name="card-outline" style={classes.back} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={classes.headerbottomsection}>
          <TouchableOpacity style={classes.addbtn}>
            <Ionicons
              name="add-outline"
              size={38}
              color="rgba(99, 121, 244, 1)"
            />
          </TouchableOpacity>
          <View style={classes.topupmethod}>
            <Text style={classes.methodtext}>Virtual Account Number</Text>
            <Text style={classes.methoddetailtext}>
              {dataUser.virtual_account
                .match(/\d{4}(?=\d{2,3})|\d+/g)
                .join('-')}
            </Text>
          </View>
        </View>
      </View>
      <ScrollView>
        <View style={classes.maincontainer}>
          <Text style={classes.instructionheader}>How to Top-Up</Text>
          {instructionData.map((item, index) => (
            <View key={index} style={classes.instructioncontainer}>
              <Text style={classes.step}>{item.step}</Text>
              <Text style={classes.instructiontext}>{item.instruction}</Text>
            </View>
          ))}
        </View>

        <SwipeUpDownModal
          modalVisible={showModal}
          PressToanimate={animateModal}
          MainContainerModal={classes.mainModal}
          duration={300}
          ContentModal={
            <View style={classes.containerContent}>
              <Text style={classes.titleModal}>Instant Top Up</Text>
              <View style={classes.createNewSection}>
                <Text style={classes.rupiah}>Rp</Text>
                <TextInput
                  value={amount}
                  style={classes.numberInput}
                  placeholder="0"
                  keyboardType="numeric"
                  onChangeText={e => {
                    numericHandler(e);
                    handleChange(e);
                  }}
                  onPressIn={() => setErrorMessage('')}
                />
              </View>
              {errorMessage ? (
                <Text style={classes.errorMessage}>{errorMessage}</Text>
              ) : null}
              <TouchableOpacity
                style={isFilled ? classes.sendOn : classes.sendOff}
                onPress={() => setConfirmModal(true)}
                disabled={isFilled ? false : true}>
                <Text
                  style={isFilled ? classes.txtTopUpOn : classes.txtTopUpOff}>
                  Top Up Now
                </Text>
              </TouchableOpacity>
            </View>
          }
          HeaderStyle={classes.headerContent}
          ContentModalStyle={classes.Modal}
          HeaderContent={
            <View style={{alignItems: 'center'}}>
              <View style={classes.line} />
            </View>
          }
          onClose={() => {
            setAmount('');
            setErrorMessage('');
            setShowModal(false);
            setAnimateModal(false);
          }}
        />
      </ScrollView>
      {confirmModal ? (
        <CustomModal
          modalVisible={confirmModal}
          title="Top Up Confirmation"
          msg={`Are you sure you want to top up a balance of Rp${amountValue
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}?`}
          btnLabel3="Cancel"
          onAction3={() => {
            setConfirmModal(false);
          }}
          btnLabel4="Yes I'm sure"
          onAction4={submitHandler}
        />
      ) : null}
    </>
  );
};

const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,
    userReducers: state.userReducers,
  };
};

const connectedTopUp = connect(mapStatetoProps)(TopUp);

export default connectedTopUp;
