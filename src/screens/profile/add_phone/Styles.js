import {StyleSheet} from 'react-native';

const classes = StyleSheet.create({
  maincontainer: {
    width: '100%',
    height: '100%',
    paddingHorizontal: '5%',
    paddingBottom: '10%',
    // backgroundColor: 'grey',
  },
  uppercontent: {
    marginVertical: '5%',
  },
  headertext: {
    textAlign: 'center',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
    color: 'rgba(122, 120, 134, 1)',
  },
  bottomcontent: {
    justifyContent: 'space-between',
  },
  inputgroup: {
    flexDirection: 'column',
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '4%',
    marginBottom: '10%',
  },
  lefticon: {
    position: 'absolute',
    left: 5,
    justifyContent: 'center',
    zIndex: 10,
  },
  phonetext: {
    position: 'absolute',
    left: 40,
    justifyContent: 'center',
    zIndex: 10,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: 'black',
  },
  inputboxphone: {
    width: '100%',
    paddingLeft: 80,
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: 'black',
  },
  righticon: {
    position: 'absolute',
    right: 5,
    justifyContent: 'center',
    zIndex: 10,
  },
  submitbtn: {
    width: '100%',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
  },
  submitbtntext: {
    textAlign: 'center',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 20,

  },
});

export default classes;
