import React, {useState, useEffect} from 'react';

import {View, Text, TouchableOpacity, TextInput, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import {connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';

const QuickAccess = props => {
  const [myContact, setMyContact] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const [addNew, setAddNew] = useState('');
  const [dataReceiver, setDataReceiver] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const token = props.loginReducers.user.token;

  useEffect(() => {
    axios
      .get(`${API_URL}/profile/my-contact?sort=rank-ZA`, {
        headers: {Authorization: `Bearer ${token}`},
      })
      .then(res => {
        if (res.data.success === false) {
          setIsAvailable(false);
        } else {
          setMyContact(res.data.result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const isValidPhone = num => {
    return !!num.match(/^[0-9]*$/);
  };
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");


  const findHandler = () => {
    if (!addNew) {
      setErrorMessage('Please fill in this field');
    } else {
      let config = {
        method: 'POST',
        url: `${API_URL}/ext/find`,
        data: {phone: addNew},
        headers: {
          Authorization: 'Bearer ' + token,
        },
      };
      axios(config)
        .then(res => {
          if (res.data.success) {
            setDataReceiver(res.data.result);
            if (dataReceiver) {
              props.navigation.navigate('AmountInput', {...dataReceiver[0]});
            }
          } else {
            setErrorMessage('No user is associated with the phone number');
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  return (
    <View style={styles.quickContainer}>
      <View style={styles.createNewSection}>
        <TextInput
          value={addNew}
          style={styles.numberInput}
          placeholder="Input phone number here"
          keyboardType="numeric"
          onChangeText={p => {
            p.substring(0) !== '0'&&setAddNew(removeNonNumeric(p));
          }}
          onPressIn={() => setErrorMessage('')}
        />

        <TouchableOpacity style={styles.sendIconWrapper} onPress={findHandler}>
          <Icon name="send-outline" style={styles.sendIcon} />
        </TouchableOpacity>
      </View>
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}

      {myContact && !props.onSearch ? (
        <>
          <View style={myContact ? styles.quickTitle : null}>
            <Text style={styles.quickTitleText}>Quick Access</Text>
          </View>
          <View style={styles.quickContentWrapper}>
            {myContact &&
              !props.onSearch &&
              myContact.slice(0, 3).map((user, index) => (
                <TouchableOpacity
                  style={styles.quickListWrapper}
                  key={index}
                  onPress={() =>
                    props.navigation.navigate('AmountInput', {...user})
                  }>
                  {!user.avatar ? (
                    <Icon name="person-outline" size={56} />
                  ) : (
                    <Image
                      source={{uri: `${API_URL}/${user.avatar}`}}
                      style={styles.avatar}
                    />
                  )}
                  <Text style={styles.quickName}>
                    {user.username.length > 7
                      ? user.username.slice(0, 5) + '...'
                      : user.username}
                  </Text>
                  <Text style={styles.quickAmount}>{user.phone.slice(-4)}</Text>
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
