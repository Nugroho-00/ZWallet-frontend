import React from 'react';
import {View, StatusBar, TouchableOpacity, Text, Image} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

import {API_URL} from '@env';


const Header = (props) => {
  const{id, phone, username, avatar} = props.dataReceiver
  console.log(username, avatar);

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
        {!avatar ? 
          <Icon name="person-outline" size={56} />:
          <Image source={{uri:`${API_URL}/${avatar}`}} style={styles.avatar}/>
        }
          {/* <Icon name="person-outline" size={56} /> */}
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
