import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Content = (props) => {
  const contactData = [
    {
      user: 'Samuel Suhi',
      phone: '+62 813-8492-9994',
    },
    {
      user: 'Samuel Suhi',
      phone: '+62 813-8492-9994',
    },
    {
      user: 'Samuel Suhi',
      phone: '+62 813-8492-9994',
    },
    {
      user: 'Samuel Suhi',
      phone: '+62 813-8492-9994',
    },
    {
      user: 'Samuel Suhi',
      phone: '+62 813-8492-9994',
    },
  ];
  return (
    <View style={styles.contentContainer}>
      <View style={styles.titleContentWrapper}>
        <Text style={styles.titleContentText}>Contact</Text>
        <Text style={styles.countContact}>17 Contact Founds</Text>
      </View>
      <View>
        {contactData.map((contact, index) => (
          <TouchableOpacity style={styles.listContactWrapper} key={index} onPress={()=>props.navigation.navigate('AmountInput')}>
            <View>
              <Icon name="person-outline" size={56} />
            </View>
            <View style={styles.contactInfoWrapper}>
              <Text style={styles.contactName}>{contact.user}</Text>
              <Text style={styles.contactPhone}>{contact.phone}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default Content;
