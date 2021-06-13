import React from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = (props) => {
  const{id, phone, username, avatar} = props.dataReceiver

  return (
    <View>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#6379F4"
      />

      <View style={styles.headerWrapper}>
        <View style={styles.titleWrapper}>
          <TouchableOpacity style={styles.backBtn}  onPress={()=>props.navigation.goBack()}>
            <Icon name="arrow-back" size={28} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.titleText}>Transfer</Text>
        </View>

        <View style={styles.userWrapper}>
          <Icon name="person-outline" size={56} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>{username}</Text>
            <Text style={styles.userPhone}>{phone}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
