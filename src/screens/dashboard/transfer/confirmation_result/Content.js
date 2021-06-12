import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Content = () => {
  const [result, setResult] = useState(false);

  return (
    <View style={styles.contentWrapper}>
      <View style={styles.resultWrapper}>
        <View style={styles.iconResult}>
          <Icon
            name={result ? 'checkmark-circle' : 'close-circle'}
            size={70}
            color={result ? '#1EC15F' : '#FF5B37'}
          />
        </View>
        <Text style={styles.textResult}>
          {result ? 'Transfer Success' : 'Transfer Failed'}
        </Text>
        <Text
          style={{
            ...styles.textResultDescription,
            display: result ? 'none' : 'flex',
          }}>
          We can’t transfer your money at the moment, we recommend you to check
          your internet connection and try again.
        </Text>
      </View>

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

      <View style={styles.relationsWrapper}>
        <Text style={styles.labelRelations}>From</Text>
        <View style={styles.infoRelationsWrapper}>
          <Icon name="person-outline" size={56} />
          <View style={styles.infoUserWrapper}>
            <Text style={styles.textUsername}>Robert Chandler</Text>
            <Text style={styles.textPhone}>+62 813-9387-7946</Text>
          </View>
        </View>

        <Text style={styles.labelRelations}>To</Text>
        <View style={styles.infoRelationsWrapper}>
          <Icon name="person-outline" size={56} />
          <View style={styles.infoUserWrapper}>
            <Text style={styles.textUsername}>Samuel Suhi</Text>
            <Text style={styles.textPhone}>+62 813-8492-9994</Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={styles.btnContinue}
        onPress={() => setResult(!result)}>
        <Text style={styles.textContinue}>
          {result ? 'Back to Home' : 'Try Again'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Content;
