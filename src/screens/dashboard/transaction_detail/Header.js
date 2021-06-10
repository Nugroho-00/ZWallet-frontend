import React from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = () => {
  return (
    <View>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#6379F4"
      />
      <View style={styles.headerWrapper}>
        <View style={styles.titleWrapper}>
          <TouchableOpacity style={styles.backBtn}>
            <Icon name="arrow-back" size={28} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.titleText}>Transaction</Text>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.reportWrapper}>
            <View style={{marginRight: 10}}>
              <Icon name="arrow-down" size={28} color="#4CEDB3" />
            </View>
            <View>
              <Text style={styles.reportTitle}>Income</Text>
              <Text style={styles.reportAmount}>Rp2.120.000</Text>
            </View>
          </View>

          <View style={styles.reportWrapper}>
            <View style={{marginRight: 10}}>
              <Icon name="arrow-up" size={28} color="#FF5B37" />
            </View>
            <View>
              <Text style={styles.reportTitle}>Expense</Text>
              <Text style={styles.reportAmount}>Rp2.120.000</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Header;
