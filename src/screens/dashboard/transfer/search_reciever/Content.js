import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import {connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';

const Content = props => {
  const [myContact, setMyContact] = useState();
  const [isAvailabel, setIsAvailabel] = useState(false);
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
  // const contactData = [
  //   {
  //     user: 'Samuel Suhi',
  //     phone: '+62 813-8492-9994',
  //   },
  //   {
  //     user: 'Samuel Suhi',
  //     phone: '+62 813-8492-9994',
  //   },
  //   {
  //     user: 'Samuel Suhi',
  //     phone: '+62 813-8492-9994',
  //   },
  //   {
  //     user: 'Samuel Suhi',
  //     phone: '+62 813-8492-9994',
  //   },
  //   {
  //     user: 'Samuel Suhi',
  //     phone: '+62 813-8492-9994',
  //   },
  // ];
  return (
    <View style={styles.contentContainer}>
      <View style={styles.titleContentWrapper}>
        <Text style={styles.titleContentText}>Contact</Text>
        <Text style={styles.countContact}>{!isAvailabel ? 'No contact found': myContact.length+' Contact Founds'}</Text>
      </View>
      <View>
        {isAvailabel && myContact ?  (
         myContact.map((contact, index) => (
            <TouchableOpacity
              style={styles.listContactWrapper}
              key={index}
              onPress={() => props.navigation.navigate('AmountInput')}>
              <View>
                <Icon name="person-outline" size={56} />
              </View>
              <View style={styles.contactInfoWrapper}>
                <Text style={styles.contactName}>{contact.username}</Text>
                <Text style={styles.contactPhone}>{contact.phone}</Text>
              </View>
            </TouchableOpacity>
          ))
        ):null}
      </View>
    </View>
  );
};

const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,
  };
};

const connectedSearchReceiver = connect(mapStatetoProps)(Content);

export default connectedSearchReceiver;
