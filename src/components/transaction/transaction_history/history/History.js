import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import classes from './Styles';
import Card from '../../card/Card';

const History = props => {
  console.log('history', props);
  const {data} = props;
  const thisWeek = data.thisWeek;
  const thisMonth = data.thisMonth;

  // console.log(thisWeek);
  return (
    <>
      <View>
        <Text style={classes.sectionheader}>This Week</Text>
        {thisWeek
          ? thisWeek.map((item, index) => <Card data={item} key={index} />)
          : null}
      </View>
      <View>
        <Text style={classes.sectionheader}>This Month</Text>
        {thisMonth
          ? thisMonth.map((item, index) => <Card data={item} key={index} />)
          : null}
      </View>
    </>
  );
};

export default History;
