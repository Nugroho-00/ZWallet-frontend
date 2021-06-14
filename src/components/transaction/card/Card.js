import React from 'react';
import {View, Text, Image} from 'react-native';
import classes from './Styles';
import DefaultAvatar from '../../../assets/images/default_avatar.png';
import ExampleAvatar from '../../../assets/images/example_avatar.jpg';
import NumberFormat from 'react-number-format';
import axios from 'axios';
import {API_URL} from '@env';

const Card = props => {
  const {data} = props;
  const [amount, setAmount] = React.useState();

  const prefix = type => {
    if (type === 'credit' || type === 'subscription') {
      return '-Rp';
    }
    if (type === 'debit' || type === 'topup') {
      return '+Rp';
    }
  };

  return (
    <View style={classes.cardcontainer}>
      <View style={classes.leftcontent}>
        <Image
          style={classes.avatar}
          source={data.image ? {uri: `${API_URL}${data.image}`} : DefaultAvatar}
        />
        <View>
          <Text style={classes.username}>
            {data.receiver.charAt(0).toUpperCase() + data.receiver.slice(1)}
          </Text>
          <Text style={classes.transactiontype}>
            {data.type === 'credit'
              ? data.type === 'debit'
                ? 'Transfer'
                : data.type.charAt(0).toUpperCase() + data.type.slice(1)
              : data.type.charAt(0).toUpperCase() + data.type.slice(1)}
          </Text>
        </View>
      </View>
      <View style={classes.rightcontent}>
        <NumberFormat
          value={data.nominal}
          displayType={'text'}
          thousandSeparator={true}
          prefix={prefix(data.type)}
          renderText={formattedValue => (
            <Text
              style={{
                ...classes.amount,
                color:
                  data.type === 'debit' || data.type === 'topup'
                    ? 'rgba(30, 193, 95, 1)'
                    : 'rgba(255, 91, 55, 1)',
              }}>
              {formattedValue}
            </Text>
          )}
        />
      </View>
    </View>
  );
};

export default Card;
