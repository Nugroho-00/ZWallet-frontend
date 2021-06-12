import React from 'react';
import {View, StatusBar, TouchableOpacity, Text} from 'react-native';

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
          <Text style={styles.titleText}>Transfer Details</Text>
        </View>
      </View>
    </View>
  );
};

export default Header;
