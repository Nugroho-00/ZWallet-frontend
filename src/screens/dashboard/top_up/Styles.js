import {StyleSheet, StatusBar} from 'react-native';

const classes = StyleSheet.create({
  container: {
    backgroundColor: '#6379F4',
    paddingTop: StatusBar.currentHeight + 25,
    paddingBottom: 15,
    paddingHorizontal: 15,
    borderBottomStartRadius: 20,
    borderBottomEndRadius: 20,
    marginBottom: 20,
  },
  headeruppersection: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  back: {
    color: '#FFFFFF',
    marginRight: 12,
  },
  title: {
    fontFamily: 'NunitoSans-Bold',
    color: '#FFFFFF',
    fontSize: 20,
  },
  headerbottomsection: {
    marginTop: '8%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
    backgroundColor: 'white',
    borderRadius: 10,
  },
  addbtn: {
    padding: 3,
    borderRadius: 10,
    backgroundColor: 'rgba(235, 238, 242, 1)',
  },
  topupmethod: {
    marginLeft: '3%',
  },
  methodtext: {
    fontFamily: 'NunitoSans-Regular',
    color: 'rgba(122, 120, 134, 1)',
    fontSize: 14,
  },
  methoddetailtext: {
    fontFamily: 'NunitoSans-Bold',
    color: 'rgba(77, 75, 87, 1)',
    fontSize: 16,
  },
  maincontainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: '10%',
  },
  instructionheader: {
    fontFamily: 'NunitoSans-Bold',
    color: 'rgba(77, 75, 87, 1)',
    fontSize: 16,
  },
  instructioncontainer: {
    marginTop: '6%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '7%',
    paddingVertical: '6%',
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    elevation: 25,
  },
  step: {
    fontFamily: 'NunitoSans-Bold',
    fontSize: 18,
    color: 'rgba(99, 121, 244, 1)',
  },
  instructiontext: {
    marginLeft: 15,
    fontFamily: 'NunitoSans-Regular',
    fontSize: 16,
    color: 'rgba(122, 120, 134, 1)',
  },

  // MODAL
  containerContent: {
    height: '80%',
    marginTop: 40,
    alignItems:'center',
    // justifyContent:'space-between',
  },
  titleModal:{
    fontFamily: 'NunitoSans-Bold',
    fontSize: 20,
    color: 'rgba(99, 121, 244, 1)',
  },
  containerHeader: {
    // flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: '#F1F1F1',
  },
  headerContent: {
    marginTop: '50%',
  },
  Modal: {
    borderTopStartRadius:20,
    borderTopEndRadius:20,
    backgroundColor: '#FAFCFF',
    height: 200,
    marginTop: 0,
    marginTop: '50%',
    paddingHorizontal:30,
  },
  mainModal: {
    flex: 1,
    bottom: 0,
  },
  line: {
    marginTop: 5,
    width: 100,
    height: 5,
    backgroundColor: '#7A7886',
    borderBottomStartRadius: 5,
    borderBottomEndRadius: 5,
  },


  createNewSection:{
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    position:'absolute',
    top:40,
    width:'100%'
    // bottom:50
    
  },

  numberInput: {
    // marginTop:50,
    // height:50,
    alignItems: 'center',
    // paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth:0,
    borderBottomWidth:1,
    
    width:'70%',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 30,
    color: 'rgba(99, 121, 244, 1)',
    textAlign:'center'
  },

  rupiah:{
    fontFamily: 'NunitoSans-Bold',
    fontSize: 30,
    color: 'rgba(99, 121, 244, 1)',
    // width:'20%',
    textAlign:'center',

  },
  sendOn:{
    justifyContent:'center',
    width:'100%',
    paddingHorizontal: 5,
    borderRadius: 12,
    marginLeft:5,
    height:50,
    position:'absolute',
    bottom:0,
    backgroundColor: 'rgba(99, 121, 244, 1)',

  },
  sendOff:{
    justifyContent:'center',
    width:'100%',
    paddingHorizontal: 5,
    borderRadius: 12,
    marginLeft:5,
    height:50,
    position:'absolute',
    bottom:0,
    backgroundColor: '#DADADA',

  },
  sendIcon:{
    color:'#6379F4',
    fontSize:25,
    textAlign:'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },

  txtTopUpOn:{
    fontSize:17,
    textAlign:'center',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,

    color:'#EAEDFF' ,
  },
  txtTopUpOff:{
    fontSize:17,
    textAlign:'center',
    fontFamily: 'NunitoSans-Bold',
    fontSize: 16,
    color:'#88888F' ,
  },
  errorMessage:{
    color:'red',
    fontFamily: 'NunitoSans-Regular',
    fontSize:14,
    marginTop:75
  },



});

export default classes;
