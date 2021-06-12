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
          <Text style={styles.titleText}>Change Password</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
