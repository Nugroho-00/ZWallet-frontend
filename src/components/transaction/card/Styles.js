import {StyleSheet} from 'react-native';

const classes = StyleSheet.create({
  cardcontainer: {
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingVertical: '4%',
    marginVertical: '2%',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 4,
  },
  leftcontent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 15,
  },
  username: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
  },
  transactiontype: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
  },
  rightcontent: {
    justifyContent: 'center',
  },
  amount: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
  },
});

export default classes;
