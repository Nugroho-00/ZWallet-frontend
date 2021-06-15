import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import {connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';
import {useIsFocused} from '@react-navigation/native';


const Content = props => {
  const [myContact, setMyContact] = useState();
  const [isAvailable, setIsAvailable] = useState(false);
  const token = props.loginReducers.user.token;
  const isFocused = useIsFocused();

  const getContact = () => {
    axios
      .get(
        `${API_URL}/profile/my-contact?search=${props.onSearch}&sort=name-AZ`,
        {
          headers: {Authorization: `Bearer ${token}`},
        },
      )
      .then(res => {
        if (res.data.success === false) {
          setIsAvailable(false);
        } else if (res.data.result) {
          setMyContact(res.data.result);
          setIsAvailable(true);
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getContact();
  }, []);

  useEffect(() => {
    getContact();
  }, [props.onSearch, isFocused]);

  return (
    <View
      style={
        props.onSearch
          ? {...styles.contentContainer, marginTop: -10}
          : styles.contentContainer
      }>
      <View style={styles.titleContentWrapper}>
        <Text style={styles.titleContentText}>Contact</Text>
        <Text style={styles.countContact}>
          {!isAvailable
            ? 'No contact found'
            : myContact.length + ' Contact Founds'}
        </Text>
      </View>
      <View>
        {isAvailable && myContact
          ? myContact.map((contact, index) => (
              <TouchableOpacity
                style={styles.listContactWrapper}
                key={index}
                onPress={() =>
                  props.navigation.navigate('AmountInput', {...contact})
                }>
                <View>
                  {!contact.avatar ? (
                    <Icon name="person-outline" size={56} />
                  ) : (
                    <Image
                      source={{uri: `${API_URL}/${contact.avatar}`}}
                      style={styles.avatar}
                    />
                  )}
                </View>
                <View style={styles.contactInfoWrapper}>
                  <Text style={styles.contactName}>{contact.username}</Text>
                  <Text style={styles.contactPhone}>+62 {contact.phone.replace(/\B(?=(\d{4})+(?!\d))/g, '-')}</Text>
                </View>
              </TouchableOpacity>
            ))
          : null}
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
