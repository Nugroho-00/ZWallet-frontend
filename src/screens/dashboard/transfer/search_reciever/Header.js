import React, {useState} from 'react';
import {View, StatusBar, TouchableOpacity, TextInput, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

import styles from './styles';

const Header = (props) => {
  const [search, setSearch] = useState('');
  console.log(search);

  return (
    <View>
      <StatusBar
        animated={true}
        barStyle="light-content"
        backgroundColor="#6379F4"
      />

      <View style={styles.headerWrapper}>
        <View style={styles.titleWrapper}>
          <TouchableOpacity style={styles.backBtn} onPress={()=>props.navigation.goBack()}>
            <Icon name="arrow-back" size={28} color="#FFF" />
          </TouchableOpacity>
          <Text style={styles.titleText}>Find Receiver</Text>
        </View>

        <View style={styles.searchWrapper}>
          <Icon name="search" size={24} color="#A9A9A9" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search receiver here"
            onChangeText={e => setSearch(e)}
          />
        </View>
        <View></View>
      </View>
    </View>
  );
};

export default Header;
