import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import classes from './Styles';
import Card from '../../card/Card';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HistoryMonth = props => {
  // console.log('history', props);
  const {data} = props;
  //   const thisWeek = data.thisWeek;
  const thisMonth = data.thisMonth;

  // console.log(thisWeek);
  return (
    <>
      <View>
        <Text style={classes.sectionheader}>This Month</Text>
        {thisMonth ? (
          thisMonth.result.map((item, index) => (
            <Card data={item} key={index} />
          ))
        ) : (
          <View style={classes.emptycontent}>
            <Text style={classes.emptycontenttext}>Hmmm...</Text>
            <Text style={classes.emptycontenttext}>
              Seems like you haven't got any transaction this past month
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

export default HistoryMonth;
