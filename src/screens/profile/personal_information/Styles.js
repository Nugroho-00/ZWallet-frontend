import {StyleSheet} from 'react-native';

const classes = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingHorizontal: '3%',
    paddingBottom: '5%',
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
    paddingVertical: '8%',
    paddingHorizontal: '3%',
  },
  inputgroup: {
    flexDirection: 'column',
  },
  inputwarning: {
    paddingLeft: '4%',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
  },
  input: {
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingTop: 10,
    marginVertical: '2%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 2,
  },
  inputlabel: {
    marginLeft: 4,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
    color: 'rgba(122, 120, 134, 1)',
  },
  inputbox: {
    width: '100%',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 20,
    color: 'rgba(81, 79, 91, 1)',
  },
  input2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingVertical: '5%',
    paddingTop: 10,
    marginVertical: '2%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 2,
  },
  inputphone: {
    justifyContent: 'space-between',
  },
  phone: {
    marginTop: '5%',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 20,
    color: 'rgba(81, 79, 91, 1)',
  },
  managebtn: {
    marginTop: -14,
  },
  managebtntext: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 14,
    color: 'rgba(99, 121, 244, 1)',
  },
  btncontainer: {
    marginTop: '10%',
    width: '100%',
  },
  editbtn: {
    paddingVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    shadowColor: 'black',
    elevation: 2,
  },
  editbtntext: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
  },
});

export default classes;
