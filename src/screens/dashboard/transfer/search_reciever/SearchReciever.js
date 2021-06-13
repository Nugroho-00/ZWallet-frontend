import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';

import Header from './Header';
import Content from './Content';
import QuickAccess from './QuickAccess';

import styles from './styles';

const SearchReciever = (props) => {
  const [search, setSearch] = useState('');
  const searchHandler=(e)=>{
    console.log(e);
    setSearch(e)
  }
  return (
    <View style={styles.container}>
      <Header navigation={props.navigation} onSearch={searchHandler}/>
      <ScrollView>
        <QuickAccess navigation={props.navigation} onSearch={search} />
        <Content navigation={props.navigation} onSearch={search}/>
      </ScrollView>
    </View>
  );
};

export default SearchReciever;
