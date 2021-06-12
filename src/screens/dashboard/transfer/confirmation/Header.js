import React from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = (props) => {
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
          <Text style={styles.titleText}>Confirmation</Text>
        </View>

        <View style={styles.userWrapper}>
          <Icon name="person-outline" size={56} />
          <View style={styles.userInfo}>
            <Text style={styles.userName}>Samuel Sushi</Text>
            <Text style={styles.userPhone}>+62 813-8492-9994</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
