import {StyleSheet} from 'react-native';

const classes = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingHorizontal: '3%',
    paddingBottom: '10%',
    // backgroundColor: 'rgba(250, 252, 255, 1)',
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
    width: '100%',
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '10%',
    paddingVertical: '6%',
    paddingHorizontal: '5%',
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.4)',
    elevation: 15,
  },
  leftside: {
    flexDirection: 'column',
  },
  phonetype: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: 'rgba(122, 120, 134, 1)',
    marginBottom: 5,
  },
  phonenumber: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 20,
    color: 'rgba(81, 79, 91, 1)',
  },
});

export default classes;
