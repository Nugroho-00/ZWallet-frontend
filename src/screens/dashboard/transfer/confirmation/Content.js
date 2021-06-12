import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import styles from './styles';

const Content = () => {
  return (
    <View style={styles.contentWrapper}>
      <View style={styles.balanceWrapper}>
        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Amount</Text>
          <Text style={styles.infoText}>Rp100.000</Text>
        </View>

        <View style={{width: 20}} />

        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Balance Left</Text>
          <Text style={styles.infoText}>Rp20.000</Text>
        </View>
      </View>

      <View style={styles.balanceWrapper}>
        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Date</Text>
          <Text style={styles.infoText}>May 11, 2020</Text>
        </View>

        <View style={{width: 20}} />

        <View style={styles.infoWrapper}>
          <Text style={styles.infoTitle}>Time</Text>
          <Text style={styles.infoText}>12.20</Text>
        </View>
      </View>

      <View style={styles.noteWrapper}>
        <Text style={styles.infoTitle}>Notes</Text>
        <Text style={styles.infoText}>For buying some socks</Text>
      </View>

      <TouchableOpacity style={styles.btnContinue}>
        <Text style={styles.textContinue}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Content;
