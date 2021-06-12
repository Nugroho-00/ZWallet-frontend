import React, {useEffect, useState, useRef} from 'react';
import {View, Text, StatusBar, ScrollView, Pressable} from 'react-native';
import {Icon} from 'native-base';
import styles from './Styles';
import Header from '../../components/header/Header';

const currentDate = new Date().toISOString().slice(0,10)

function Notification(props) {
  const {navigation} = props;
  const [notifItems, setNotifItems] = useState()
  // const [today, setToday] = useState()
  // const [thisMonth, setThisMonth] = useState()
  // const [thisYear, setThisYear] = useState()

  let dayItems, monthItems, yearItems;

  function numberWithDot(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

  const dataNotif = [
    {
      id: 1,
      content: 'in#Transfered from JoshuaLee#220000',
      created_at: '2021-06-12'
    },
    {
      id: 2,
      content: 'out#Transfer to Suyanto#500000',
      created_at: '2021-06-12'
    },
    {
      id: 3,
      content: 'out#Netflix Subscription#190000',
      created_at: '2021-06-10'
    },
    {
      id: 4,
      content: 'in#Transfered from Sukiyem#500000',
      created_at: '2021-06-03'
    },
    {
      id: 5,
      content: 'out#Spotify Subscription#500000',
      created_at: '2021-05-12'
    },
    {
      id: 6,
      content: 'in#Transfered from Juber#100000',
      created_at: '2021-05-12'
    },
    {
      id: 7,
      content: 'out#Transfer to Abregedew#220000',
      created_at: '2021-04-12'
    },
    {
      id: 8,
      content: 'out#Canva Subscription#500000',
      created_at: '2021-04-12'
    },
    {
      id: 9,
      content: 'in#Top up via Muamalat Mobile Banking#100000',
      created_at: '2021-01-12'
    },
  ];

  const dayList = dataNotif.filter(item=>item.created_at===currentDate)
  const monthList = dataNotif.filter(item=>item.created_at.slice(0,7)===currentDate.slice(0,7) && !dayList.includes(item))
  const yearList = dataNotif.filter(item=>item.created_at.slice(0,5)===currentDate.slice(0,5) && !dayList.includes(item) && !monthList.includes(item))

  dayItems = dayList.map(item=>{
    const data = item.content.split('#')
    return (
      <View style={styles.cardItem} key={item.id}>
        <View style={styles.left}>
          {data[0]==='out'?
          <Icon name="arrow-up" style={styles.arrowUp}/> : 
          <Icon name="arrow-down" style={styles.arrowDown}/>
          }
        </View>
        <View style={styles.right}>

          <Text style={styles.content}>{data[1]}</Text>
          <Text style={styles.amount}>Rp. {numberWithDot(data[2])}</Text>
        </View>
      </View>
    )
  })

  monthItems = monthList.map(item=>{
    const data = item.content.split('#')
    return (
      <View style={styles.cardItem} key={item.id}>
        <View style={styles.left}>
          {data[0]==='out'?
          <Icon name="arrow-up" style={styles.arrowUp}/> : 
          <Icon name="arrow-down" style={styles.arrowDown}/>
          }
        </View>
        <View style={styles.right}>

          <Text style={styles.content}>{data[1]}</Text>
          <Text style={styles.amount}>Rp. {numberWithDot(data[2])}</Text>
        </View>
      </View>
    )
  })

  yearItems = yearList.map(item=>{
    const data = item.content.split('#')
    return (
      <View style={styles.cardItem} key={item.id}>
        <View style={styles.left}>
          {data[0]==='out'?
          <Icon name="arrow-up" style={styles.arrowUp}/> : 
          <Icon name="arrow-down" style={styles.arrowDown}/>
          }
        </View>
        <View style={styles.right}>

          <Text style={styles.content}>{data[1]}</Text>
          <Text style={styles.amount}>Rp. {numberWithDot(data[2])}</Text>
        </View>
      </View>
    )
  })

  return (
    <>
      <Header isBack={true} title="Notification" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <Text style={styles.section}>Today</Text>
        {dayItems}
        <Text style={styles.section}>This Month</Text>
        {monthItems}
        <Text style={styles.section}>This Year</Text>
        {yearItems}
      </ScrollView>
    </>
  );
}

export default Notification;
