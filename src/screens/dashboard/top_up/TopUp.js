import React from 'react';
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {Icon} from 'native-base';
import classes from './Styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TopUp = props => {
  const {navigation} = props;

  const instructionData = [
    {
      step: '1',
      instruction: 'Go to the nearest ATM or you can use E-Banking.',
    },
    {
      step: '2',
      instruction: 'Type your security number on the ATM or E-Banking.',
    },
    {
      step: '3',
      instruction: 'Select “Transfer” in the menu',
    },
    {
      step: '4',
      instruction:
        'Type the virtual account number that we provide you at the top.',
    },
    {
      step: '5',
      instruction: 'Type the amount of the money you want to top up.',
    },
    {
      step: '6',
      instruction: 'Read the summary details',
    },
    {
      step: '7',
      instruction: 'Press transfer / top up',
    },
    {
      step: '8',
      instruction: 'You can see your money in Zwallet within 3 hours.',
    },
  ];

  return (
    <ScrollView>
      <View style={classes.container}>
        <StatusBar
          translucent
          backgroundColor="#6379F4"
          barStyle="dark-content"
        />
        <View style={classes.headeruppersection}>
          <TouchableOpacity
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Icon name="arrow-back-outline" style={classes.back} />
          </TouchableOpacity>
          <Text style={classes.title}>Top Up</Text>
        </View>
        <View style={classes.headerbottomsection}>
          <TouchableOpacity style={classes.addbtn}>
            <Ionicons
              name="add-outline"
              size={38}
              color="rgba(99, 121, 244, 1)"
            />
          </TouchableOpacity>
          <View style={classes.topupmethod}>
            <Text style={classes.methodtext}>Virtual Account Number</Text>
            <Text style={classes.methoddetailtext}>2389 081393877946</Text>
          </View>
        </View>
      </View>
      <View style={classes.maincontainer}>
        <Text style={classes.instructionheader}>How to Top-Up</Text>
        {instructionData.map((item, index) => (
          <View key={index} style={classes.instructioncontainer}>
            <Text style={classes.step}>{item.step}</Text>
            <Text style={classes.instructiontext}>{item.instruction}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default TopUp;
