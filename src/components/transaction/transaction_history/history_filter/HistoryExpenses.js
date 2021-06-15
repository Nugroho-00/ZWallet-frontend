import React from 'react';
import {View, Text} from 'react-native';
import classes from './Styles';
import Card from '../../card/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const HistoryFilterExpenses = props => {
  console.log('HistoryFilterExpenses', props);
  const data = props.data?.filterExpenses;
  
  //   console.log('formated', start);
  return (
    <>
      <View>
        <Text style={classes.sectionheader}>Sorted by Expenses</Text>
        {data ? (
          data.map((item, index) => (
            <Card data={item} key={index} timestamp={true} />
          ))
        ) : (
          <View style={classes.emptycontent}>
            <Text style={classes.emptycontenttext}>Hmmm...</Text>
            <Text style={classes.emptycontenttext}>
              We cannot find the data you were looking for
            </Text>
            <Ionicons
              name="sad"
              color="rgba(58, 61, 66, 0.6)"
              size={80}
              style={{marginTop: '5%'}}
            />
          </View>
        )}
      </View>
    </>
  );
};

export default HistoryFilterExpenses;
