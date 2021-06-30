import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StatusBar, ScrollView, Pressable} from 'react-native';
import {Icon} from 'native-base';
import styles from './Styles';
import Header from '../../components/header/Header';
import {connect} from 'react-redux';
import axios from 'axios';
import {API_URL} from '@env';

const currentDate = new Date().toISOString().slice(0, 10);

function Notification(props) {
  const {navigation} = props;
  const [notifItems, setNotifItems] = useState();

  const token = props.loginReducers.user.token;

  let dayList, monthList, yearList;
  let dayItems, monthItems, yearItems;

  function numberWithDot(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  const getNotification = () => {
    let config = {
      method: 'GET',
      url: `${API_URL}/notification`,
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    axios(config)
      .then(res => {
        setNotifItems(res.data.result);
      })
      .catch(err => {
        console.log(err.response.data.message);
      });
  };

  useEffect(() => {
    getNotification();
  }, []);

  if (notifItems) {
    dayList = notifItems.filter(item => item.created_at.slice(0, 10) === currentDate);
  }

  if (notifItems) {
    monthList = notifItems.filter(
      item =>
        item.created_at.slice(0, 7) === currentDate.slice(0, 7) &&
        !dayList.includes(item),
    );
  }
  if (notifItems) {
    yearList = notifItems.filter(
      item =>
        item.created_at.slice(0, 5) === currentDate.slice(0, 5) &&
        !dayList.includes(item) &&
        !monthList.includes(item),
    );
  }

  if (notifItems && dayList) {
    dayItems = dayList.map(item => {
      const data = item.content.split('#');
      return (
        <View style={styles.cardItem} key={item.id}>
          <View style={styles.left}>
            {data[1] === 'out' ? (
              <Icon name="arrow-up" style={styles.arrowUp} />
            ) : (
              <Icon name="arrow-down" style={styles.arrowDown} />
            )}
          </View>
          <View style={styles.right}>
            <Text style={styles.content}>{data[2]}</Text>
            <Text style={styles.amount}>Rp. {numberWithDot(data[3])}</Text>
          </View>
        </View>
      );
    });
  }

  if (notifItems && monthList) {
    monthItems = monthList.map(item => {
      const data = item.content.split('#');
      return (
        <View style={styles.cardItem} key={item.id}>
          <View style={styles.left}>
            {data[1] === 'out' ? (
              <Icon name="arrow-up" style={styles.arrowUp} />
            ) : (
              <Icon name="arrow-down" style={styles.arrowDown} />
            )}
          </View>
          <View style={styles.right}>
            <Text style={styles.content}>{data[2]}</Text>
            <Text style={styles.amount}>Rp. {numberWithDot(data[3])}</Text>
          </View>
        </View>
      );
    });
  }

  if (notifItems && yearList) {
    yearItems = yearList.map(item => {
      const data = item.content.split('#');
      return (
        <View style={styles.cardItem} key={item.id}>
          <View style={styles.left}>
            {data[1] === 'out' ? (
              <Icon name="arrow-up" style={styles.arrowUp} />
            ) : (
              <Icon name="arrow-down" style={styles.arrowDown} />
            )}
          </View>
          <View style={styles.right}>
            <Text style={styles.content}>{data[2]}</Text>
            <Text style={styles.amount}>Rp. {numberWithDot(data[3])}</Text>
          </View>
        </View>
      );
    });
  }

  return (
    <>
      <Header isBack={true} title="Notification" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        {dayList&&dayList.length>0?<Text style={styles.section}>Today</Text>:null}
        {dayItems}
        {monthList&&monthList.length>0?<Text style={styles.section}>This Month</Text>:null}
        {monthItems}
        {yearList&&yearList.length>0?<Text style={styles.section}>This Year</Text>:null}
        {yearItems}
      </ScrollView>
    </>
  );
}

const mapStatetoProps = state => {
  return {
    loginReducers: state.loginReducers,
  };
};

const connectedNotification = connect(mapStatetoProps)(Notification);

export default connectedNotification;
