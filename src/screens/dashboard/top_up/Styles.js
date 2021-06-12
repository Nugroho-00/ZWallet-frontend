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
});

export default classes;
