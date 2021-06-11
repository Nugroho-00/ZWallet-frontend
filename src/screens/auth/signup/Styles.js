import {StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const statusBarHeight = getStatusBarHeight();

const classes = StyleSheet.create({
  maincontainer: {
    flex: 1,
    paddingTop: statusBarHeight,
    alignItems: 'center',
    backgroundColor: '#FAFCFF',
  },
  uppercontent: {
    paddingVertical: '10%',
  },
  headertext: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 27,
    color: '#6379F4',
  },
  bottomcontent: {
    backgroundColor: 'white',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '10%',
    paddingHorizontal: '3%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: 'black',
    elevation: 16,
  },
  loginheader: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 25,
    color: '#3A3D42',
    marginBottom: '5%',
  },
  headerdesc: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: 'rgba(58, 61, 66, 0.6)',
    paddingHorizontal: '6%',
    textAlign: 'center',
    marginBottom: '8%',
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
  inputbox: {
    width: '100%',
    paddingLeft: '14%',
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: 'black',
  },
  inputboxactive: {
    width: '100%',
    paddingLeft: '14%',
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgba(169, 169, 169, 0.6)',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    color: 'black',
  },
  inputboxwarning: {
    width: '100%',
    paddingLeft: '14%',
    borderBottomWidth: 1.5,
    borderBottomColor: 'rgba(255, 91, 55, 1)',
    fontFamily: 'NunitoSans-Bold',
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
  forgotpassword: {
    marginTop: '-5%',
    marginRight: 16,
    alignSelf: 'flex-end',
    marginBottom: '7%',
  },
  forgottext: {
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 14,
    color: 'rgba(58, 61, 66, 0.8)',
  },
  signupbtn: {
    justifyContent: 'center',
    width: '100%',
    height: 55,
    backgroundColor: 'rgba(99, 121, 244, 1)',
    borderRadius: 12,
  },
  signupbtntext: {
    textAlign: 'center',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 20,
    color: 'white',
  },
  login: {
    marginVertical: '10%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  logindesc: {
    fontFamily: 'NunitoSans-Regular',
    fontSize: 14,
    color: 'rgba(58, 61, 66, 0.8)',
  },
  loginbtntext: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    color: 'rgba(99, 121, 244, 1)',
  },
  inputwarning: {
    paddingLeft: '2%',
    fontFamily: 'NunitoSans-SemiBold',
    fontSize: 16,
  },
});

export default classes;
